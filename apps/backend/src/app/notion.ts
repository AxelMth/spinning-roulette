import { Client } from "@notionhq/client"

// Initializing a client
export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});
