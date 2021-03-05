import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './models/schema';

import Timetable from './models/Timetable.model';

const adapter = new SQLiteAdapter({
  dbName: 'ClassTimetable',
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [Timetable],
  actionsEnabled: true,
});

export default database;
