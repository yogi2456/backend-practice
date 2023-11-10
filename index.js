import express, { json } from 'express';
import router from './Routes/index.js';
import { Hello } from './Controllers/GlobalControllers.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     console.log("hi from middleware use")
//     //res.send("hii from middleware use")
//     next();
// })

// app.get("/", function(req, res) {
//     res.send("Hello Yogesh..")

// })

// app.get("/hello", Hello);
app.get('/', (req, res) => {
    res.send("welcome to backend")
})
app.use("/api/v1", router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database connected."))


app.listen(8000, () => console.log("App is running on port 8000."))