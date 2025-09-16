import express, { Request, Response } from "express";

import cors from "cors";
import { db } from "./config/db"; // your db.ts file
import { FormEntry } from "./models/Formentry";
import Product from "./models/product";
import productRoutes from "./routes/productroute";
import "./db/knex";

import authRoutes from "./routes/authroutes";
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON body

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

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

// Start server only if not in test mode
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

export default app; // 👈 add this line
