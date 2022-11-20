import express from 'express';
import cors from 'cors';
import HelloController  from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/user-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";


const app = express()
app.use(express.json());
app.use(cors());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);

