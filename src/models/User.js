import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const User = sequelize.define('users',{
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    },{
        timestamps: true
})