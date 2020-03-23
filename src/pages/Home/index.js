import React from 'react';
import {Text, View} from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#6c5ce7',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 15}}>Home</Text>
    </View>
  );
}
