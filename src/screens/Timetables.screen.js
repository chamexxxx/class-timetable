import React, { useState } from 'react';
import { View } from 'react-native';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import styled from 'styled-components/native';
import List from 'components/List';
import CreationButton from 'components/CreationButton';
import SearchInput from 'components/form/elements/SearchInput';

const TimetablesScreen = ({ navigation, timetables }) => {
  const [search, setSearch] = useState('');

  const navigateToTimetable = (id) => {
    navigation.navigate('Timetable', { id });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <SearchContainer>
        <SearchInput
          value={search}
          onChangeText={setSearch}
          placeholder="Название расписания"
        />
      </SearchContainer>
      <List
        items={timetables}
        filterString={search}
        emptyText="У вас нет ни одного расписания"
        onPress={({ id }) => navigateToTimetable(id)}
        style={{
          flex: 1,
          top: -50,
          marginHorizontal: 15,
          paddingBottom: 40,
        }}
      />
      <CreationButton
        label="Создать расписание"
        isFloating
        onPress={() => navigation.navigate('TimetableCreation')}
      />
    </View>
  );
};

const SearchContainer = styled.View`
  padding-horizontal: 15px;
  padding-top: 20px;
  padding-bottom: 70px;
  background: rgb(31, 162, 213);
`;

export default withDatabase(
  withObservables([], ({ database }) => ({
    timetables: database.get('timetables').query().observe(),
  }))(TimetablesScreen),
);
