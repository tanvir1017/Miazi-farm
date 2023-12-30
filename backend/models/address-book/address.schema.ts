import { Schema, model, models } from "mongoose";

const addressBook = new Schema({
  streetName: String,
  zipCode: Number,
});

const Address = models.Address || model("Address", addressBook);
export default Address;
