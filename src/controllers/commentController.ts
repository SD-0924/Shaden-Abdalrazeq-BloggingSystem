import { Response, Request } from "express";
import { Comment } from "../models/Comment";


export const creatComment = async(req:Request, res:Response) =>{
    try{
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    }catch(error){
        res.status(500).json({message: 'Error creating comment', error});
    }
};

export const getComment = async(req:Request, res:Response) =>{
    try{
        const comment = await Comment.findAll();
        res.status(200).json(comment)
    }catch(error){
        res.status(500).json({message: 'Error getting comments', error});
    }
};
export const getCommentById = async(req:Request, res:Response) =>{
    try{
        const comment = await Comment.findByPk(req.params.id);
        if(comment){
            res.status(200).json(comment);
        }else{
            res.status(404).json({message:'Comment not found'});
        }
    }catch(error){
        res.status(500).json({message: 'Error getting comment by ID', error});
    }
};