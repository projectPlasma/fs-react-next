export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const product = await res.json();

  return Response.json({ product });
};

// import { headers } from 'next/headers';

// export const GET = async (request) => {
//   const headersList = headers();
//   const referer = headersList.get('referer');

//   return new Response('Hello, Next.js', {
//     status: 200,
//     headers: { referer: referer },
//   });
// };
