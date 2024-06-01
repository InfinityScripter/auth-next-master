import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className='flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-green-500'>
          {children}
      </div>
  );
};

export default AuthLayout;
