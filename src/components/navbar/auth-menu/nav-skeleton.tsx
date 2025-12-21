import Skeleton from '@/components/ui/skeleton';

const NavSkeleton = () => {
  return (
    <div className='relative flex w-full items-center justify-end space-x-4'>
      <section className='absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2'>
        <div className='flex gap-3'>
          <Skeleton className='h-8 w-32' />
          <Skeleton className='h-8 w-32' />
          <Skeleton className='h-8 w-32' />
          <Skeleton className='h-8 w-32' />
        </div>
      </section>
      <Skeleton className='h-12 w-12 rounded-full' />
    </div>
  );
};

export default NavSkeleton;
