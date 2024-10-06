import express, { urlencoded } from 'express';
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv/config';
import cookieParser from 'cookie-parser';
import recipeRoutes from './routes/recipe.routes.js';
import cors from 'cors';

import userRoutes from './routes/user.routes.js';
const app = express();

app.use(cors())
app.use(cookieParser());
app.use(urlencoded({extended: true}));
app.use(express.json());
app.use('/api/auth',userRoutes)
app.use('/api/recipe',recipeRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB()
})

