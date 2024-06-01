'use server';
import * as z from 'zod';
import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (value: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(value);
  if (!validatedFields.success) {
    return { error: 'Invalid email' };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email) {
    return { error: 'Email is not exist. Please register first.' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return {
    success:
      'Confirmation email sent. Please check your email to reset your password.',
  };
};
