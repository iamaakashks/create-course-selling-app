import e from 'express';
import { loginUser, registerUser } from '../controller/user.js';


const router = e.Router();

router.post("/register", registerUser);
router.post('/login', loginUser);
export default router;