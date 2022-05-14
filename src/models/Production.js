import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

export const Production = sequelize.define('productions',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    poster: {
        type: DataTypes.STRING
    },
    releaseYear: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.FLOAT,
        validate: {
            min: 1,
            max: 5
        }

    }
    },{
        timestamps: false
})

