import { Schema, model, models } from "mongoose";

const NewUserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },

    password: {
      type: Schema.Types.String,
      required: [true, "At least 6 character need"],
      min: 6,
      max: 30,
    },
    image: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "buyer",
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,

      default: Date.now,
    },
    credential: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", NewUserSchema);
export default User;
