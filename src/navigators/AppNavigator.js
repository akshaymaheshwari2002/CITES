import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {ms} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';

import {navigationRef} from '@utils/RootNavigation';
import CommonStyles from '@styles/CommonStyles';
import {
  FacilityScore,
  FacilityScoreLessEight,
  FacilityScoreGreaterEight,
  LanguageSelection,
  OnboardingOneA,
  OnboardingTwoA,
  OnboardingThreeA,
  InspectionFlow,
  GiveFeedback,
  StepsSummary,
  SourceCode,
  SubmitFeedback,
  SourceFlow,
  HomePage,
  WebView,
  StepTwo,
  SourceCodeSelection,
  MoreInformation,
  DetermineSourceCode,
  FormOneSummary,
  InspectionOnboarding,
} from '@screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const screenOptions = {
  title: null,
  headerBackTitle: ' ',
  headerStyle: CommonStyles.navigationHeader,
  headerLeft: ({onPress, canGoBack, ...navigationProps}) =>
    canGoBack ? (
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-left" size={ms(26)} {...navigationProps} />
      </TouchableOpacity>
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
          name="SourceCodeSelection"
          component={SourceCodeSelection}
        />
        <Stack.Screen name="MoreInformation" component={MoreInformation} />
        <Stack.Screen name="SourceCode" component={SourceCode} />
        <Stack.Screen name="OnboardingOneA" component={OnboardingOneA} />
        <Stack.Screen name="OnboardingTwoA" component={OnboardingTwoA} />
        <Stack.Screen name="OnboardingThreeA" component={OnboardingThreeA} />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="StepsSummary" component={StepsSummary} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="GiveFeedback" component={GiveFeedback} />
        <Stack.Screen name="SubmitFeedback" component={SubmitFeedback} />
        <Stack.Screen name="FacilityScore" component={FacilityScore} />
        <Stack.Screen
          name="InspectionFlow"
          options={{headerTransparent: true}}
          component={InspectionFlow}
        />
        <Stack.Screen
          name="FacilityScoreLessEight"
          component={FacilityScoreLessEight}
        />
        <Stack.Screen
          name="FacilityScoreGreaterEight"
          component={FacilityScoreGreaterEight}
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
        <Stack.Screen name="FormOneSummary" component={FormOneSummary} />
        <Stack.Screen name="WebView" component={WebView} />
        <Stack.Screen
          name="InspectionOnboarding"
          options={{headerShown: false}}
          component={InspectionOnboarding}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
