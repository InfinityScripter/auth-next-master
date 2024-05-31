"use server"
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";


export const reset = async (value:z.infer<typeof ResetSchema>) => {

  const validatedFields = ResetSchema.safeParse(value)
  if (!validatedFields.success) {
    return {error: "Invalid email"}
  }

  const {email} = validatedFields.data

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email) {
    return {error: "Email is not exist. Please register first."}
  }

  // TODO : Generate token and send email
  return {success: "Confirmation email sent. Please check your email to reset your password."}
}
