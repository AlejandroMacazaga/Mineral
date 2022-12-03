import { Request, Response } from "express";
import Project from "../models/project.js";
import Task from "../models/task.js";
import { User } from "../models/user.js";

export default class TaskController {

    static async createTask(req : Request, res : Response) {
        const task = await new Task({
            name: req.params.name,
            description: req.params.description,
            project: Project.findOne({ObjectId: req.params.projectId}),
            asignedColaborator: User.findAll(req.params.collaboratorIds),


        });
    }
    
    static async removeTask (req : Request, res : Response) {
    
    }
    
    static async assignTask (req : Request, res : Response) {
    
    }
    
    static async unassingTask (req : Request, res : Response) {
    
    }
    
    static async  updateTask (req : Request, res : Response) {
    
    }

}