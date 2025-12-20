import { Sansita } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const sansita = Sansita({ subsets: ['latin'], weight: '700' });

const Footer = () => {
  return (
    <footer>
      <div className='layout pt-16 pb-6 lg:pt-24'>
        <div className='flex flex-col gap-8 lg:flex-row'>
          <section className='w-full text-center lg:text-start'>
            <h3 className={cn('text-7xl font-black', sansita.className)}>
              VouchFast
            </h3>
            <p className='mt-6 text-lg leading-relaxed font-medium text-gray-500'>
              Your ultimate Testimonial collecting tool.
            </p>
          </section>

          <div className='flex w-full flex-col gap-10 md:flex-row md:justify-center md:gap-36 lg:justify-end lg:gap-10'>
            <div className='text-center sm:text-left'>
              <p className='text-xl font-medium'>About Us</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <Link
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/#features'
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/pricing'
                  >
                    Pricing
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/#faq'
                  >
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/#contact'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-xl font-medium'>Company</p>

              <ul className='mt-8 space-y-4 text-sm'>
                <li>
                  <a
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/terms-and-conditions'
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-200 transition hover:text-gray-400'
                    href='/privacy-policy'
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-zinc-800 pt-6'>
          <div className='text-center sm:flex sm:justify-between sm:text-left'>
            <p className='text-sm text-gray-500'>
              <span className='block sm:inline'>
                Made with 💝 by{' '}
                <a
                  href='https://acidop.codes'
                  target='_blank'
                  rel='noreferrer'
                  className='text-primary'
                >
                  AcidOP
                </a>
              </span>
            </p>

            <p className='mt-4 text-sm text-gray-500 sm:order-first sm:mt-0'>
              &copy;VouchFast, {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
