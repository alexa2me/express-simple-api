import knex from "knex";
import { config } from "dotenv";

config();

const connection = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: Number(process.env.DB_PORT) || 25060,
    multipleStatements: true,
  },
});

export default connection;
