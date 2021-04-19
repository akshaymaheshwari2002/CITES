import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ms} from 'react-native-size-matters';
import {Pressable} from 'react-native';

import {navigationRef} from '@utils/RootNavigation';
import CommonStyles from '@styles/CommonStyles';
import {
  LanguageSelection,
  InspectionFlow,
  SourceFlow,
  HomePage,
  WebView,
  DetermineSourceCode,
  InspectionOnboarding,
  SourceCodeDeterminationOnboarding,
} from '@screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screenOptions = {
  title: null,
  headerBackTitle: ' ',
  headerStyle: CommonStyles.navigationHeader,
  headerLeft: ({canGoBack, onPress, ...navigationProps}) =>
    canGoBack ? (
      <Pressable hitSlop={10} onPress={onPress}>
        <Icon name="chevron-left" size={ms(22)} {...navigationProps} />
      </Pressable>
    ) : null,
  headerLeftContainerStyle: CommonStyles.navigationLeftContainer,
  headerRightContainerStyle: CommonStyles.navigationRightContainer,
};

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="LanguageSelection">
        <Stack.Screen
          name="LanguageSelection"
          options={{headerShown: false}}
          component={LanguageSelection}
        />
        <Stack.Screen
          name="SourceFlow"
          options={{headerTransparent: true}}
          component={SourceFlow}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InspectionFlow"
          options={{headerTransparent: true}}
          component={InspectionFlow}
        />
        <Stack.Screen
          name="DetermineSourceCode"
          component={DetermineSourceCode}
        />
        <Stack.Screen
          name="HomePage"
          options={{headerShown: false}}
          component={HomePage}
        />
        <Stack.Screen name="WebView" component={WebView} />
        <Stack.Screen
          name="InspectionOnboarding"
          component={InspectionOnboarding}
          initialParams={{defaultIndex: 0}}
        />
        <Stack.Screen
          name="SourceCodeDeterminationOnboarding"
          options={{headerShown: false}}
          component={SourceCodeDeterminationOnboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
