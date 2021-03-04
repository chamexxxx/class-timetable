import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import TextInput from './TextInput';

export default (props) => {
  return (
    <TextInput
      containerStyle={{
        marginVertical: 0,
        borderRadius: 50,
      }}
      style={{ paddingVertical: 5 }}
      prependComponent={<Icon name="search" size={20} color="#4d4d4d" />}
      {...props}
    />
  );
};
