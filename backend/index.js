import express from 'express';
import dotenv from 'dotenv';
import db_connection from './config/db.js';
import userRoutes from './routes/routesUser.js';
import projectRoutes from './routes/routesProject.js';
import taskRoutes from "./routes/routesTask.js";
const app = express();
dotenv.config();
db_connection();



app.use("/api/users", userRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/tasks", taksRoutes);

app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});