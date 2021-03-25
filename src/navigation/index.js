import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Timetable from 'screens/Timetable.screen';
import Timetables from 'screens/Timetables.screen';
import TimetableCreation from 'screens/TimetableCreation.screen';
import LessonCreation from 'screens/LessonCreation.screen';
import LessonEditing from 'screens/LessonEditing.screen';

const { Navigator, Screen } = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#343434',
  },
};

const Navigation = () => (
  <NavigationContainer theme={MyTheme}>
    <Navigator
      initialRouteName="Timetables"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0, //
        },
        headerTintColor: '#bf394d',
        cardStyle: { backgroundColor: '#343434' },
      }}>
      <Screen
        name="Timetables"
        component={Timetables}
        options={{
          title: 'Список расписаний',
          headerStyle: {
            backgroundColor: '#343434',
            elevation: 0,
          },
          headerTintColor: '#bf394d',
          cardStyle: { backgroundColor: '#bf394d' },
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
