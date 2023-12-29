'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className='bg-orange-500 border border-orange-400 rounded-full text-black hover:bg-orange-800 hover:text-white'
      >
        Try again!
      </button>
    </div>
  );
};

export default Error;
