/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import database from './src/database';
import Navigation from './src/navigation';

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <DatabaseProvider database={database}>
      <Navigation />
    </DatabaseProvider>
  );
};

export default App;
