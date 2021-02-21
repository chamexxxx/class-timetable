import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TimetableScreen from '../screens/Timetable.js';

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
    <Navigator initialRouteName="Timetable">
      <Screen
        name="Home"
        component={TimetableScreen}
        options={{ title: 'Расписание' }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Navigation;
