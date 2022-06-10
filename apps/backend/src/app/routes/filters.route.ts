import {getDatabaseProperties} from '@temp-workspace/notion';

export const filterRoutes = (app) => {
  app.get('/filters', async (req, res) => {
    const databaseProperties = await getDatabaseProperties(process.env.NOTION_TOKEN, process.env.NOTION_DATABASE_ID);
    return res.json(databaseProperties);
  });
}
