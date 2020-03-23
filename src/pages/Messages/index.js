import React from 'react';
import {View, Text} from 'react-native';

export default function Messages() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#9b59b6',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 16}}>Messages welcome</Text>
    </View>
  );
}
