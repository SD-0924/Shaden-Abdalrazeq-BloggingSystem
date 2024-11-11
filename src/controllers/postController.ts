import {Request, Response} from 'express';
import {Post} from '../models/Post';


export const createPost = async (req: Request, res:Response) => {
    try{
        const post = await Post.create(req.body);
        res.status(201).json(post)
    }catch(error){
        res.status(500).json({message:'Error creating post', error});
    }
};

export const getPosts = async(req:Request, res:Response) =>{
    try{
        const post=await Post.findAll();
        if(post){
            res.status(200).json(post)
        }else{
            res.status(404).json({message: 'Post not found'});
        }
        
    }catch(error){
        res.status(500).json({message:'Error getting all posts', error});
    }
};
export const getPostsById = async(req:Request, res:Response) =>{
    try{
        const post=await Post.findByPk(req.params.id);
        if(post){
            res.status(200).json(post)
        }else{
            res.status(404).json({message: 'Post not found'});
        }
        
    }catch(error){
        res.status(500).json({message:'Error getting post', error});
    }
};


export const updatePostById = async(req:Request, res:Response) =>{
    try{
        const post=await Post.findByPk(req.params.id);
        if(post){
            await post.update(req.body);
            res.status(200).json(post)
        }else{
            res.status(404).json({message: 'Post not found'});
        }
        
    }catch(error){
        res.status(500).json({message:'Error getting all posts', error});
    }
};
export const deletePostbyId = async(req:Request, res:Response) =>{
    try{
        const post=await Post.findByPk(req.params.id);
        if(post){
            await post.destroy();
            res.status(200).json({message:'Post deleted'});
        }else{
            res.status(404).json({message: 'Post not found'});
        }
        
    }catch(error){
        res.status(500).json({message:'Error getting all posts', error});
    }
};