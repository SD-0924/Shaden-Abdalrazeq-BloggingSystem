import { Router } from "express";
import{creatComment, getComment, getCommentById} from '../controllers/commentController';


const router = Router();

router.post('/', creatComment);
router.get('/', getComment);
router.get('/:id', getCommentById);


export default router;