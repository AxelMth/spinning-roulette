import * as _ from "lodash";
import { Client } from "@notionhq/client";
import { GetDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export function filterDatabaseProperties(database: GetDatabaseResponse, {filterTypes = ['select', 'multi_select']} = {}) {
  return _(database.properties).mapValues((p) => _.includes(filterTypes, p.type) ? p : null).omitBy(p => _.isNull(p)).value();
}

export async function retrieveDatabase(secret: string, databaseId: string) {
  const client = new Client({
    auth: secret
  });
  return client.databases.retrieve({
    database_id: databaseId
  });
}

export async function queryDatabase(secret: string, databaseId: string) {
  const client = new Client({
    auth: secret
  });
  return client.databases.query({
    database_id: databaseId,
    archived: false
  });
}

export async function getDatabaseProperties(secret: string, databaseId: string) {
  const database = await retrieveDatabase(secret, databaseId);
  const filterProperties = filterDatabaseProperties(database);
  // @ts-ignore
  return _(filterProperties).mapValues((p) => ({ name: p.name, options: p.multi_select?.options || p.select?.options || [] })).values().value();
}

export async function getDatabaseRows(secret: string, databaseId: string) {
  const queryResponse = await queryDatabase(secret, databaseId);
  const result = queryResponse.results;
  // @ts-ignore
  return _(result).map((r ) => r?.properties).value();
}
