import { Production } from '../models/Production.js';
import { Character } from '../models/Character.js';
import { Gender } from '../models/Gender.js'

export const getProductions = async (req,res) => {
    try{
        if(JSON.stringify(req.query)=='{}'){
            const productions = await Production.findAll({
                attributes: ["poster","title","releaseYear"]
            });
            res.json(productions)        
        }else{
            if(req.query.name){
                let { name } = req.query;
                const production = await Production.findOne({
                    where: { title: name },
                    attributes: ["title","poster","releaseYear","rating"],
                    include: [{
                        model: Character,
                        attributes: ["fullName"],
                        through: { attributes: [] },
                    },
                ]});
                res.json(production);
            }else if(req.query.genre){
                let { genre } = req.query;
                const productions = await Gender.findAll(
                    {
                        where: { id: genre },
                        include: [{
                            model:Production,
                            through: { attributes: []}
                    }
                ]})
                res.json(productions);
            }else if(req.query.order){
                let { order } = req.query;
                let productions;
                if(order == 'ASC'){
                    productions = await Production.findAll({
                        order: [["releaseYear","ASC"]]
                    })
                }else{
                    productions = await Production.findAll({
                        order: [["releaseYear","DESC"]]
                    })
                }
                res.json(productions)
            } 
        }
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

//POST

export const createProduction = async(req,res) =>{
    const { title,poster,releaseYear,rating } = req.body;
    try{
        const newProduction = await Production.create({
            title,
            poster,
            releaseYear,
            rating
        });
        res.json(newProduction);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

//PUT

export const updateProduction = async (req,res) => {
    try {
        const { id } = req.params;
        const { title, poster, releaseYear, rating } = req.body;
        const production = await Production.findByPk(id);

        //UpdateProduction
        production.title = title;
        production.poste = poster;
        production.releaseYear = releaseYear;
        production.rating = rating;

        await production.save();
        res.json(production);

    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

//DELETE

export const deleteProduction = async (req,res) => {
    try{
        const { id } = req.params;
        await Production.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    }catch( err){
        return res.status(500).json({ message: err.message });
    }
}

export const addCharacter = async (req,res) => {
    try{
        const { characterId, productionId } = req.body
        const charProd = await characters_production.create({
            characterId,
            productionId
        })
        res.json(charProd);
    }catch (err){
        return res.status(500).json( { message: err.message })
    }
}

export const addGender = async (req,res) => {
    try{
        const { productionId, genderId } = req.body;
        const prodGend = await genders_production.create({
            productionId,
            genderId
        });
        res.json(prodGend);
    }catch (err){
        return res.status(500).json( { message: err.message })
    }
}
