'use client';

import { createAuthClient } from 'better-auth/react';

import AuthMenu from './auth-menu/auth-menu-dropdown';
import HomepageLinks from './auth-menu/homepage-links';

const { useSession } = createAuthClient();

const DisplayProfile = () => {
  const { data: session, isPending } = useSession();
  if (isPending) return null;

  console.log('Session in DisplayProfile:', session);

  return (
    <>
      {!session?.user && <HomepageLinks />}
      {session?.user && <AuthMenu user={session.user} />}
    </>
  );
};

export default DisplayProfile;
