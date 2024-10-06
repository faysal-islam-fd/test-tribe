import express, { urlencoded } from 'express';
import { connectDB } from './db/connectDB.js';
import cors from 'cors';

import userRoutes from './routes/user.routes.js';
const app = express();

app.use(cors())
app.use(urlencoded({extended: true}));
app.use(express.json());
app.use('/api/auth',userRoutes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
});

