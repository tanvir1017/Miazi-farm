import { Schema, model, models } from "mongoose";

const ProductsModelSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  brand: String,
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: Number,
  blurhash: String,
});

// Remember! this models.Products always will be your database collection name. If collection name doesn't exist then it will create one if exist then it will operate this collection

const Products = models.Products || model("Products", ProductsModelSchema);
export default Products;
