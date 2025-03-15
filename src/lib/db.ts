// src/lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render.com
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  } finally {
    client.release();
  }
}

export default pool;