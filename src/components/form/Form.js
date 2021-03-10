import React from 'react';
import { ScrollView, View } from 'react-native';
import Button from './elements/Button';

export default ({ children, onSubmit, buttonDisabled, style, buttonTitle }) => {
  return (
    <View style={{ padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {children}
        <Button
          title={buttonTitle || 'Сохранить'}
          onPress={onSubmit}
          style={{ marginTop: 5 }}
          disabled={buttonDisabled}
        />
      </ScrollView>
    </View>
  );
};
