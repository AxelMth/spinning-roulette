import { notionClient } from "./notion.client";
import { getDatabaseProperties as filterDatabaseProperties } from "../helpers/notion.helper";

export async function getDatabase(databaseId: string) {
  return notionClient.databases.retrieve({
    database_id: databaseId
  });
}

export async function getDatabaseProperties(databaseId: string) {
  const database = await getDatabase(databaseId);
  return filterDatabaseProperties(database);
}
