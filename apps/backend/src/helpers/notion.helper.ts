import * as _ from 'lodash';
import {GetDatabaseResponse} from '@notionhq/client/build/src/api-endpoints';

export function getDatabaseProperties(database: GetDatabaseResponse, {filterTypes = ['select', 'multi_select']} = {}) {
  return _(database.properties).mapValues((p) => _.includes(filterTypes, p.type) ? p : null).omitBy(p => _.isNull(p)).value();
}
