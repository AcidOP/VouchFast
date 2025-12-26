'use client';

import { useState, useTransition } from 'react';

import { useToast } from '@/hooks/use-toast';
import { Edit } from 'lucide-react';

import { editTestimonialAction } from '@/actions/testimonial.action';

import Button from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface IProps {
  testimonial: {
    id: string;
    authorName: string;
    authorTitle: string | null;
    authorCompany: string | null;
    content: string;
    rating: number | null;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    createdAt: Date;
  };
}

const EditTestimonialButton = ({ testimonial }: IProps) => {
  const [text, setText] = useState(testimonial.content);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const updateTestimonial = () => {
    startTransition(async () => {
      const result = await editTestimonialAction(testimonial.id, {
        content: text,
      });

      toast({
        title: result.success ? 'Updated' : 'Error',
        description: result.message,
        variant: result.success ? 'default' : 'destructive',
      });

      if (result.success) {
        setOpen(false); // ✅ CLOSE MODAL
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='secondary'
          size='sm'
          className='text-zinc-400 hover:text-zinc-300'
        >
          <Edit className='mr-2 h-4 w-4' />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Testimonial</DialogTitle>

          <DialogDescription className='flex flex-col'>
            <textarea
              className='bg-primary-foreground focus:ring-primary mt-4 w-full resize-none rounded-lg p-3 text-zinc-100 focus:ring-2 focus:outline-none'
              rows={7}
              defaultValue={text}
              onChange={e => setText(e.target.value)}
            />

            <Button
              size='sm'
              className='mt-4 ml-auto'
              onClick={updateTestimonial}
              disabled={isPending}
            >
              {isPending ? 'Updating…' : 'Update'}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTestimonialButton;
