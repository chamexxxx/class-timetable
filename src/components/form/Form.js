import React from 'react';
import { View } from 'react-native';
import Button from './elements/Button';

export default ({ children, onSubmit, buttonText }) => {
  return (
    <View style={{ padding: 10 }}>
      {children}
      <Button
        title={buttonText || 'Сохранить'}
        color="steelblue"
        onPress={onSubmit}
        style={{ marginTop: 5 }}
      />
    </View>
  );
};
