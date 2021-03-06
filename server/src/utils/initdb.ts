import dotenv from 'dotenv';
import fs from 'fs-extra';
import { Client } from 'pg';

const init = async (): Promise<void> => {
  // read environment variables
  dotenv.config();
  // create an instance of the PostgreSQL client
  const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
  });
  try {
    // connect to the local database server
    await client.connect();
    // read the contents of the initdb.pgsql file
    const sql = await fs.readFile('./src/utils/initdb.pgsql', { encoding: 'UTF-8' });
    // split the file into separate statements
    const statements = sql.split(/;\s*$/m);
    for (const statement of statements) {
      if (statement.length > 3) {
        // execute each of the statements
        await client.query(statement);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    // close the database client
    await client.end();
  }
};

init()
  .then(() => {
    console.log('finished');
  })
  .catch(() => {
    console.log('finished with errors');
  });
