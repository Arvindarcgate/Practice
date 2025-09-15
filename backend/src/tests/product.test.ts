// src/tests/product.test.ts
import request from "supertest";
import app from "../server";
import Product from "../models/product";

// Clear the products table before each test
beforeEach(async () => {
  await Product.query().truncate(); // safely clears the table
});

afterAll(async () => {
  // Optional: close DB connections if needed
  await Product.knex().destroy();
});

describe("Product API", () => {
  it("should add a product", async () => {
    const res = await request(app).post("/api/products").send({
      shopName: "Test Shop",
      productDetails: "Test Product",
    });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Product added successfully");
    expect(res.body.product).toHaveProperty("id");
    expect(res.body.product.shopName).toBe("Test Shop");
    expect(res.body.product.productDetails).toBe("Test Product");
  });

  it("should get all products", async () => {
    // Insert a product first
    await Product.query().insert({
      shopName: "Test Shop",
      productDetails: "Test Product",
    });

    const res = await request(app).get("/api/products");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          shopName: "Test Shop",
          productDetails: "Test Product",
        }),
      ])
    );
  });
});
