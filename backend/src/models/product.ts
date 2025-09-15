// backend/src/models/Product.ts
import { Model } from "objection";

class Product extends Model {
  id!: number;
  shopName!: string;
  productDetails!: string;

  static get tableName() {
    return "products"; // 🔑 match your migration table name
  }
}

export default Product;
