import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "ecomuser",
      password: process.env.DB_PASSWORD || "Hacker!@#123123",
      database: process.env.DB_NAME || "ecommerce_store",
      port: Number(process.env.DB_PORT) || 3306,
    },
    migrations: {
      directory: "./src/migrations",
      extension: "ts",
    },
    seeds: {
      directory: "./src/seeds",
    },
  },
};

export default config;
