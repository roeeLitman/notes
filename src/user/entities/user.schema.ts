import { Schema } from "mongoose";
import { User } from "./user.entity";


export const UserSchema = new Schema<User>({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})