import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import Index from './src';

export default function App() {
  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}
