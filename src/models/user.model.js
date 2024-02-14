import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


export const User = model("user", userSchema)