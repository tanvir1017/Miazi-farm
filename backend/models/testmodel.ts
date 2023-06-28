import { Schema, model, models } from "mongoose";

const ProductsModelSchema = new Schema({
  title: String,
  slug: String,
  brand: String,
  price: Number,
  description: String,
  features: [String],
  rating: Number,
  reviews: Number,
  image: String,
  blurhash: String,
});

// Remember! this models.Products always will be your database collection name. If collection name doesn't exist then it will create one if exist then it will operate this collection

const Products = models.Products || model("Products", ProductsModelSchema);
export default Products;
