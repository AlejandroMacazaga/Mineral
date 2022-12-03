import Project from "../models/project.js";
import Task from "../models/task.js";
import { User } from "../models/user.js";

export default class TestController {
    static async createModels() {
        console.log("entro");
        const task = await new Task();
        const user = await new User();
        const project = await new Project();
    }
    
}