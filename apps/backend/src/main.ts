import { config } from "dotenv";
import * as cors from "cors";
import *  as express from "express";
import {initRoutes} from './app/router';

config();

const app = express();
app.use(cors());

initRoutes(app);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
