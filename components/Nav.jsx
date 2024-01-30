'use client';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className='absolute inset-0 z-10'>
      <header className='w-full mx-auto z-10 relative items-center justify-between'>
        <nav className='flex bg-transparent justify-between items-center max-container px-3 pt-0.5'>
          {/* Logo section */}
          <div>
            <Link href='/'>
              <Image
                src={'/images/liveThickLogo.png'}
                alt='LVTK Logo'
                width={180}
                height={120}
              />
            </Link>
          </div>

          {/* Links section */}
          <div>
            <ul className='flex flex-1 justify-center items-center gap-4 font-extrabold'>
              <li>
                <Link className='text-red-50 hover:text-red-200' href='/signup'>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  className='text-red-50 hover:text-red-200'
                  href='/dashboard'
                >
                  Link #1
                </Link>
              </li>
              <li>
                <Link
                  className='text-red-50 hover:text-red-200'
                  href='/dashboard'
                >
                  Link #2
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
