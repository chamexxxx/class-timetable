import React from 'react';
import { View } from 'react-native';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import List from '../components/List';
import CreationButton from '../components/CreationButton';

const TimetablesScreen = ({ navigation, timetables }) => {
  const navigateToTimetable = (id) => {
    navigation.navigate('Timetable', { id });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <List
        items={timetables}
        style={{
          flex: 1,
          top: -50,
          marginHorizontal: 15,
          paddingBottom: 40,
        }}
        onPress={({ id }) => navigateToTimetable(id)}
      />
      <CreationButton
        label="Создать расписание"
        isFloating
        onPress={() => navigation.navigate('TimetableCreation')}
      />
    </View>
  );
};

export default withDatabase(
  withObservables([], ({ database }) => ({
    timetables: database.get('timetables').query().observe(),
  }))(TimetablesScreen),
);
