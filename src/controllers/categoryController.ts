import { Request, Response } from 'express';
import { Category } from '../models/Category';

export const createCategory = async(req:Request, res:Response)=>{
    try{
        const category = await Category.create(req.body);
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({message: 'Error creating category ', error});
    }
};

export const getCategory = async(req:Request, res:Response)=>{
    try{
        const category = await Category.findAll();
        res.status(200).json(category);
    }catch(error){
        res.status(500).json({message: 'Error getting categories ', error});
    }
};
export const getCategoryById = async(req:Request, res:Response)=>{
    try{
        const category = await Category.findByPk(req.params.id);
        if(category){
            res.status(200).json(category);
        }else{
            res.status(404).json({message:'Category not found'});
        }
        
    }catch(error){
        res.status(500).json({message: 'Error getting category by ID ', error});
    }
};