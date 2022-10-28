import mongoose, { Model } from "mongoose";

export interface ITask {
    name : string,
    description : string,
    project :  mongoose.Schema.Types.ObjectId, 
    asignedColaborator :  mongoose.Schema.Types.ObjectId[], 
    status: number,
    endDate : Date,
}

export interface ITaskDocument extends ITask, Document {}
export interface ITaskModel extends Model<ITaskModel> {} 