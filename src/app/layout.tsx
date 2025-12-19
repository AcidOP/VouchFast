import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { grotesque, jakarta } from '@/components/fonts';
import Navbar from '@/components/navbar';

import type { ReactNode } from 'react';

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body
        className={cn(jakarta.variable, grotesque.variable, 'antialiased')}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
