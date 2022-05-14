import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js'
    

const router = Router();

router.post('/auth/register',register);
router.get('/auth/login',login);

export default router;