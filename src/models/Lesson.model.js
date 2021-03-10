import { Model } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';

export default class Lesson extends Model {
  static table = 'lessons';
  static associations = {
    timetables: { type: 'belongs_to', key: 'timetable_id' },
  };

  @field('number') number;
  @field('name') name;
  @field('type') type;
  @field('color') color;
  @field('teacher') teacher;
  @field('location') location;
  @field('appointed_date') appointedDate;
  @field('start_date') startDate;
  @field('end_date') endDate;

  @relation('timetables', 'timetable_id') timetable;
}
