import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  });
}

// export async function GET(request) {
//   const headersList = headers();
//   const referer = headersList.get('referer');

//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { referer: referer },
//   });
// }

// export async function GET(request) {
//   redirect('https://nextjs.org/');
// }
