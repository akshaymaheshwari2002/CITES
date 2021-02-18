import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {verticalScale} from 'react-native-size-matters';
import {View} from 'react-native';

import {StepOne} from '@screens';
import {RawColors} from '@styles/Themes';

const Tab = createBottomTabNavigator();

const DummyScreen = () => {
  return <View />;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="StepOne"
      tabBarOptions={{
        style: {
          backgroundColor: RawColors.snow,
          height: verticalScale(80),
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="StepOne"
        component={StepOne}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather
                name={'home'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={DummyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather
                name={'search'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notes"
        component={DummyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather
                name={'edit-3'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DrawerMenu"
        component={DummyScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Feather
                name={'list'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
