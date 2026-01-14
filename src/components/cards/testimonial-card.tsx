'use client';

import { formatDate } from '@/lib/utils';

import DownloadTestimonialButton from '@/components/testimonials/buttons/download-testimonial-btn';
import EditTestimonialButton from '@/components/testimonials/buttons/edit-testimonial-btn';
import DeleteTestimonialButton from '@/components/testimonials/delete-testimonial-btn';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface IProps {
  testimonial: {
    id: string;
    authorName: string;
    authorTitle: string | null;
    authorCompany: string | null;
    content: string;
    // rating: number | null;
    status: 'PENDING' | 'APPROVED' | 'REJECTED';
    createdAt: Date;
  };
}

interface ContentFieldProps {
  field: string;
  heading: string;
}

const ContentField = ({ heading, field }: ContentFieldProps) => {
  return (
    <div>
      <div className='text-sm text-zinc-400'>{heading}</div>
      <p className='text-zinc-200'>{field}</p>
    </div>
  );
};

const TestimonialCard = ({ testimonial }: IProps) => {
  return (
    <Card className='w-full max-w-3xl bg-zinc-950 text-zinc-100'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <h3 className='text-xl font-semibold text-zinc-100'>
          {testimonial.authorName}
        </h3>
        <DeleteTestimonialButton testimonialId={testimonial.id} />
      </CardHeader>

      <CardContent className='mt-5 space-y-5'>
        <p className='text-zinc-300'>{testimonial.content}</p>

        <div className='flex flex-wrap justify-between gap-4'>
          <ContentField heading='Name' field={testimonial.authorName} />
          {testimonial.authorCompany && (
            <ContentField heading='Author Info' field={testimonial.authorCompany} />
          )}
          <ContentField
            heading='Created At'
            field={formatDate(testimonial.createdAt)}
          />
        </div>
      </CardContent>

      <CardFooter className='flex justify-end gap-4 border-t border-zinc-800 pt-4'>
        <DownloadTestimonialButton testimonial={testimonial} />
        <EditTestimonialButton testimonial={testimonial} />
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
