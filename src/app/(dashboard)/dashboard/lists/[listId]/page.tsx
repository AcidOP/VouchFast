import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import { getListWithTestimonials } from '@/actions/list.actions';

import TestimonialCard from '@/components/cards/testimonial-card';
import ListHeader from '@/components/lists/create/list-header';

const ListPage = async ({ params }: PageProps<'/dashboard/lists/[listId]'>) => {
  const user = await getUser();
  if (!user) redirect('/login');

  const { listId } = await params;
  const { list, testimonials } = await getListWithTestimonials(listId, user.id);

  return (
    <>
      <ListHeader {...list} />

      {testimonials.length === 0 ? (
        <p className='text-muted-foreground mt-8'>No testimonials found.</p>
      ) : (
        <div className='mt-8 grid gap-6'>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListPage;
