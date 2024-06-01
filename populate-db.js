require('dotenv').config();
// setups up postgres model to interact with the database on Vercel
const { createClient } = require('@vercel/postgres');

// populates the database with sample data using SQL
async function populateDatabase() {
  // connects to the database using the postgres url
  const client = createClient({
    connectionString: process.env.POSTGRES_URL,
  });
  // connects to the database
  await client.connect();

  await client.query(`
  CREATE TABLE IF NOT EXISTS past_work (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE
  )
  `);

  // Insert sample articles into the "past_work" table
  await client.query(`
    INSERT INTO past_work (title, description, date)
    VALUES
      ('Article 1', 'Description of article 1', '2022-01-01'),
      ('Article 2', 'Description of article 2', '2022-02-15'),
      ('Article 3', 'Description of article 3', '2022-03-30')
  `);
  console.log('database populated');
  // closes the connection to the database
  await client.end();
}
// handles errors with the database
populateDatabase().catch((error) => {
  console.log('Error populating database', error);
  process.exit(1);
});
