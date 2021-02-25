import React, {useRef, useCallback} from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import OnboardingFour from './OnboardingFour';

const windowWidth = Dimensions.get('window').width;

const InspectionOnboarding = ({navigation}) => {
  const flatListRef = useRef({});
  const data = [OnboardingOne, OnboardingTwo, OnboardingThree, OnboardingFour];

  const handelBackPress = useCallback(
    (index) => {
      if (index === 0) {
        navigation.goBack();
      } else {
        scrollToActiveIndex(index - 1);
      }
    },
    [navigation, scrollToActiveIndex],
  );

  const handelFordwardPress = useCallback(
    (index) => {
      if (index === data?.length - 1) {
        navigation.navigate('TabNavigator', {
          screen: 'StepOne',
          params: {showToolTip: true},
        });
      } else {
        scrollToActiveIndex(index + 1);
      }
    },
    [data, navigation, scrollToActiveIndex],
  );
  const scrollToActiveIndex = useCallback((index) => {
    flatListRef.current?.scrollToOffset({
      offset: index * windowWidth,
      animated: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        bounces={false}
        contentContainerStyle={CommonStyles.flexGrow1}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item: Item, index}) => {
          return (
            <View style={[styles.contentContainer, CommonStyles.shadowEffect]}>
              <Item
                onBackPress={() => handelBackPress(index)}
                onFordwardPress={() => handelFordwardPress(index)}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: RawColors.transparent,
  },
  contentContainer: {
    flex: 1,
    width: windowWidth,
  },
});

export default InspectionOnboarding;
