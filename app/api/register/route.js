import connectMongoDB from '@/lib/database';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (request) => {
  try {
    const { username, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: 'User Registered.' }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while registering the user.' },
      { status: 500 }
    );
  }
};
