import express, { Request, Response } from "express";

import cors from "cors";
import { db } from "./config/db"; // your db.ts file
import { FormEntry } from "./models/Formentry";
import { Product } from "./models/Product";

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

// ✅ Test DB connection on server start
// (async () => {
//   try {
//     await db.query("SELECT 1"); // simple test query
//     console.log("✅ Database connected successfully!");
//   } catch (error: any) {
//     console.error("❌ Database connection failed:", error.message);
//     process.exit(1); // stop server if DB is not connected
//   }
// })();

// POST API to save form data
// app.post("/api/form", async (req: Request, res: Response) => {
//   try {
//     const { name, age } = req.body as { name: string; age: number };

//     if (!name || !age) {
//       return res.status(400).json({ error: "Name and age are required" });
//     }

//     const [result] = await db.query<any>(
//       "INSERT INTO form_entries (name, age) VALUES (?, ?)",
//       [name, age]
//     );

//     res.status(201).json({
//       message: "Form data saved successfully",
//       entryId: result.insertId,
//     });
//   } catch (error: any) {
//     console.error("Error saving form data:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

app.post("/api/form", async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body as { name: string; age: number };

    if (!name || !age) {
      return res.status(400).json({ error: "Name and age are required" });
    }

    // ✅ Insert with Objection.js
    const newEntry = await FormEntry.query().insert({
      name,
      age,
    });

    res.status(201).json({
      message: "Form data saved successfully",
      entryId: newEntry.id,
    });
  } catch (error: any) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// app.post("/api/products", async (req: Request, res: Response) => {
//   try {
//     const productData = req.body;

//     // Insert product using Objection.js
//     const newProduct = await Product.query().insert(productData);

//     res.status(201).json({
//       message: "Product created successfully",
//       product: newProduct,
//     });
//   } catch (error: any) {
//     console.error("Error inserting product:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

app.post("/api/products", async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.query().insert(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error: any) {
    console.error("Error inserting product:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// app.get("/api/products", async (req: Request, res: Response) => {
//   try {
//     console.log("Get API product" , )
//     const newProduct = await Product.query();

//     res.status(201).json({
//       message: "Product created successfully",
//       product: newProduct,
//     });
//   } catch (error: any) {
//     console.error("Error inserting product:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

app.get("/api/products", async (req: Request, res: Response) => {
  try {
    console.log("✅ /api/products hit"); // confirm API is called

    const products = await Product.query();

    console.log("📦 Products from DB:", products); // log fetched products

    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error: any) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
