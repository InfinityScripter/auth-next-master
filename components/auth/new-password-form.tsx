'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewPasswordSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {useSearchParams} from "next/navigation";

import CardWrapper from '@/components/auth/card-wrapper';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import React, {useState, useTransition} from "react";
import {newPassword} from "@/action/new-password";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [error,setError] = useState<string | undefined>('');
  const [success,setSuccess] = useState<string | undefined>('');
  const [isPending,startTransition] = useTransition()
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('')
    setSuccess('')

    console.log(values)
    startTransition(() => {
      newPassword(values,token)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
        })
    });
  };

  return (
    <CardWrapper
      headerLabel='Enter your new password'
      backButtonLabel='Back to login'
      backButtonHref='/auth/login'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className=''>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}

                      {...field} type='password' placeholder={'******'} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error } />
          <FormSuccess message={success} />
          <Button
            disabled={isPending}

            variant='secondary' className='w-full' type='submit'>
  Reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
