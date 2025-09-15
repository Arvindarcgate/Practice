import express from "express";
import { addProduct, getProducts } from "../controllers/productcontrollers";

const router = express.Router();

router.post("/", addProduct); // POST /api/products
router.get("/", getProducts); // GET /api/products

export default router;
