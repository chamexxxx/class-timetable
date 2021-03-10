import { Model } from '@nozbe/watermelondb';
import { field, children, action } from '@nozbe/watermelondb/decorators';

export default class Timetable extends Model {
  static table = 'timetables';
  static associations = {
    lessons: { type: 'has_many', foreignKey: 'timetable_id' },
  };

  @children('lessons') lessons;

  @field('name') name;

  @action async addLesson({
    number,
    name,
    type,
    color,
    teacher,
    location,
    appointedDate,
    startDate,
    endDate,
  }) {
    return await this.collections.get('lessons').create((lesson) => {
      lesson.timetable.set(this);
      lesson.number = Number(number);
      lesson.name = name;
      lesson.type = type;
      lesson.color = color;
      lesson.teacher = teacher;
      lesson.location = location;
      lesson.appointedDate = appointedDate.toISOString();
      if (startDate) {
        lesson.startDate = startDate.toISOString();
      }
      if (endDate) {
        lesson.endDate = endDate.toISOString();
      }
    });
  }
}
