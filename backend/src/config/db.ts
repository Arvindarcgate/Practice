// import mysql, { Pool, PoolOptions } from "mysql2/promise";
// import dotenv from "dotenv";

// dotenv.config();

// const poolOptions: PoolOptions = {
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "ecomuser",   // your MySQL username
//   password: process.env.DB_PASSWORD || "Hacker!@#123123",
//   database: process.env.DB_NAME || "ecommerce_store",
//   port: Number(process.env.DB_PORT) || 3306,
// };

// const pool: Pool = mysql.createPool(poolOptions);

// export default pool;

import { knex } from "knex";
import { Model } from "objection";
import dotenv from "dotenv";

dotenv.config();

const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "ecomuser",
    password: process.env.DB_PASSWORD || "Hacker!@#123123",
    database: process.env.DB_NAME || "ecommerce_store",
    port: Number(process.env.DB_PORT) || 3306,
  },
};

const db = knex(knexConfig);

// Bind all Models to Knex
Model.knex(db);

export { db, Model };
