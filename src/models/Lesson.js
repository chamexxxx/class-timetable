import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Lesson extends Model {
  static table = 'lessons';

  @field('number') number;
  @field('name') name;
  @field('type') type;
  @field('color') color;
  @field('teacher') teacher;
  @field('location') location;
  @field('appointed_date') appointedDate;
}
