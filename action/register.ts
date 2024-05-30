"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import {RegisterSchema} from "@/schemas";
import {getUserByEmail} from "@/data/user";
import {generateVerificationToken} from "@/lib/tokens";
import {sendVerificationEmail} from "@/lib/mail";

export const register = async (value:z.infer<typeof RegisterSchema>) => {

  console.log(value)
  const validatedFields = RegisterSchema.safeParse(value)
  if (!validatedFields.success) {
    console.log(validatedFields.error)
    return {error: "validatedFields.error"}
  }

  const {email,password,name} = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return {error: "This email is already in use. Please use another email."}
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    },
  });

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(verificationToken.email, verificationToken.token)
  console.log(db.user)
  return {success: "Confirmation email sent. Please check your email to verify your account."}
}
