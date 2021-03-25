import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Timetable from 'screens/Timetable.screen';
import Timetables from 'screens/Timetables.screen';
import TimetableCreation from 'screens/TimetableCreation.screen';
import TimetableEditing from 'screens/TimetableEditing.screen';
import LessonCreation from 'screens/LessonCreation.screen';
import LessonEditing from 'screens/LessonEditing.screen';

const { Navigator, Screen } = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#bf394d',
  },
};

const Navigation = () => (
  <NavigationContainer theme={MyTheme}>
    <Navigator
      initialRouteName="Timetables"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
        },
        headerTintColor: 'rgb(31, 162, 213)',
        cardStyle: { backgroundColor: '#343434' },
      }}>
      <Screen
        name="Timetables"
        component={Timetables}
        options={{
          title: 'Список расписаний',
          headerStyle: {
            backgroundColor: 'rgb(31, 162, 213)',
            elevation: 0,
          },
          headerTintColor: '#ffffff',
        }}
      />
      <Screen
        name="Timetable"
        component={Timetable}
        options={{ title: 'Расписание' }}
      />
      <Screen
        name="TimetableCreation"
        component={TimetableCreation}
        options={{ title: 'Создать расписание' }}
      />
      <Screen
        name="TimetableEditing"
        component={TimetableEditing}
        options={{ title: 'Редактировать расписание' }}
      />
      <Screen
        name="LessonCreation"
        component={LessonCreation}
        options={{ title: 'Создать занятие' }}
      />
      <Screen
        name="LessonEditing"
        component={LessonEditing}
        options={{ title: 'Редактировать занятие' }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
