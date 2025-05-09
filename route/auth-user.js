import e from 'express';
import { loginUser, registerUser } from '../controller/user.js';
import { loginLimiter } from '../middleware/loginLimiter.js';

const router = e.Router();

router.post("/register", registerUser);
router.post('/login', loginLimiter, loginUser);
export default router;