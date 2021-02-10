import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '@utils/RootNavigation';
import {PdfPreviewTest} from '@screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="App" component={() => <></>} />
        <Stack.Screen name="PdfPreviewTest" component={PdfPreviewTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
