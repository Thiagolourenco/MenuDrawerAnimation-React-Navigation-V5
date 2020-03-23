import React from 'react';
import {View, Text} from 'react-native';

export default function Contact() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0984e3',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontSize: 15}}>Messages App</Text>
    </View>
  );
}
