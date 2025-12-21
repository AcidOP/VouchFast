import Sidebar from '@/components/layout/sidebar';

import type { ReactNode } from 'react';

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <div className='layout mt-8 flex'>
        <Sidebar className='w-1/4' />
        <div className='w-3/4'>{children}</div>
      </div>
    </html>
  );
};

export default RootLayout;
