'use client';

import { useState } from 'react';

import { createAuthClient } from 'better-auth/react';
import { LogOut } from 'lucide-react';

import Button from '@/components/ui/button';

const { signOut } = createAuthClient();

const SignoutButton = () => {
  const [loading, setLoading] = useState(false);
  const logouthandler = async () => {
    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess() {
          location.reload();
        },
      },
    });
  };

  return (
    <Button
      onClick={() => void logouthandler()}
      variant='destructive'
      className='mt-4 w-full rounded text-sm'
      disabled={loading}
    >
      <LogOut size={15} className='mr-2' />
      Logout
    </Button>
  );
};
SignoutButton.displayName = 'Signout Button';

export default SignoutButton;
