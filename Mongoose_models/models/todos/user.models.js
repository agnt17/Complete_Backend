import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { // this means we can make restrictions on usernames also like making it unique and it should be lowercase etc.. 
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: String,
        isActive: Boolean,
        password:{
            type: String,
            required: [true, "U really without password u can login!"]
        }
    },
    {
    timestamps: true, // this is the second object and it includes createdAt and updatedAt and it is necessary to include it.  
    }
);

export const User = mongoose.model("User", userSchema); // this function takes 2 values inside parentheses 1st is name of the model and 2nd says on which schema it is based as a single file can contain schemas

// these upper 3 lines are compulsory these are used to create models using mongoose

// Now as soon as this schema enters into the mongodb then in get converted to plural form and all characters are put in lowercase.
//like  ---> "User" => "users", "Todo" => "todos". etc
