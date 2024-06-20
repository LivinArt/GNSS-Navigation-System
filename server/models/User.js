import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {   
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, {
    timestamps: true 
});


const User = model("User", userSchema);

export default User;