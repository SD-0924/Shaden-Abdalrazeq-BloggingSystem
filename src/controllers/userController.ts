import { Request, response, Response } from "express";
import { User } from '../models/User'; 

export const createUser = async (req: Request, res:Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message:'Error creating user', error});
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await User.findAll();
        res.status(201).json(users);

    }catch(error){
        res.status(500).json({message:'Error fetching users', error});
    }
};

export const updateUser = async (req: Request, res:Response) =>{
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.update(req.body)
        }else{
            res.status(404).json({message: 'User not Found'});
        }
    }catch(error){
        res.status(500).json({message:'Error updating user', error});

    }
};

export const getUserById = async (req: Request, res:Response)=>{
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message:' User not Found'});
        }
    }catch(error){
        response.status(500).json({message: 'Error getting user by ID', error});
    }
};

export const deleteUser = async (req:Request, res:Response) => {
    try{
        const user = await User.findByPk(req.params.id);
        if (user){
            await user.destroy();
            res.status(200).json({message: 'User deleted'});
        } else{
            res.status(404).json({message: 'User not Found'});
        }
    }catch(error){
        res.status(500).json({message:'Error deleting user', error});
    }
};