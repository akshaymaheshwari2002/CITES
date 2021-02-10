import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '@utils/RootNavigation';
import {PdfPreviewTest} from '@screens';
import CommonStyles from '@styles/CommonStyles';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerStyle: CommonStyles.navigationHeader}}>
        <Stack.Screen name="App">{() => <></>}</Stack.Screen>
        <Stack.Screen name="PdfPreviewTest" component={PdfPreviewTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
