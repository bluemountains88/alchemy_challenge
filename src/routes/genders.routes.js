import { Router } from 'express';
import { 
    createGender,
    getGenders,
    updateGender,
    deleteGender
} from '../controllers/genders.controller.js';
import { verifyToken, verifyTokenAndAdmin } from '../controllers/verifyToken.js';

const router = Router();

router.get('/genders', verifyTokenAndAdmin,getGenders);
router.post('/genders', verifyTokenAndAdmin, createGender);
router.put('/genders/:id', verifyTokenAndAdmin, updateGender);
router.delete('/genders/:id', verifyTokenAndAdmin, deleteGender);

export default router;