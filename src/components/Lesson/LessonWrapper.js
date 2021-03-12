import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Lesson from './Lesson';

export default (props) => {
  const database = useDatabase();
  const navigation = useNavigation();
  const { params } = useRoute();

  const { id: timetableId } = params;

  const handleEdit = () => {
    navigation.navigate('LessonEditing', { ...props });
  };

  const handleCopy = () => {
    navigation.navigate('LessonCreation', { timetableId, ...props });
  };

  const handleDelete = async () => {
    const lessonsCollection = database.get('lessons');
    await database.action(async () => {
      const lesson = await lessonsCollection.find(props.id);
      await lesson.destroyPermanently();
    });
  };

  return (
    <Lesson
      {...props}
      onEdit={handleEdit}
      onCopy={handleCopy}
      onDelete={handleDelete}
      style={{ marginTop: 10 }}
    />
  );
};
