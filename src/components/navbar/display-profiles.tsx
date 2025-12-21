'use client';

import { createAuthClient } from 'better-auth/react';

import AuthMenu from './auth-menu/auth-menu-dropdown';
import HomepageLinks from './auth-menu/homepage-links';
import NavSkeleton from './auth-menu/nav-skeleton';

const { useSession } = createAuthClient();

const DisplayProfile = () => {
  const { data: session, isPending } = useSession();
  if (isPending) return <NavSkeleton />;

  return (
    <>
      {!session?.user && <HomepageLinks />}
      {session?.user && <AuthMenu user={session.user} />}
    </>
  );
};

export default DisplayProfile;
