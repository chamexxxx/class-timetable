import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Calendar from '../components/Calendar.js';
import Lessons from '../components/Lessons.js';
import lessons from '../api/lessons.js';

const Container = styled.View`
  padding: 10px 15px;
`;

const TimetableScreen = () => {
  return (
    <>
      <Calendar />
      <Container>
        <ScrollView>
          <Lessons data={lessons} />
        </ScrollView>
      </Container>
    </>
  );
};

export default TimetableScreen;
