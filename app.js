import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";

import HelloController  from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/user-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(express.json());
app.use(cors());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);

