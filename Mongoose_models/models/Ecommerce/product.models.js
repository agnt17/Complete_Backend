import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    productImage: {
      required: true,
      type: String,
    },
    Price: {
      default: 0,
      type: Number,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
