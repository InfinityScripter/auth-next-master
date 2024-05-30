import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {getUserById} from "@/data/user";
import {db} from "@/lib/db"
import authConfig from "./auth.config"
import {UserRole} from ".prisma/client";



export const { handlers, signIn, signOut, auth } = NextAuth({
   pages:{
       signIn: "/auth/login",
       error: "/auth/error",
   },
    events:{
        async linkAccount({user}){
            await db.user.update({
                where: {id: user.id},
                data: {emailVerified: new Date()}
            })
        }
    },
    callbacks: {
        async signIn({user , account}) {
            //Allow OAuth2 providers to sign in without email verification
            if (account?.provider !== "credentials") return true

            //Prevent SigIn without email verification
            const existingUser = await getUserById(user.id)
            if (!existingUser?.emailVerified) return false

            //TODO : Add 2FA check here
            return true
        },
        async session({session, token}) {
            if (token.sub && session.user) {
            session.user.id = token.sub}

            if (token.role && session.user) {
                session.user.role = token.role as UserRole
            }

            return session
        },
        async jwt({token}) {
            if (!token.sub) return token
const existingUser = await getUserById(token.sub);
if (!existingUser) return token;

            token.role = existingUser.role;
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig,

})
