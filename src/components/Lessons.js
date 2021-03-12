import React from 'react';
import { FlatList } from 'react-native';
import Lesson from './Lesson';

export default ({ data, style }) => {
  const list = data.sort((a, b) => a.number > b.number);

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Lesson item={item} />}
      keyExtractor={(item) => item.id}
      style={style}
    />
  );
};
