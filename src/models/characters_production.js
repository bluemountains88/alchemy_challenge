import { sequelize } from '../database/db.js';

export const characters_production = sequelize.define('characters_production', {}, { timestamps: false });
