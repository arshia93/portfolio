// Fetch Data in Next.js API Route and returns it as a JSON (Server Side)

// NextRequest and NextResponse help me handle http requests
import { NextRequest, NextResponse } from 'next/server';
// setups up connection to database client
import { Client } from '@vercel/postgres';
// retrieve data from a server without changing the server's state
export async function GET(request: NextRequest) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  // selects all blocks from the past_work table
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM past_work');
    const pastWork = result.rows;

    // returns the result of the query as a json object
    return NextResponse.json(pastWork);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
