import React from 'react';
import styled from 'styled-components/native';
import { Bar } from 'react-native-progress';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default ({
  number,
  name,
  type,
  teacher,
  location,
  time,
  color,
  progress,
  style,
}) => (
  <Container style={style}>
    <Header>
      <LessonNumber>{number}</LessonNumber>
      {time && <LessonTime>{time}</LessonTime>}
    </Header>
    <Content>
      <SubjectName>{name}</SubjectName>
      {type && <SubjectType color={color}>{type}</SubjectType>}
      <Bottom>
        {teacher && <Teacher label={teacher} />}
        {location && <Location label={location} />}
      </Bottom>
      {progress !== undefined && <Progress value={progress} />}
    </Content>
  </Container>
);

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 15px 10px 15px;
  background-color: #ffffff;
  border-radius: 7px;
  elevation: 1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
`;

const Content = styled.View`
  padding: 0 4px;
`;

const SubjectName = styled.Text`
  margin-bottom: 3px;
  font-family: Verdana;
  font-weight: bold;
  font-size: 16px;
  color: #5a6779;
`;

const SubjectType = styled.Text`
  align-self: flex-start;
  margin: 5px 0;
  padding: 2px 7px;
  border-radius: 3px;

  ${({ color }) => colors[color] || colors.grey}
`;

const LessonNumber = styled.Text`
  padding: 1px 7px;
  font-size: 14px;
  color: #636262;
  background: #dfe3e8;
  border-radius: 30px;
`;

const LessonTime = styled.Text`
  font-size: 14px;
  color: #636262;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Teacher = ({ label }) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      name="school-outline"
      size={20}
      color="#000"
      style={{ marginRight: 5 }}
    />
    <Text>{label}</Text>
  </View>
);

const Location = ({ label }) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon
      name="location-outline"
      size={20}
      color="#000"
      style={{ marginRight: 4 }}
    />
    <Text>{label}</Text>
  </View>
);

const Progress = ({ value }) => (
  <View
    style={{
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 5,
      borderTopColor: '#d4d4d4',
      borderTopWidth: 1,
    }}>
    <View style={{ flexDirection: 'row' }}>
      <Icon
        name="time-outline"
        size={20}
        color="#000"
        style={{ marginRight: 5 }}
      />
      <Text>До окончания осталось 56 минут</Text>
    </View>
    <Bar
      progress={value}
      width={null}
      borderColor="transparent"
      unfilledColor="#E6E6E6"
      style={{ marginTop: 5 }}
    />
  </View>
);
