import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest) {
  console.log('API Route Hit');

  const connectionString = process.env.POSTGRES_URL;
  console.log('Connection String:', connectionString);

  try {
    console.log('Attempting to execute query');
    const result = await sql`SELECT * FROM past_work`;
    console.log('Query result:', result);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Database query failed', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
