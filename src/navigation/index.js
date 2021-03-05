import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Timetable from '../screens/Timetable.js';
import TimetableCreation from '../screens/TimetableCreation.screen';

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
        name="Timetable"
        component={Timetable}
        options={{ title: 'Расписание' }}
      />
      <Screen
        name="TimetableCreation"
        component={TimetableCreation}
        options={{ title: 'Создать расписание' }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
