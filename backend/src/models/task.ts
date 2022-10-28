import mongoose, { Schema } from "mongoose";
import { ITaskDocument } from "../interface/ITask";

const taskSchema = new Schema<ITaskDocument>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true, 
        required: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Project"
    },
    asignedColaborator: [ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    status: {
        type: Number,
        required: true
    },
    endDate: {
        type: Date
    }
},);

const Task = mongoose.model('Task', taskSchema);

export default Task;