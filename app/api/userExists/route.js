import connectMongoDB from '@/lib/database';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  try {
    await connectMongoDB();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select('_id');
    console.log('User: ', user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
};
