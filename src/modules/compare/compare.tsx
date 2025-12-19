import { Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>;

type ListProps = {
  list: string[];
  className?: string;
  icon: IconType;
};

const List = ({ list, className, icon: Icon }: ListProps) => {
  return (
    <ul className={cn('mt-5', className)}>
      {list.map((text, index) => (
        <li key={index} className='mt-1 font-bold'>
          <Icon className='mr-2 inline-block' />
          {text}
        </li>
      ))}
    </ul>
  );
};

const Compare = () => {
  const without = [
    'Chase clients for testimonials',
    'Manage testimonials manually',
    'Update testimonials regularly',
  ];

  const withd = ['No Chase', 'No manual management', 'No manual updates'];

  return (
    <div className='bg-accent'>
      <div className='layout py-16'>
        <h2 className='mx-auto w-full text-center text-4xl font-black md:text-5xl lg:max-w-4xl lg:text-6xl'>
          VouchFast is here to change the game.
        </h2>

        <div className='mt-20 flex flex-col justify-around gap-5 md:flex-row xl:px-16'>
          <div className='w-full rounded-lg bg-red-800 p-10 shadow-lg lg:max-w-xl'>
            <h3 className='text-xl font-bold text-red-100'>Without VouchFast</h3>
            <List list={without} className='text-red-300' icon={X} />
          </div>

          <div className='border-primary w-full rounded-lg border-2 bg-green-800 p-10 shadow-lg lg:max-w-xl'>
            <h3 className='text-xl font-bold text-green-100'>With VouchFast</h3>
            <List list={withd} className='text-green-300' icon={Check} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
