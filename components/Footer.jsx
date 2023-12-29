'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <header className='w-full'>
      <nav className='flex bg-slate-800 justify-between items-center max-container py-4'>
        <a href='/'>
          <h1>Footer</h1>
        </a>

        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          <li>
            <Link href='/dashboard'>Footer Link #1</Link>
          </li>
          <li>
            <Link href='/dashboard'>Footer Link #1</Link>
          </li>
          <li>
            <Link href='/dashboard'>Footer Link #2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Footer;
