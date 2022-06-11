import {getDatabaseRows} from '@temp-workspace/notion';

export const restaurantsRoutes = (app) => {
  app.get('/restaurants', async (req, res) => {
    const databaseProperties = await getDatabaseRows(process.env.NOTION_TOKEN, process.env.NOTION_DATABASE_ID);
    return res.json(databaseProperties);
  });
}
