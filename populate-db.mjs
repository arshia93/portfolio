import 'dotenv/config'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sql } from '@vercel/postgres';

const contentDir = path.join(process.cwd(), 'content/past-work');

async function populateDatabase() {
  const files = fs.readdirSync(contentDir);
  console.log('Files found:', files); // Debugging line

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    console.log('Inserting data for file:', file); // Debugging line
    console.log('Data:', data); // Debugging line

    await sql`
      INSERT INTO past_work (slug, title, summary, content)
      VALUES (${data.slug}, ${data.title}, ${data.summary}, ${content})
      ON CONFLICT (slug) DO NOTHING
    `;
  }

  console.log('Database populated successfully!');
}

populateDatabase().catch((err) => {
  console.error('Error populating database:', err);
  process.exit(1);
});