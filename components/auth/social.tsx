'use client';

import React from 'react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { FaYandex } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
let count = 0;

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const onClick = (provider: 'google' | 'github' | 'yandex') => {
    signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className='flex items-center space-x-4'>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
        onClick={() => {
          onClick('google');
        }}
      >
        <FcGoogle className='h-5 w-5' />
      </Button>

      <Button
        variant='outline'
        size='lg'
        className='w-full'
        onClick={() => {
          onClick('github');
        }}
      >
        <FaGithub className='h-5 w-5' />
      </Button>
      <Button
        variant='outline'
        size='lg'
        className='w-full'
        onClick={() => {
          onClick('yandex');
        }}
      >
        <FaYandex className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default Social;
