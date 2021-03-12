import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Lesson from './Lesson';

export default (props) => {
  const database = useDatabase();
  const navigation = useNavigation();
  const { params } = useRoute();

  const { data } = props;
  const { id: timetableId } = params;

  const handleEdit = () => {
    navigation.navigate('LessonEditing', { ...data });
  };

  const handleCopy = () => {
    navigation.navigate('LessonCreation', { timetableId, ...data });
  };

  const handleDelete = async () => {
    const lessonsCollection = database.get('lessons');
    await database.action(async () => {
      const lesson = await lessonsCollection.find(data.id);
      await lesson.destroyPermanently();
    });
  };

  return (
    <Lesson
      {...data}
      {...props}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onDelete={handleDelete}
      style={{ marginTop: 10 }}
    />
  );
};
