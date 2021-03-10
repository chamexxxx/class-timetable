import React from 'react';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Form from '../components/form/LessonForm';

export default ({ navigation, route }) => {
  const database = useDatabase();
  const { timetableId } = route.params;

  const onSubmit = async (data) => {
    const timetablesCollection = database.get('timetables');
    const timetable = await timetablesCollection.find(timetableId);
    await timetable.addLesson(data);
    navigation.goBack();
  };

  return <Form onSubmit={onSubmit} />;
};
