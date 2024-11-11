import {Router} from 'express';
import {createUser, getUsers, updateUser, getUserById, deleteUser} from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/:id',getUserById);
router.get('/',getUsers);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


export default router;