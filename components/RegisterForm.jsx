'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are necessary!');
      return;
    }

    try {
      const resUserExists = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError('User already exist.');
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push('/');
      } else {
        console.log('User registration failed.');
      }
    } catch (error) {
      console.log('Error during registerion: ', error);
    }
  };

  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg shadow-[#FDFD96] p-5 rounded-lg border border-[#FDFD96] border-t-4 border-t-green-400'>
        <h1 className='text-xl font-bold my-4'>Join NOW!</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Username'
            className='rounded-full px-2 py-2 text-slate-800 font-semibold'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
            className='rounded-full px-2 py-2 text-slate-800 font-semibold'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
            className='rounded-full px-2 py-2 text-slate-800 font-semibold'
          />

          <button className='bg-green-600 text-white rounded-full font-bold cursor-pointer px-6 py-2 shadow-md shadow-green-700/80'>
            Join NOW
          </button>

          {error && (
            <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
              {error}
            </div>
          )}

          <Link className='text-sm mt-3 text-right' href={'/'}>
            Already have an account? <span className='underline'>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
