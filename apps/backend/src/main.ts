import { config } from "dotenv";
import *  as express from "express";
import {initRoutes} from './app/router';

config();

const app = express();

initRoutes(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
