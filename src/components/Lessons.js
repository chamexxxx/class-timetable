import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Lesson from './Lesson';

export default ({ data, style }) => {
  const [activeLessonId, setActiveLessonId] = useState(null);

  const list = [...data].sort((a, b) => a.number > b.number);

  const onChangeStatus = (id, status) => {
    setActiveLessonId(status ? id : null);
  };

  const renderItem = ({ item }) => {
    return (
      <Lesson
        item={item}
        status={activeLessonId === item.id}
        onChangeStatus={(status) => onChangeStatus(item.id, status)}
      />
    );
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
