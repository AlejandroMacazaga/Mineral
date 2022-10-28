import express from "express";
const router = express.Router();

import UserController from '../controllers/userController.js';

router.post('/', UserController.registerUser);
router.post('/login', UserController.authenticateUser);

export default router;  


    