import "dotenv/config"
import postgres from 'postgres'

const { DATABASE_URL } = process.env;

export const sql = postgres(process.env.DATABASE_URL, {ssl: "require"});