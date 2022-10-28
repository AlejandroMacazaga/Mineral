import mongoose, { Schema } from "mongoose";
import { IProject } from "../interface/IProject";

const projectSchema = new Schema<IProject>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: false
    },
    colaborators: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Project = mongoose.model('Project', projectSchema);

export default Project;