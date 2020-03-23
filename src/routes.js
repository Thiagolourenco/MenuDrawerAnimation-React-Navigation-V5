import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';

import Home from './pages/Home';
import Messages from './pages/Messages';
import Contact from './pages/Contact';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

Icon.loadFont();

const Screens = ({navigation, style}) => {
  return (
    <Animated.View animated style={[{flex: 1, overflow: 'hidden'}, style]}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                marginLeft: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="menu" color="#fff" size={25} />
            </TouchableOpacity>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </Animated.View>
  );
};

const CustomDrawer = (...props) => {
  // console.log(navigation);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#74b9ff',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri:
              'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
            height: 60,
            width: 60,
          }}
        />
      </View>
      <DrawerItem
        label="Home"
        labelStyle={{marginLeft: -16}}
        onPress={() => props.navigation.navigate('Home')}
        icon={() => <Icon name="dashboard" size={25} color="red" />}
      />
      <DrawerItem
        label="Messages"
        labelStyle={{marginLeft: -16}}
        onPress={() => props.navigation.navigate('Messages')}
        icon={() => <Icon name="message" size={25} color="red" />}
      />

      <DrawerItem
        label="Contact"
        labelStyle={{marginLeft: -16}}
        onPress={() => props.navigation.navigate('Contact')}
        icon={() => <Icon name="phone" size={25} color="red" />}
      />
    </DrawerContentScrollView>
  );
};

export default function Routes() {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 10],
  });

  const screensStyles = {borderRadius, transform: [{scale}]};

  return (
    <View style={{backgroundColor: '#74b9ff', flex: 1}}>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        initialRouteName="Home"
        drawerStyle={{width: '50%', backgroundColor: 'transparent'}}
        contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'green',
          inactiveTintColor: 'green',
        }}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        drawerContent={props => {
          setProgress(props.progress);
          return <CustomDrawer />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={screensStyles} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  stack: {},
});
