import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'timetables',
      columns: [{ name: 'name', type: 'string' }],
    }),
    tableSchema({
      name: 'lessons',
      columns: [
        { name: 'timetable_id', type: 'string', isIndexed: true },
        { name: 'name', type: 'string' },
        { name: 'number', type: 'number', isOptional: true },
        { name: 'type', type: 'string', isOptional: true },
        { name: 'color', type: 'string', isOptional: true },
        { name: 'teacher', type: 'string', isOptional: true },
        { name: 'location', type: 'string', isOptional: true },
        { name: 'appointed_date', type: 'string' },
        { name: 'start_date', type: 'string', isOptional: true },
        { name: 'end_date', type: 'string', isOptional: true },
      ],
    }),
  ],
});
