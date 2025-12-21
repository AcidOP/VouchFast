import Link from 'next/link';

import DisplayProfile from './display-profiles';

const Navbar = () => {
  return (
    <nav className='bg-background sticky top-0 z-100'>
      <div className='layout relative flex h-16 items-center justify-between text-lg'>
        <h1 className='text-xl'>
          <Link href={'/'} className='font-brico text-xl font-black lg:text-3xl'>
            VouchFast
          </Link>
        </h1>

        <DisplayProfile />
      </div>
    </nav>
  );
};

export default Navbar;
