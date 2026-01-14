'use client';

import { Check, Clock } from 'lucide-react';

import { cn } from '@/lib/utils';

import Button from '@/components/ui/button';

import type { TestimonialStatus } from '@/db/schema';

interface Props {
  value: TestimonialStatus;
  onChange: (value: TestimonialStatus) => void;
}

const TestimonialApprovalToggle = ({ value, onChange }: Props) => {
  return (
    <div className='space-y-2'>
      <p className='text-sm font-medium'>Testimonial approval</p>

      <div className='flex gap-2'>
        <Button
          type='button'
          variant={value === 'APPROVED' ? 'default' : 'outline'}
          className={cn('flex-1 justify-start gap-2')}
          onClick={() => onChange('APPROVED')}
        >
          <Check className='h-4 w-4' />
          Auto-approve
        </Button>

        <Button
          type='button'
          variant={value === 'PENDING' ? 'default' : 'outline'}
          className={cn('flex-1 justify-start gap-2')}
          onClick={() => onChange('PENDING')}
        >
          <Clock className='h-4 w-4' />
          Require approval
        </Button>
      </div>

      <p className='text-muted-foreground text-xs'>
        {value === 'APPROVED'
          ? 'New testimonials will appear publicly right away.'
          : 'You’ll review testimonials before they appear publicly.'}
      </p>
    </div>
  );
};

export default TestimonialApprovalToggle;
