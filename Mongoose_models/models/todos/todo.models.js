import mongoose from "mongoose";
import { User } from "./user.models";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, // this technique is used to transfer the data of one model to another model as we just used User in todos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
    //Above we just done the same but here we have many subtodos so we directly used an array instead of object.
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
