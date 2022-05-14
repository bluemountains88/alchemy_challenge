import express from 'express';
import charactersRoutes from './routes/characters.routes.js';
import productionRoutes from './routes/productions.routes.js';
import genderRoutes from './routes/genders.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

//middlewares

app.use(express.json());

//routers
app.use(charactersRoutes);
app.use(productionRoutes);
app.use(genderRoutes);
app.use(authRoutes);

export default app;