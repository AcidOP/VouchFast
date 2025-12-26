import { Card, CardContent } from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export function ListSkeleton() {
  return (
    <div className='min-h-screen bg-black p-8 font-sans text-white'>
      <div className='mx-auto max-w-5xl'>
        <div className='mb-10 flex items-center justify-between'>
          <Skeleton className='h-10 w-32 bg-neutral-800' />
          <Skeleton className='h-10 w-44 bg-neutral-800' />
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {[1, 2, 3].map(i => (
            <Card
              key={i}
              className='overflow-hidden rounded-xl border-none border-neutral-800 bg-neutral-900 shadow-2xl'
            >
              <CardContent className='p-6'>
                <Skeleton className='mb-10 h-7 w-3/4 bg-neutral-800' />
                <div className='flex items-center justify-between'>
                  <Skeleton className='h-5 w-20 bg-neutral-800' />
                  <Skeleton className='h-9 w-20 rounded-md bg-neutral-800' />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
