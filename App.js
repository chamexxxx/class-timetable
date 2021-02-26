/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import database from './src/database';
import Navigation from './src/navigation';

const App: () => React$Node = () => (
  <DatabaseProvider database={database}>
    <Navigation />
  </DatabaseProvider>
);

export default App;
