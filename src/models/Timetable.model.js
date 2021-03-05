import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Timetable extends Model {
  static table = 'timetables';

  @field('name') name;
}
