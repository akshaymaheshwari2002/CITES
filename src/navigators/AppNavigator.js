import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';

import {navigationRef} from '@utils/RootNavigation';
import CommonStyles from '@styles/CommonStyles';
import {
  FacilityScore,
  FacilityScoreLessEight,
  FacilityScoreGreaterEight,
  LanguageSelection,
  OnboardingOne,
  OnboardingOneA,
  OnboardingTwoA,
  OnboardingThreeA,
  InspectionFlow,
  GiveFeedback,
  OnboardingFour,
  OnboardingThree,
  OnboardingTwo,
  StepsSummary,
  SourceCode,
  SubmitFeedback,
  SourceFlow,
  FacilityRegistered,
  FacilityInfringement,
  ProductionCapacityCalculator,
  HomePage,
  WebView,
  FormOne,
  ContinueInspection,
  StepTwo,
  DetermineSourceCode,
  FormOneSummary,
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
        <Icon name="chevron-left" size={scale(26)} {...navigationProps} />
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
        <Stack.Screen name="SourceCode" component={SourceCode} />
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
        <Stack.Screen name="OnboardingOneA" component={OnboardingOneA} />
        <Stack.Screen name="OnboardingTwoA" component={OnboardingTwoA} />
        <Stack.Screen name="OnboardingThreeA" component={OnboardingThreeA} />
        <Stack.Screen name="OnboardingFour" component={OnboardingFour} />
        <Stack.Screen
          name="StepOne"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="StepsSummary" component={StepsSummary} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="GiveFeedback" component={GiveFeedback} />
        <Stack.Screen name="SubmitFeedback" component={SubmitFeedback} />
        <Stack.Screen name="FacilityScore" component={FacilityScore} />
        <Stack.Screen
          name="FacilityInfringement"
          component={FacilityInfringement}
        />
        <Stack.Screen
          name="FacilityRegistered"
          component={FacilityRegistered}
        />
        <Stack.Screen
          name="InspectionFlow"
          options={{headerTransparent: true}}
          component={InspectionFlow}
        />
        <Stack.Screen
          name="ContinueInspection"
          component={ContinueInspection}
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
          name="ProductionCapacityCalculator"
          component={ProductionCapacityCalculator}
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
        <Stack.Screen name="FormOne" component={FormOne} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
