import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <header className='flex-col items-center justify-center bg-white'>
      <h1
        className={cn('text-2xl font-semibold text-gray-800', font.className)}
      >
        Auth
      </h1>
      <p className='text-muted-foreground'> {label}</p>
    </header>
  );
};
