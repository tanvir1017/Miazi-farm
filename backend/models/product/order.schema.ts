import { Schema, model, models } from "mongoose";
import User from "../users/user.schema";
import Products from "./product.schema";

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.Number,
    ref: User,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  products: [
    {
      productId: {
        type: Schema.Types.Number,
        ref: Products,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Order = models.Order || model("Order", orderSchema);
export default Order;
