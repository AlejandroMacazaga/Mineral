import mongoose, { Model } from "mongoose";

export interface IProject {
    name : string,
    owner :  mongoose.Schema.Types.ObjectId, 
    description : string,
    colaborators : mongoose.Schema.Types.ObjectId[],
}

export interface IProjectDocument extends IProject, Document {}
export interface IProjectModel extends Model<IProjectModel> {} 