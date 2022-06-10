import { config } from "dotenv";
import *  as express from "express";
import { getDatabaseProperties } from "./services/notion.service";

config();

const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/filters', async (req, res) => {
  const databaseProperties = await getDatabaseProperties(process.env.NOTION_DATABASE_ID);
  return res.json(databaseProperties);
});
