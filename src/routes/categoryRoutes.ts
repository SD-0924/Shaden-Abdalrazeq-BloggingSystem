import { Router } from "express";
import{createCategory, getCategory, getCategoryById} from '../controllers/categoryController';

const router = Router();
router.post('/',createCategory);
router.get('/',getCategory);
router.get('/:id',getCategoryById);

export default router;