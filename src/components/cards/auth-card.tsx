import Link from 'next/link';

import { cn } from '@/lib/utils';

import EmailAuth from '@/components/auth/email';
import Oauth from '@/components/auth/oauth';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type AuthCardProps = {
  type: 'login' | 'signup';
  className?: string;
};

export default function AuthCard({ type, className }: AuthCardProps) {
  const isLogin = type === 'login';
  const title = isLogin ? 'Login' : 'Signup';
  const buttonText = isLogin ? 'Login' : 'Signup';
  const alternateAuthText = isLogin ? "Don't have an account?" : 'Have an account?';
  const alternateAuthLink = isLogin ? '/auth' : '/login';
  const alternateAuthLinkText = isLogin ? 'Signup' : 'Login';

  return (
    <Card className={cn('w-full max-w-md', className)}>
      <CardHeader>
        <CardTitle className='text-center text-5xl font-black'>{title}</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        <Oauth type={type} />

        <div className='flex items-center gap-4'>
          <hr className='grow' />
          <span className='text-muted-foreground text-sm'>OR</span>
          <hr className='grow' />
        </div>

        <EmailAuth buttonText={buttonText} />

        {!isLogin && (
          <p className='text-muted-foreground text-xs'>
            By registering you agree to our{' '}
            <Link href='#' className='hover:text-primary underline'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='#' className='hover:text-primary underline'>
              Privacy Policy
            </Link>
          </p>
        )}
      </CardContent>

      <CardFooter className='justify-center'>
        <p className='text-muted-foreground text-sm'>
          {alternateAuthText}{' '}
          <Link href={alternateAuthLink} className='text-primary ml-1 font-medium'>
            {alternateAuthLinkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
