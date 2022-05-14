import { sequelize } from '../database/db.js';

export const genders_production = sequelize.define('genders_production', {}, { timestamps: false });
