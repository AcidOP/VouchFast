'use client';

import { Download } from 'lucide-react';

import { downloadJson } from '@/lib/utils';

import Button from '@/components/ui/button';

interface IProps {
  testimonial: {
    id: string;
    authorName: string;
    authorTitle: string | null;
    authorCompany: string | null;
    content: string;
    rating: number | null;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
  };
}

const DownloadTestimonialButton = ({ testimonial }: IProps) => {
  return (
    <Button
      variant='secondary'
      size='sm'
      className='text-zinc-400 hover:text-zinc-300'
      onClick={() =>
        downloadJson(testimonial, `vouchfast-${testimonial.authorName}.json`)
      }
    >
      <Download className='mr-2 h-4 w-4' />
      Download
    </Button>
  );
};

export default DownloadTestimonialButton;
