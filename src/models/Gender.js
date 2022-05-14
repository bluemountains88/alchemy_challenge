import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';
import { Production } from './Production.js';
import { genders_production } from './genders_production.js';

export const Gender = sequelize.define('genders',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    },
    image: {
        type: DataTypes.STRING,
    },
    },{
        timestamps: false
})

Production.belongsToMany(Gender, {
    through : 'genders_production'
})

Gender.belongsToMany(Production, {
    through: 'genders_production'
})