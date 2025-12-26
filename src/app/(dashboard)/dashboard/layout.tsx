import Sidebar from '@/components/layout/sidebar';

import type { ReactNode } from 'react';

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const DashLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className='layout mt-8 flex'>
      <Sidebar className='w-1/4' />
      <div className='w-3/4'>{children}</div>
    </div>
  );
};

export default DashLayout;
