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
      <Tab.Screen name="FormOne" component={FormOne} />
      <Tab.Screen name="Search" component={SearchDummy} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="DrawerMenu" component={DrawerMenu} />
      <Tab.Screen name="StepsSummary" component={StepsSummary} />
      <Tab.Screen name="FacilityRegistered" component={FacilityRegistered} />
      <Tab.Screen name="FormOneSummary" component={FormOneSummary} />

      <Tab.Screen
        name="FacilityInfringement"
        component={FacilityInfringement}
      />
      <Tab.Screen
        name="ProductionCapacityCalculator"
        component={ProductionCapacityCalculator}
      />
      <Tab.Screen name="DetermineSourceCode" component={DetermineSourceCode} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
