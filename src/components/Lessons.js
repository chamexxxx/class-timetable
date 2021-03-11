import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDatabase } from '@nozbe/watermelondb/hooks';
import Lesson from './Lesson';

export default ({ data, style }) => {
  const list = data.sort((a, b) => a.number > b.number);

  return (
    <FlatList
      data={list}
      renderItem={(item) => <LessonWrapper {...item} />}
      keyExtractor={(item) => item.id}
      style={style}
    />
  );
};

const LessonWrapper = ({ item, index }) => {
  const database = useDatabase();
  const navigation = useNavigation();
  const { params } = useRoute();

  const { id: timetableId } = params;

  const handleCopy = () => {
    navigation.navigate('LessonCreation', { timetableId, ...item });
  };

  const handleDelete = async () => {
    const lessonsCollection = database.get('lessons');
    await database.action(async () => {
      const lesson = await lessonsCollection.find(item.id);
      await lesson.destroyPermanently();
    });
  };

  return (
    <Lesson
      key={index}
      {...item}
      onEdit={() => console.log('on edit')}
      onCopy={handleCopy}
      onDelete={handleDelete}
      style={{ marginTop: 10 }}
    />
  );
};
