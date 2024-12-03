/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../authentication/SignUp';
import Login from '../authentication/Login';
import Gender from '../compatiblity/Gender';
import HomeScreen from '../Homescreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Calendar from '../Homescreen/Calendar';
import Notes from '../Homescreen/Notes';
import GetPharmacy from '../Homescreen/GetPharmacy';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#47C2C4',
          tabBarInactiveTintColor: '#D9D9D9',
          tabBarStyle: {backgroundColor: '#D9D9D9'},
          headerShown: false,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('../../assets/HomeScreen.png')} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('../../assets/calender.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('../../assets/File.png')} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="GetPharmacy"
          component={GetPharmacy}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image source={require('../../assets/File.png')} />
            ),
            headerShown: false,
          }}
        />
        {/* Add more tabs here if needed */}
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="signUp" component={SignUp} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
        <Stack.Screen name="Gender" component={Gender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
