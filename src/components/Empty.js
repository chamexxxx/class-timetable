import React from 'react';
import { View, Text, Image } from 'react-native';

export default ({ text }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image source={require('assets/empty.png')} />
    <Text>{text || 'Нет данных'}</Text>
  </View>
);
