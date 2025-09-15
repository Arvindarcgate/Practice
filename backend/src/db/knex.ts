import { knex } from "knex";
import { Model } from "objection";

const knexConfig = {
  client: "mysql2", // or "pg" if using PostgreSQL
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "ecomuser",
    password: process.env.DB_PASSWORD || "Hacker!@#123123",
    database: process.env.DB_NAME || "ecommerce_store",
    port: Number(process.env.DB_PORT) || 3306,
  },
};

const knexInstance = knex(knexConfig);

// Bind all Objection.js models to the knex instance
Model.knex(knexInstance);

export default knexInstance;
