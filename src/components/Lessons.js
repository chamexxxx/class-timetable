import React from 'react';
import { FlatList } from 'react-native';
import Lesson from './Lesson';

export default ({ data, style }) => {
  const list = data.sort((a, b) => a.number > b.number);

  const renderItem = ({ item, index }) => {
    return <Lesson key={index} {...item} style={{ marginTop: 10 }} />;
  };

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={style}
    />
  );
};
