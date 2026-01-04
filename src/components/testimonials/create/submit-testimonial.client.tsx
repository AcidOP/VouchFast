'use client';

import { useState, useTransition } from 'react';

import { createTestimonialAction } from '@/actions/testimonial.action';

import Button from '@/components/ui/button';

interface Props {
  id: string;
  name: string;
  message: string;
}

const SubmitTestimonialClient = ({ id, name, message }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    authorName: '',
    authorTitle: '',
    authorCompany: '',
    content: '',
  });

  const isDisabled =
    isPending ||
    form.authorName.trim().length < 2 ||
    form.content.trim().length < 10;

  const onSubmit = () => {
    setError(null);

    startTransition(async () => {
      try {
        await createTestimonialAction({
          listId: id,
          ...form,
        });
        setSuccess(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Submission failed');
      }
    });
  };

  if (success) {
    return (
      <div className='mx-auto mt-24 flex min-h-[70vh] max-w-md flex-col justify-center text-center'>
        <h3 className='text-xl font-semibold'>Thank you!</h3>
        <p className='text-muted-foreground mt-2'>
          Your testimonial has been submitted for review.
        </p>
      </div>
    );
  }

  return (
    <div className='mx-auto mt-16 max-w-xl space-y-6'>
      <h1 className='text-2xl font-semibold'>{name}</h1>

      <p className='text-muted-foreground'>{message}</p>

      <input
        placeholder='Your name'
        className='w-full rounded border p-2'
        value={form.authorName}
        onChange={e => setForm({ ...form, authorName: e.target.value })}
      />

      <input
        placeholder='Your role (optional)'
        className='w-full rounded border p-2'
        value={form.authorTitle}
        onChange={e => setForm({ ...form, authorTitle: e.target.value })}
      />

      <input
        placeholder='Company (optional)'
        className='w-full rounded border p-2'
        value={form.authorCompany}
        onChange={e => setForm({ ...form, authorCompany: e.target.value })}
      />

      <textarea
        rows={5}
        placeholder='Write your testimonial...'
        className='w-full rounded border p-2'
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
      />

      {error && <p className='text-destructive text-sm'>{error}</p>}

      <Button onClick={onSubmit} disabled={isDisabled}>
        {isPending ? 'Submitting…' : 'Submit testimonial'}
      </Button>
    </div>
  );
};

export default SubmitTestimonialClient;
