import React, {useRef, useCallback} from 'react';
import {View, useWindowDimensions, FlatList, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import OnboardingFour from './OnboardingFour';

const data = [OnboardingOne, OnboardingTwo, OnboardingThree, OnboardingFour];

const InspectionOnboarding = ({navigation}) => {
  const flatListRef = useRef({});
  const {width: windowWidth} = useWindowDimensions();

  const handleBackPress = useCallback(
    (index) => {
      if (index === 0) {
        navigation.goBack();
      } else {
        scrollToActiveIndex(index - 1);
      }
    },
    [navigation, scrollToActiveIndex],
  );

  const handleForwardPress = useCallback(
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
    [navigation, scrollToActiveIndex],
  );

  const scrollToActiveIndex = useCallback(
    (index) => {
      flatListRef.current?.scrollToOffset({
        offset: index * windowWidth,
        animated: true,
      });
    },
    [windowWidth],
  );

  const handleScrollEndDrag = useCallback(
    (e) => {
      const index = Math.round(e.nativeEvent?.contentOffset?.x / windowWidth);
      if (index === data?.length - 1) {
        navigation.navigate('TabNavigator', {
          screen: 'StepOne',
          params: {showToolTip: true},
        });
      }
    },
    [navigation, windowWidth],
  );
  const headerDots = (index) => {
    return (
      <View style={styles.headerContent}>
        <Image
          source={
            index === 0 ? Images.headerDarkCircle : Images.headerLightCircle
          }
          style={styles.headerImage}
        />
        <Image
          source={
            index === 1 ? Images.headerDarkCircle : Images.headerLightCircle
          }
          style={styles.headerImage}
        />
        <Image
          source={
            index === 2 ? Images.headerDarkCircle : Images.headerLightCircle
          }
          style={styles.headerImage}
        />
        <Image
          source={
            index === 3 ? Images.headerDarkCircle : Images.headerLightCircle
          }
          style={styles.headerImage}
        />
      </View>
    );
  };
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
        onScrollEndDrag={handleScrollEndDrag}
        renderItem={({item: Item, index}) => {
          return (
            <View
              style={[
                styles.contentContainer,
                CommonStyles.shadowEffect,
                {width: windowWidth},
              ]}>
              <Item
                onBackPress={() => handleBackPress(index)}
                onForwardPress={() => handleForwardPress(index)}
                headerDots={() => headerDots(index)}
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
  },
  headerContent: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerImage: {
    height: '15@s',
    width: '15@s',
    marginHorizontal: '5@s',
  },
});

export default InspectionOnboarding;
