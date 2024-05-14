"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import {RegisterSchema} from "@/schemas";
import {revalidatePath, revalidateTag} from "next/cache";

export const register = async (value:z.infer<typeof RegisterSchema>) => {

  console.log(value)
  const validatedFields = RegisterSchema.safeParse(value)
  // revalidatePath()
  // revalidateTag()
  if (!validatedFields.success) {
    console.log(validatedFields.error)
    return {error: "validatedFields.error"}
  }

  const {email,password,name} = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
const existingUser = await db.user.findUnique(
    {where: {email}}
);
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

  // TODO : Send verification email to user
  console.log(db.user)
  return {success: "user created successfully"}
}
