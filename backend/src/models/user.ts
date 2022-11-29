import mongoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt";
import { IUser, IUserDocument } from '../interface/IUser.js';

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String
    },
    validated: {
        type: Boolean,
        default: false
    }
});

userSchema.pre('save', async function (next) {

    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.checkPassword = async function (passwordForm: string) : Promise<boolean> {
    return await bcrypt.compare(passwordForm, this.password);
}

export const User = mongoose.model<IUserDocument>("User", userSchema);