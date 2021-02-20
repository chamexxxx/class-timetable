import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const TimetableScreen = () => (
  <View>
    <Text>Timetable</Text>
  </View>
);

const Navigation = () => (
  <NavigationContainer>
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
