import { useState, useTransition } from 'react';

import { updateListAction } from '@/actions/list.actions';

import { cn } from '@/lib/utils';

import TestimonialApprovalToggle from '@/components/lists/testimonial-approval-toggle';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';

import type { ListFormState } from '@/components/lists/edit/edit-list.client';

interface Props {
  listId: string;
  value: ListFormState;
  onChange: (value: ListFormState) => void;
}

const ListForm = ({ listId, value, onChange }: Props) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setError(null);

    startTransition(async () => {
      try {
        await updateListAction(listId, value);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      }
    });
  };

  const isDisabled =
    !value.listName.trim() || !value.inviteMessage.trim() || isPending;

  return (
    <div className='bg-primary-foreground flex flex-col rounded-lg border p-6'>
      <section>
        <h2 className='mb-6 text-xl font-semibold'>Editing list</h2>

        <div className='space-y-4'>
          <Input
            placeholder='List name (visible in your dashboard)'
            value={value.listName}
            onChange={e => onChange({ ...value, listName: e.target.value })}
          />

          <textarea
            className='w-full rounded border p-2'
            placeholder='Invitation message'
            rows={4}
            value={value.inviteMessage}
            onChange={e => onChange({ ...value, inviteMessage: e.target.value })}
          />

          <TestimonialApprovalToggle
            value={value.defaultTestimonialState}
            onChange={status =>
              onChange({ ...value, defaultTestimonialState: status })
            }
          />
        </div>

        {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
      </section>

      <Button
        onClick={e => void handleSubmit(e)}
        className={cn('mt-6 ml-auto w-min', isPending && 'opacity-50')}
        disabled={isDisabled}
      >
        Update
      </Button>
    </div>
  );
};

export default ListForm;
