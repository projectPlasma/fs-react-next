import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const GET = async (request) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  });
};

// export const  GET async (request) => {
//   const headersList = headers();
//   const referer = headersList.get('referer');

//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { referer: referer },
//   });
// }

// export const GET = async (request) => {
//   redirect('https://nextjs.org/');
// }
