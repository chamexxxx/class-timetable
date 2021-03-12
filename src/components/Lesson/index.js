import React from 'react';
import { pick } from 'lodash';
import withObservables from '@nozbe/with-observables';
import LessonWrapper from './LessonWrapper';

const Lesson = ({ item, ...props }) => {
  const data = pick(item, [
    'id',
    'name',
    'number',
    'type',
    'color',
    'teacher',
    'location',
    'appointedDate',
    'startDate',
    'endDate',
  ]);
  return <LessonWrapper data={data} {...props} />;
};

const enhance = withObservables(['item'], ({ item }) => ({
  item,
}));

const EnhancedLesson = enhance(Lesson);

export default EnhancedLesson;
