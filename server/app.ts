import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";

import girlsRouter from './routes/girlRoute';
import boyRouter from './routes/boyRoute';
import matchmakerRouter from './routes/matchmakerRoute';
import corsOptions from "./config/corsOptions";
import connectDB from './config/dbConn';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));

app.use('/girls', girlsRouter);
app.use('/boys', boyRouter);
app.use('/matchmakers', matchmakerRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => console.log(err));
