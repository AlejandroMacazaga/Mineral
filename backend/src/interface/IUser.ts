import { Model } from "mongoose";

export interface IUser {
    username : string,
    password : string, 
    email : string,
    token : string,
    validated : boolean,
    checkPassword(password : string): boolean
}

export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserModel> {} 