import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <nav className='bg-amber-500 text-amber-50'>This is the nav</nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
