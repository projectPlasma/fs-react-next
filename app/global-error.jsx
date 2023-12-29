'use client';

const GlobalError = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className='bg-orange-500 border border-orange-400 rounded-full text-black hover:bg-orange-800 hover:text-white'
        >
          Try again
        </button>
      </body>
    </html>
  );
};

export default GlobalError;
