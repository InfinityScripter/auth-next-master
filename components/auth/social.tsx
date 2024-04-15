'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Social = () => {
  return (
    <div className='flex items-center space-x-4'>
      <Button variant='outline' size='lg' className='w-full' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>

      <Button variant='outline' size='lg' className='w-full' onClick={() => {}}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default Social;
