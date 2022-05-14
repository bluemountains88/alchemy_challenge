import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'Disney',
    'user',
    'password',{
        host: 'localhost', 
        dialect: 'postgres'
    }
)

