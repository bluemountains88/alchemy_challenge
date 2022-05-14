import app from './app.js';
import { sequelize } from './database/db.js';

import './models/Production.js';
import './models/Gender.js';
import './models/Character.js';
import './models/User.js';

const main = async () => {

    try{
        await sequelize.authenticate(), sequelize.sync({force:false});
        console.log('DB Connection has been established successfully');
        app.listen(3000);
        console.log('Server running on port',3000);
    }catch (err){
        console.error('Unable to connect to the database',err);
    }
}

main();