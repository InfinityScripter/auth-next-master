import React from 'react';
import { NavBar } from '@/app/(protected)/_components/navbar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-y-10 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-800'>
      <NavBar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
