import { Model } from "objection";
import knex from "../db/knex"; // your configured Knex instance

export default class Product extends Model {
  static tableName = "products";
}

// Bind the model to Knex
Product.knex(knex);
