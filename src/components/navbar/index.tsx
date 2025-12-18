import Link from 'next/link';

// import AuthenticatedNavActions from './authenticated-navactions';
import HomepageLinks from './homepage-links';


// import { grotesque } from '@/components/font/grotesque';

const Navbar = () => {
  return (
    <nav className='bg-background sticky top-0 z-100'>
      <div className='layout relative flex h-16 items-center justify-between text-lg'>
        <h1 className='text-xl'>
          <Link href={'/'} className='text-xl font-black lg:text-3xl'>
            VouchFast
          </Link>
        </h1>

        <HomepageLinks />
        {/* <AuthenticatedNavActions /> */}
      </div>
    </nav>
  );
};

export default Navbar;
