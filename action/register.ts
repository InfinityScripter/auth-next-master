"use server";

import * as z from "zod";

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

  return {success: "success send data to server"}
}
