'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Button from '@/components/ui/button';

interface DeleteAccountBtnProps {
  onConfirm: () => void;
  isPending: boolean;
}

const DeleteAccountBtn = ({ onConfirm, isPending }: DeleteAccountBtnProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant='destructive' disabled={isPending}>
          Delete Account
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>

          <AlertDialogAction
            disabled={isPending}
            onClick={onConfirm}
            className='bg-destructive hover:bg-destructive/90'
          >
            {isPending ? 'Deleting…' : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
DeleteAccountBtn.displayName = 'DeleteAccountBtn';

export default DeleteAccountBtn;
