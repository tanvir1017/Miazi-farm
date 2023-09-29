import { Schema, model, models } from "mongoose";

const NewUserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: String,
    role: {
      type: String,
      default: "buyer",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", NewUserSchema);
export default User;
