import express from 'express';
import { connectDB } from './db/connectDB.js';
const app = express();
app.use
const port = 3000
app.listen(port, () => {
    connectDB()
});

