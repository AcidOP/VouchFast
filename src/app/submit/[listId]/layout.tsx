import Container from '@/components/layout/container';

import type { ReactNode } from 'react';

type RootLayoutProps = Readonly<{ children: ReactNode }>;

const DashLayout = ({ children }: RootLayoutProps) => {
  return <Container>{children}</Container>;
};

export default DashLayout;
