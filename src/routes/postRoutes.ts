import {Router} from 'express';
import {createPost, getPosts, getPostsById, updatePostById, deletePostbyId} from '../controllers/postController';

const router = Router();

router.post('/', createPost);
router.get('/:id',getPostsById);
router.get('/',getPosts);
router.put('/:id',updatePostById);
router.delete('/:id',deletePostbyId);


export default router;