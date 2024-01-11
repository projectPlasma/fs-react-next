'use client';

import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className=''>
      <header className='w-full z-10 relative items-center justify-between'>
        <nav className='flex bg-transparent justify-between items-center max-container py-4'>
          <Link href='/'>
            <Image
              src={'/images/liveThickLogo.png'}
              alt='LVTK Logo'
              width={180}
              height={120}
            />
          </Link>

          <ul className='flex flex-1 justify-center items-center gap-4 '>
            <li>
              <Link href='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link href='/dashboard'>Link #1</Link>
            </li>
            <li>
              <Link href='/dashboard'>Link #2</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
