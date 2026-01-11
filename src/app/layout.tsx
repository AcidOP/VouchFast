import '@/lib/env';
import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { grotesque, jakarta } from '@/components/fonts';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import Toaster from '@/components/ui/toast/toast-host';

import type { ReactNode } from 'react';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang='en'>
      <body className={cn(jakarta.variable, grotesque.variable, 'antialiased')}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
