"use server";

import * as z from "zod";

import {LoginSchema} from "@/schemas";
import {revalidatePath, revalidateTag} from "next/cache";

export const login = async (value:z.infer<typeof LoginSchema>) => {

  console.log(value)
  const validatedFields = LoginSchema.safeParse(value)
  // revalidatePath()
  // revalidateTag()
  if (!validatedFields.success) {
    console.log(validatedFields.error)
    return {error: "validatedFields.error"}
  }

  return {success: "success send data to server"}
}
