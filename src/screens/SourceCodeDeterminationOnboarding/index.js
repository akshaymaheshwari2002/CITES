import React, {useRef, useCallback} from 'react';
import {View, useWindowDimensions, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOneA from './OnboardingOneA';
import OnboardingTwoA from './OnboardingTwoA';
import OnboardingThreeA from './OnboardingThreeA';

const data = [OnboardingOneA, OnboardingTwoA, OnboardingThreeA];

const SourceCodeDeterminationOnboarding = ({navigation}) => {
  const flatListRef = useRef({});
  const windowWidth = useWindowDimensions().width;
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
          screen: 'DetermineSourceCode',
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
          screen: 'DetermineSourceCode',
          params: {showToolTip: true},
        });
      }
    },
    [navigation, windowWidth],
  );
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
        onScrollEndDrag={handleScrollEndDrag}
        keyExtractor={(_, index) => index.toString()}
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
});

export default SourceCodeDeterminationOnboarding;
