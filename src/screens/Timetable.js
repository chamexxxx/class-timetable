import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Lessons from '../components/Lessons.js';
import lessons from '../api/lessons.js';

const Container = styled.View`
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

const TimetableScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Lessons data={lessons} />
      </ScrollView>
    </Container>
  );
};

export default TimetableScreen;
