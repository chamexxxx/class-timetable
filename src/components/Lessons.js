import React from 'react';
import { View } from 'react-native';
import Lesson from './Lesson.js';

export default ({ data }) => {
  const list = data.sort((a, b) => a.number > b.number);

  return (
    <View>
      {list.map((lesson, index) => {
        return <Lesson key={index} {...lesson} style={{ marginTop: 10 }} />;
      })}
    </View>
  );
};
