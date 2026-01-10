import Sidebar from '@/components/layout/sidebar';

import type { ReactNode } from 'react';

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const DashLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className='layout mt-8 flex'>
      <Sidebar className='hidden w-1/4 lg:block' />
      <div className='w-full lg:w-3/4'>{children}</div>
    </div>
  );
};

export default DashLayout;
