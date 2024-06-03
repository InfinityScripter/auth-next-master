import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import Image from "next/image";

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});
export default function Home() {
  return (
      <>
        <main className='flex min-h-full h-full flex-col items-center justify-center bg-blue-500 py-12 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            <h1
                className={cn(
                    'text-4xl font-bold text-white',
                    font,
                    'text-center'
                )}
            >
              My authenticating app
            </h1>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-center justify-center">
                <Image src={"/images/logo.png"} alt="logo" width={48} height={48} />
              </div>
            </div>
            <p className='text-left text-lg text-white'>
              A authenticating app built with Next.js, Tailwind CSS.
            </p>
            <div
                className="
                        flex
                        items-center
                        justify-center
                        space-x-4"
            >
              <LoginButton mode='modal' asChild>
                <Button variant='secondary' size='lg'>
                  Sign In
                </Button>
              </LoginButton>
            </div>
          </div>
        </main>
      </>
  );
}
