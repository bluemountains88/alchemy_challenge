import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Production } from './Production.js';
import { characters_production } from './characters_production.js'

export const Character = sequelize.define('characters',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullName:{
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }, 
    age: {
        type: DataTypes.STRING, // admit unknown
    },
    weigth: {
        type: DataTypes.STRING, // admit unknown
    },
    history: {
        type: DataTypes.TEXT, // admit unknown
    }
    },{
        timestamps: false
})

Production.belongsToMany(Character,{
    through : 'characters_production'
})

Character.belongsToMany(Production,{
    through : 'characters_production'
})



