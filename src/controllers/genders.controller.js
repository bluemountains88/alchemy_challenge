import { Gender } from '../models/Gender.js';

export const getGenders = async (req,res) => {
    try{
        const genders = await Gender.findAll();
        res.json(genders);
    }catch( err){
        return res.status(500).json({ message: err.message })
    }
}

export const createGender = async (req,res) => {
    try{
        const { name, image } = req.body;
        const newGender = await Gender.create({
            name,
            image
        })
        res.json(newGender)
    }catch( err){
        return res.status(500).json({ message: err.message })
    }
}

export const updateGender = async (req,res) => {
    try{
        const { id } = req.params;
        const { name, image } = req.body;

        const gender = await Gender.findByPk(id);

        gender.name = name;
        gender.image = image;

        await gender.save();

        res.json(gender);

     }catch(err){
        return res.status(500).json({ message: err.message })
    }
}

export const deleteGender = async (req,res) => {
    try{
        const { id } = req.params;
        await Gender.destroy({
            where: { id }
        });
        res.sendStatus(204)
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
}