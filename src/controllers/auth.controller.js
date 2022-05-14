import { User } from '../models/User.js';
import cryptoJs from 'crypto-js'; 
import jwt from 'jsonwebtoken';
import { enviarMail } from './mailing.js';

export const register = async (req,res) => {
    try{ 
        const { email, password } = req.body;
        const newUser = await User.create({
            email,
            password: cryptoJs.AES.encrypt(password,"frase_de_encryptado").toString()
        });
        res.status(201).json({"User created successfully:":email})
        enviarMail(email);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

export const login = async (req,res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ 
            where:  { email }
        })
        
        //validar email
        if(!user){
            return res.status(401).json("Wrong email");
        }
        
        const hashedPassword = cryptoJs.AES.decrypt(user.password,"frase_de_encryptado");
        const originalPassword =  hashedPassword.toString(cryptoJs.enc.Utf8)

        //validar decryptPassword
        if(password !== originalPassword){
            return res.status(401).json("Wrong password");
        }

        const accessToken = jwt.sign({
            id: user.id,
            isAdmin: user.isAdmin
        },"SECRET_KEY",{"expiresIn":"12h"});

        res.status(200).json(accessToken);

    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}