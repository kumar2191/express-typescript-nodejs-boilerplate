import express from "express";
import dotenv from 'dotenv'
import { DBConnection } from "./DB";
const app: express.Application = express();
dotenv.config()

const PORT = process.env.PORT || 4000


DBConnection()
app.listen(3000, () => {
    console.log(`Port is running on ${PORT}`);

})
