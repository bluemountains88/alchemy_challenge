import { Router } from 'express';

import { 
    getCharacters, 
    createCharacter,
    updateCharacter, 
    deleteCharacter
} from '../controllers/characters.controller.js';
import { verifyToken, verifyTokenAndAdmin } from '../controllers/verifyToken.js';

const router = Router();

/*
GET /characters?movies=idMovie
*/

router.get('/characters', verifyToken,getCharacters); //Obtener todos
router.post('/characters', verifyTokenAndAdmin, createCharacter); //Agregar 
router.put('/characters/:id', verifyTokenAndAdmin, updateCharacter); //Editar
router.delete('/characters/:id', verifyTokenAndAdmin, deleteCharacter); //Eliminar

//router.get('/characters?:productions'); //character by movies or series

export default router;