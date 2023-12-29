import { connectToDB } from '@/utils/database';

export const GET = async (request) => {
  await connectToDB();
  // Handle GET request for /api/users
  // Retrieve users from the database or any data source
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];

  // Send the users as a response
  return new Response(JSON.stringify(users));
};

// export const GET = async (request) => {
//   return new Response('Hello, Next.js!');
// }

// export async function POST(request: Request) {}
// export const POST = async (request: Request) => {}

// export async function HEAD(request: Request) {}
// export const HEAD = async (request: Request) => {}

// export async function PUT(request: Request) {}
// export const PUT = async (request: Request) => {}

// export async function DELETE(request: Request) {}
// export const DELETE = async (request: Request) => {}

// export async function PATCH(request: Request) {}
// export const PATCH => async (request: Request) => {}
