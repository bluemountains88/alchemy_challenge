import { Character } from "../models/Character.js";
import { Production } from "../models/Production.js";

export const getCharacters = async (req,res) => {   
    try{
        if (JSON.stringify(req.query)=='{}'){
            const characters = await Character.findAll({
                attributes: [ 'image', 'fullName', ],
            })
            res.json(characters);
        }else{
            if(req.query.name){                
                let { name } = req.query;
                const character = await Character.findOne({
                    where: { fullName: name },
                    include: {
                        model:Production,
                        attributes: ["title"],
                        through: { attributes: [] },
                    }
                })
                res.json(character);
            }else{
                if(req.query.age){
                    const characters = await Character.findAll({
                        where: { age : req.query.age }
                    })
                    res.json(characters);
                }else if(req.query.weigth){
                    const characters = await Character.findAll({
                        where: { weigth: req.query.weigth}
                    })
                    res.json(characters);
                }
            }
        }
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

//POST

export const createCharacter = async (req,res) => {
    const { fullName, image, age, weigth, history } = req.body;
    try{
        const newCharacter = await Character.create({
            fullName,
            image,
            age,
            weigth,
            history
        });
        res.json(newCharacter);
    } catch( err){
        return res.status(500).json({ message: err.message });
    }
}

//PUT

export const updateCharacter = async (req,res) => {
    try{
        const { id } = req.params;
        const { fullName, image, age, weigth, history } = req.body;
        const character = await Character.findByPk(id);

        //update

        character.fullName = fullName;
        character.image = image;
        character.age = age;
        character.weigth = weigth;
        character.history = history;
        
        await character.save();
        res.json(character);

    }catch (err){
        return res.status(500).json({ message: err.message });
    }

}

//DELETE

export const deleteCharacter = async (req,res) => {
    try{
        const { id } = req.params;
        await Character.destroy({
            where: {
                id
            }
        });
        res.sendStatus(204);
    } catch(err) {
        return res.status(500).json({ message: err.message });
    }
}