// src/controllers/productController.ts
import { Request, Response } from "express";
import Product from "../models/product";

// POST /api/products
export const addProduct = async (req: Request, res: Response) => {
  try {
    const { shopName, productDetails } = req.body;
    console.log(shopName, productDetails);

    if (!shopName || !productDetails) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const product = await Product.query().insert({
      shopName,
      productDetails,
    });

    return res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error: any) {
    console.error("Error adding product:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

// GET /api/products
export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.query();
    return res.json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
