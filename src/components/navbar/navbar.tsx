import { headers } from 'next/headers';
import Link from 'next/link';

import AuthMenu from './auth-menu-dropdown';
import HomepageLinks from './homepage-links';

import { auth } from '@/lib/auth';

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <nav className='bg-background sticky top-0 z-100'>
      <div className='layout relative flex h-16 items-center justify-between text-lg'>
        <h1 className='text-xl'>
          <Link href={'/'} className='font-brico text-xl font-black lg:text-3xl'>
            VouchFast
          </Link>
        </h1>

        {!session && <HomepageLinks />}
        {session && <AuthMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
