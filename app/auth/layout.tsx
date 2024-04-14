import React from 'react';

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <nav className="text-teal-300 bg-cyan-800">
        Auth Layout
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
