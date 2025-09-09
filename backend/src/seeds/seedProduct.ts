import { Product } from "../models/Product";

async function seedProducts() {
  try {
    const newProduct = await Product.query().insert({
      name: "iPhone 16",
      description: "Latest Apple smartphone",
      price: 999.99,
      original_price: 1099.99,
      image: "https://example.com/iphone.jpg",
      rating: 4.8,
      reviews: 1200,
      category: "Electronics",
      in_stock: true,
    });

    console.log("✅ Product inserted:", newProduct);
  } catch (err) {
    console.error("❌ Error seeding products:", err);
  }
}

seedProducts();
