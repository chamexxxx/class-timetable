import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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
  const navigation = useNavigation();
  const { params } = useRoute();

  const { id: timetableId } = params;

  const handleCopy = () => {
    navigation.navigate('LessonCreation', { timetableId, ...item });
  };

  return (
    <Lesson
      key={index}
      {...item}
      onEdit={() => console.log('on edit')}
      onCopy={handleCopy}
      onDelete={() => console.log('on delete')}
      style={{ marginTop: 10 }}
    />
  );
};
