import React from 'react';
import { ScrollView } from 'react-native';
import Lesson from './Lesson.js';

export default ({ data, style }) => {
  const list = data.sort((a, b) => a.number > b.number);

  return (
    <ScrollView style={style}>
      {list.map((lesson, index) => {
        return <Lesson key={index} {...lesson} style={{ marginTop: 10 }} />;
      })}
    </ScrollView>
  );
};
