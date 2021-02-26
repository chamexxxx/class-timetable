import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './models/schema';

const adapter = new SQLiteAdapter({
  dbName: 'ClassTimetable',
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [],
  actionsEnabled: true,
});

export default database;
