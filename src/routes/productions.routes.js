import { Router } from 'express';

import {
    addCharacter,
    addGender,
    createProduction,
    deleteProduction,
    getProductions,
    updateProduction
} from '../controllers/productions.controllers.js';
import { verifyToken, verifyTokenAndAdmin } from '../controllers/verifyToken.js';

const router = Router();

router.get('/movies', verifyToken,getProductions);
router.post('/movies', verifyTokenAndAdmin, createProduction);
router.put('/movies/:id', verifyTokenAndAdmin, updateProduction);
router.delete('/movies/:id', verifyTokenAndAdmin, deleteProduction);
router.post('/movies/addCharacter', verifyTokenAndAdmin, addCharacter);
router.post('/movies/addGender', verifyTokenAndAdmin, addGender);

export default router;