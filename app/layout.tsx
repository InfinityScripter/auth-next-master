import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sh0ny project',
  description: 'Full ready to use auth app with Next.js, Tailwind CSS.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang='en'>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
