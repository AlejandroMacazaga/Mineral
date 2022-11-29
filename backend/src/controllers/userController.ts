import { User } from "../models/user.js";
import generateId from "../helpers/generateId.js";
import { Request, Response } from "express";
import { HttpStatus } from "../constants/HttpStatus.js";

export default class UserController {

    public static async registerUser (req : Request, res : Response) {

        const existsUser = await User.findOne(req.body.email);
    
        if(existsUser) {
            const error = new Error("User already exists");
            return res.status(HttpStatus.BAD_REQUEST).json({
                ok: false,
                msg: error.message
            });
        }
    
        try {
            const user = new User(req.body);
            user.token = generateId();
            const savedUser = await user.save();
    
            res.json(savedUser);
        } catch(error) {
            res.json({error, msg: "Error when registering user to database"});
        }
    }
    
    public static async authenticateUser (req : Request, res : Response) {
        
        const { email, password } = req.body;
        const existsUser = await User.findOne({email});
    
        if(!existsUser) {
            const error = new Error('User does not exist');
            return res.status(HttpStatus.NOT_FOUND).json({msg: error.message});
        }
    
        if(!existsUser.validated) {
            const error = new Error('User needs to be validated');
            return res.status(HttpStatus.NOT_FOUND).json({msg: error.message});
        }
    
        if(await existsUser.checkPassword(password)) {
            res.json({
                _id: existsUser._id,
                name: existsUser.username,
                email: existsUser.email
            });
        }
        else {
            const error = new Error('Incorrect password');
            return res.status(HttpStatus.NOT_FOUND).json({msg: error.message});
        }
    }

}
