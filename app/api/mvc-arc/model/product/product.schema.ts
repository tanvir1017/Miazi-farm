import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: "Miazi Farm",
    },
    price: { type: Number, default: 0 },
    features: [{ type: String, trim: true }],
    description: { type: String },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: { type: Number, default: 0 },
    blurhash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Middleware

const Product = models.Products || mongoose.model("Products", productSchema);
