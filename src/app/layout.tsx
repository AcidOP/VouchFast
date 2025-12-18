import '@/styles/globals.css';

import Navbar from '@/components/navbar';

import type { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
