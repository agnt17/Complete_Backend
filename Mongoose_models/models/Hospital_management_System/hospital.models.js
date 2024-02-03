import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      required: true,
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
    pincode: {
      required: true,
      type: String,
    },
    specializedIn: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);
