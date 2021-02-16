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
  InspectionFlow,
  GiveFeedback,
  OnboardingFour,
  OnboardingThree,
  OnboardingTwo,
  StepsSummary,
  StepOne,
  SubmitFeedback,
  FacilityRegistered,
  FacilityInfringement,
  ProductionCapacityCalculator,
  HomePage,
  webView,
} from '@screens';

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
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
        <Stack.Screen name="OnboardingFour" component={OnboardingFour} />
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepsSummary" component={StepsSummary} />
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
          name="HomePage"
          options={{headerShown: false}}
          component={HomePage}
        />
        <Stack.Screen name="webView" component={webView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
