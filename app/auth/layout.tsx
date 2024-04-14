import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className='bg-cyan-800 text-teal-300'>Auth Layout</nav>
      <div className=' bg-sky-500'>{children}</div>
    </div>
  );
};

export default AuthLayout;
