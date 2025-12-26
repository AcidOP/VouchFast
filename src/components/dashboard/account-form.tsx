'use client';

import { useState, useTransition } from 'react';

import { useToast } from '@/hooks/use-toast';
import { AvatarFallback } from '@radix-ui/react-avatar';

import { Avatar, AvatarImage } from '../ui/avatar';
import DeleteAccountBtn from './delete-account-btn';

import { deleteAccountAction, updateAccountAction } from '@/actions/account.actions';

import Heading from '@/components/dashboard-heading';

import Button from '@/components/ui/button';

interface Props {
  name: string;
  email: string;
  image: string | undefined;
}

const AccountSettingsClient = ({ email, image, name }: Props) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [accountName, setAccountName] = useState(name);
  const [accountEmail, setAccountEmail] = useState(email);

  const onSave = () => {
    startTransition(async () => {
      const result = await updateAccountAction({
        name: accountName,
        email: accountEmail,
      });

      toast({
        title: result.success ? 'Saved' : 'Error',
        description: result.message,
        variant: result.success ? 'default' : 'destructive',
      });
    });
  };

  const onDelete = () => {
    startTransition(async () => {
      try {
        await deleteAccountAction();
      } catch {
        toast({
          title: 'Error',
          description: 'Failed to delete account.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <div className='space-y-10'>
      {/* Profile Settings */}
      <section className='mx-auto flex max-w-2xl flex-col space-y-6'>
        <Heading text='Account Settings' className='pb-6' />

        <Avatar className='border-primary mx-auto h-32 w-32 border-2'>
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>

        <label>
          <span>Name</span>
          <input
            className='mt-1 w-full rounded border p-2'
            value={accountName}
            onChange={e => setAccountName(e.target.value)}
          />
        </label>

        <label>
          <span>Email</span>
          <input
            className='mt-1 w-full rounded border p-2'
            value={accountEmail}
            onChange={e => setAccountEmail(e.target.value)}
          />
        </label>

        <Button onClick={onSave} disabled={isPending}>
          {isPending ? 'Saving…' : 'Save Changes'}
        </Button>

        {/* Delete Account */}
        <div className='w-full'>
          <h2 className='text-destructive mb-2 font-semibold'>Danger Zone</h2>
          <DeleteAccountBtn onConfirm={onDelete} isPending={isPending} />
        </div>
      </section>
    </div>
  );
};

export default AccountSettingsClient;
