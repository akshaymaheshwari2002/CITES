import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBar} from '@atoms';
import {StepOne, SearchDummy, Notes, DrawerMenu, StepsSummary} from '@screens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const renderTabBar = useCallback((props) => {
    return <TabBar {...props} />;
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="StepOne"
      backBehavior="none"
      tabBar={renderTabBar}>
      <Tab.Screen
        name="StepOne"
        component={StepOne}
        initialParams={{showToolTip: false}}
      />
      <Tab.Screen name="Search" component={SearchDummy} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="DrawerMenu" component={DrawerMenu} />
      <Tab.Screen name="StepsSummary" component={StepsSummary} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
