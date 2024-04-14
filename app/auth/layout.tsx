import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className='bg-cyan-800 text-teal-300'>Auth Layout</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
