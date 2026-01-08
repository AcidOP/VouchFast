'use client';

import { useState, useTransition } from 'react';

import { useToast } from '@/hooks/use-toast';
import { Trash2 } from 'lucide-react';

import { deleteTestimonialAction } from '@/actions/testimonial.action';

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
  testimonialId: string;
}

const DeleteTestimonial = ({ testimonialId }: IProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        const result = await deleteTestimonialAction(testimonialId);

        if (!result.success) {
          throw new Error(result.message);
        }

        toast({
          title: 'Testimonial deleted',
          description: 'The testimonial has been removed.',
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
          variant='ghost'
          size='icon'
          className='text-destructive hover:bg-destructive'
        >
          <Trash2 className='h-5 w-5' />
          <span className='sr-only'>Delete testimonial</span>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            testimonial from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>

          <Button size='sm' variant='destructive' onClick={handleDelete}>
            {isPending ? 'Deleting…' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteTestimonial;
