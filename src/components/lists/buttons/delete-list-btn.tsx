'use client';

import { useState, useTransition } from 'react';

import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';

import { deleteListAction } from '@/actions/list.actions';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Button from '@/components/ui/button';

interface IProps {
  listId: string;
}

const DeleteList = ({ listId }: IProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteListAction(listId);

        if (!result.success) {
          throw new Error(result.message);
        }

        toast({
          title: 'List deleted',
          description: 'The list and its testimonials were removed.',
        });

        setOpen(false);
      } catch (err) {
        toast({
          title: 'Deletion failed',
          description: err instanceof Error ? err.message : 'Something went wrong',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant='outline'
          className='text-destructive hover:bg-destructive hover:text-zinc-200'
          size='sm'
        >
          <Trash2 className='mr-2 h-4 w-4' />
          Delete List
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action *<span className='font-bold'>cannot</span>* be undone. This
            will permanently delete the List and corresponding testimonials from our
            database.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>

          <Button
            size='sm'
            variant='destructive'
            disabled={isPending}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
DeleteList.displayName = 'DeleteList';

export default DeleteList;
