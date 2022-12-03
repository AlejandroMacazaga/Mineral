import express from "express";
import TestController from "../controllers/testController.js";
const router = express.Router();

router.get("/createModels", TestController.createModels);
export default router;  