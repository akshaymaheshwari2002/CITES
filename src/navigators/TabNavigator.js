import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import {ms} from 'react-native-size-matters';

import {TabBar} from '@molecules';
import {
  StepOne,
  StepThree,
  StepTwo,
  FormOne,
  FormTwo,
  FormThree,
  FormFour,
  SourceCode,
  BeginInspection,
  FacilityRegistered,
  FacilityInfringement,
  ProductionCapacityCalculator,
  ContinueInspection,
  DetermineSourceCode,
  SourceCodeSelection,
  FormOneSummary,
  FormOneSummaryEdit,
  FormTwoSummary,
  FormTwoSummaryEdit,
  FormThreeSummary,
  ExampleDialogueStep3,
  ExampleDialogueStep2,
  ExampleDialogueConsentFormStep2,
  FeedbackTwo,
  FeedbackOne,
  StepSummary,
  FacilityScore,
  FacilityScoreInformation,
  Q4MoreInfo,
  Q9MoreInfo,
  Q1MoreInfo,
  NoExport,
  MoreInformation,
  InspectionNotes,
} from '@screens';
import CommonStyles from '@styles/CommonStyles';

const Stack = createStackNavigator();

const screenOptions = {
  title: null,
  headerBackTitle: ' ',
  headerStyle: CommonStyles.navigationHeader,
  headerLeft: ({canGoBack, ...navigationProps}) =>
    canGoBack ? (
      <Icon name="chevron-left" size={ms(26)} {...navigationProps} />
    ) : null,
  headerLeftContainerStyle: CommonStyles.navigationLeftContainer,
  headerRightContainerStyle: CommonStyles.navigationRightContainer,
};

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="StepOne" screenOptions={screenOptions}>
        <Stack.Screen
          name="StepOne"
          component={StepOne}
          initialParams={{showToolTip: false}}
        />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="StepThree" component={StepThree} />

        <Stack.Screen
          name="SourceCodeSelection"
          component={SourceCodeSelection}
        />
        <Stack.Screen
          name="ContinueInspection"
          component={ContinueInspection}
        />
        <Stack.Screen
          name="ExampleDialogueStep3"
          component={ExampleDialogueStep3}
        />
        <Stack.Screen
          name="ExampleDialogueStep2"
          component={ExampleDialogueStep2}
        />
        <Stack.Screen
          name="ExampleDialogueConsentFormStep2"
          component={ExampleDialogueConsentFormStep2}
        />
        <Stack.Screen name="SourceCode" component={SourceCode} />
        <Stack.Screen name="FeedbackOne" component={FeedbackOne} />
        <Stack.Screen name="NoExport" component={NoExport} />
        <Stack.Screen name="InspectionNotes" component={InspectionNotes} />
        <Stack.Screen name="FeedbackTwo" component={FeedbackTwo} />
        <Stack.Screen name="FormOne" component={FormOne} />
        <Stack.Screen name="FormTwo" component={FormTwo} />
        <Stack.Screen name="FormThree" component={FormThree} />
        <Stack.Screen name="FormFour" component={FormFour} />
        <Stack.Screen name="FacilityScore" component={FacilityScore} />
        <Stack.Screen
          name="FacilityScoreInformation"
          component={FacilityScoreInformation}
        />
        <Stack.Screen name="BeginInspection" component={BeginInspection} />
        <Stack.Screen
          name="FacilityRegistered"
          component={FacilityRegistered}
        />
        <Stack.Screen name="FormOneSummary" component={FormOneSummary} />
        <Stack.Screen
          name="FormOneSummaryEdit"
          component={FormOneSummaryEdit}
        />
        <Stack.Screen name="FormTwoSummary" component={FormTwoSummary} />
        <Stack.Screen
          name="FormTwoSummaryEdit"
          component={FormTwoSummaryEdit}
        />
        <Stack.Screen name="FormThreeSummary" component={FormThreeSummary} />
        <Stack.Screen name="Q4MoreInfo" component={Q4MoreInfo} />
        <Stack.Screen name="Q9MoreInfo" component={Q9MoreInfo} />
        <Stack.Screen name="Q1MoreInfo" component={Q1MoreInfo} />
        <Stack.Screen name="MoreInformation" component={MoreInformation} />

        <Stack.Screen
          name="FacilityInfringement"
          component={FacilityInfringement}
        />
        <Stack.Screen
          name="ProductionCapacityCalculator"
          component={ProductionCapacityCalculator}
        />
        <Stack.Screen name="StepSummary" component={StepSummary} />
        <Stack.Screen
          name="DetermineSourceCode"
          component={DetermineSourceCode}
          initialParams={{showToolTip: false}}
        />
      </Stack.Navigator>
      <TabBar />
    </>
  );
};

export default AppNavigator;
