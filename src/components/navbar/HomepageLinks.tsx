import Image from 'next/image';
import Link from 'next/link';

import links from '@/config/navlinks';

import { getServerSession } from '@/server/session';

import doubleArrow from '@/assets/double-arrow.svg';

import { Button } from '@/components/ui/button';

const HomepageLinks = async () => {
  const session = await getServerSession();

  return (
    <div className='flex items-center'>
      <section className='absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block'>
        <ul className='flex space-x-4'>
          {links.map(link => (
            <li key={link.url}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      {!session && (
        <section className='hidden space-x-2 lg:flex'>
          <Link href='/login'>
            <Button variant='ghost'>Login</Button>
          </Link>

          <Link href='/auth'>
            <Button className='gap-2'>
              Get Started
              <Image src={doubleArrow} height={20} width={20} alt='doodle' />
            </Button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default HomepageLinks;
