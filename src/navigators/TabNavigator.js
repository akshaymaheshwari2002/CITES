import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBar} from '@molecules';
import {
  StepOne,
  FormOne,
  SearchDummy,
  Notes,
  DrawerMenu,
  StepsSummary,
  FacilityRegistered,
  FacilityInfringement,
  ProductionCapacityCalculator,
  ContinueInspection,
  DetermineSourceCode,
  FormOneSummary,
  ExampleDialogueStep3,
  ExampleDialogueStep2,
  ExampleDialogueConsentFormStep2,
  FeedbackTwo,
  FeedbackOne,
  StepSummary,
  Q4MoreInfo,
  Q9MoreInfo,
  Q1MoreInfo,
  MoreInformation,
  InspectionNotes,
} from '@screens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const renderTabBar = useCallback((props) => {
    return <TabBar {...props} />;
  }, []);

  return (
    <Tab.Navigator initialRouteName="StepOne" tabBar={renderTabBar}>
      <Tab.Screen
        name="StepOne"
        component={StepOne}
        initialParams={{showToolTip: false}}
      />
      <Tab.Screen name="ContinueInspection" component={ContinueInspection} />
      <Tab.Screen
        name="ExampleDialogueStep3"
        component={ExampleDialogueStep3}
      />
      <Tab.Screen
        name="ExampleDialogueStep2"
        component={ExampleDialogueStep2}
      />
      <Tab.Screen
        name="ExampleDialogueConsentFormStep2"
        component={ExampleDialogueConsentFormStep2}
      />
      <Tab.Screen name="FeedbackOne" component={FeedbackOne} />
      <Tab.Screen name="InspectionNotes" component={InspectionNotes} />
      <Tab.Screen name="FeedbackTwo" component={FeedbackTwo} />
      <Tab.Screen name="FormOne" component={FormOne} />
      <Tab.Screen name="Search" component={SearchDummy} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="DrawerMenu" component={DrawerMenu} />
      <Tab.Screen name="StepsSummary" component={StepsSummary} />
      <Tab.Screen name="FacilityRegistered" component={FacilityRegistered} />
      <Tab.Screen name="FormOneSummary" component={FormOneSummary} />
      <Tab.Screen name="Q4MoreInfo" component={Q4MoreInfo} />
      <Tab.Screen name="Q9MoreInfo" component={Q9MoreInfo} />
      <Tab.Screen name="Q1MoreInfo" component={Q1MoreInfo} />
      <Tab.Screen name="MoreInformation" component={MoreInformation} />

      <Tab.Screen
        name="FacilityInfringement"
        component={FacilityInfringement}
      />
      <Tab.Screen
        name="ProductionCapacityCalculator"
        component={ProductionCapacityCalculator}
      />
      <Tab.Screen name="StepSummary" component={StepSummary} />
      <Tab.Screen name="DetermineSourceCode" component={DetermineSourceCode} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
