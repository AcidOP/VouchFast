'use client';

import { createAuthClient } from 'better-auth/react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/button';

const { signOut } = createAuthClient();

const SignoutButton = () => {
  const router = useRouter();

  const logouthandler = async () => {
    await signOut();
    router.refresh();
    router.push('/');
  };

  return (
    <Button
      onClick={() => void logouthandler()}
      variant='destructive'
      className='mt-4 w-full rounded text-sm'
    >
      <LogOut size={15} className='mr-2' />
      Logout
    </Button>
  );
};

export default SignoutButton;
