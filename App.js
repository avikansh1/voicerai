import React from 'react';
import SignUp from './components/authentication/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/authentication/Login';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
