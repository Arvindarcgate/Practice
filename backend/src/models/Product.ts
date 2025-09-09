import { Model } from "../config/db";

export class Product extends Model {
  id!: number;
  name!: string;
  description?: string;
  price!: number;
  original_price?: number;
  image?: string;
  rating!: number;
  reviews!: number;
  category?: string;
  in_stock!: boolean;
  created_at!: Date;
  updated_at!: Date;

  static tableName = "products"; // Table name in MySQL

  // Optional: JSON schema for validation (good practice with Objection.js)
  static jsonSchema = {
    type: "object",
    required: ["name", "price"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      description: { type: "string" },
      price: { type: "number" },
      original_price: { type: "number" },
      image: { type: "string", maxLength: 500 },
      rating: { type: "number" },
      reviews: { type: "integer" },
      category: { type: "string", maxLength: 100 },
      in_stock: { type: "boolean" },
      created_at: { type: "string", format: "date-time" },
      updated_at: { type: "string", format: "date-time" },
    },
  };
}
