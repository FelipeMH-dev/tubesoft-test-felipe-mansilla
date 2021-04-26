import express, { json } from "express";
import morgan from "morgan";
const cors = require("cors");

// importing routes
import timestampRoutes from "./routes/timestamps";


// initialization
const app = express();

// middlewares

app.use(cors())
app.use(morgan('dev'));
app.use(json());


// routes
app.use('/api/timestamps', timestampRoutes);



export default app;