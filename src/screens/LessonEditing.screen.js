import React from 'react';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Form from 'components/form/LessonForm';

export default ({ navigation, route }) => {
  const database = useDatabase();
  const values = route.params;

  const onSubmit = async (data) => {
    const { id } = values;
    const lessonsCollection = database.get('lessons');
    const lesson = await lessonsCollection.find(id);
    await lesson.updateLesson(data);
    navigation.goBack();
  };

  return <Form onSubmit={onSubmit} {...values} buttonTitle="Сохранить" />;
};
