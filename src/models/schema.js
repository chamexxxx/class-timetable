import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'timetables',
      columns: [{ name: 'name', type: 'string' }],
    }),
  ],
});
