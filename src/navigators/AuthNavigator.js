import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth">{() => <></>}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
