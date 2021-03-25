import React, {useRef, useCallback, useState} from 'react';
import {View, useWindowDimensions, FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Header, Pagination} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOneA from './OnboardingOneA';
import OnboardingTwoA from './OnboardingTwoA';
import OnboardingThreeA from './OnboardingThreeA';

const data = [OnboardingOneA, OnboardingTwoA, OnboardingThreeA];
const SourceCodeDeterminationOnboarding = ({navigation}) => {
  const flatListRef = useRef({});
  const {width: windowWidth} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBackPress = useCallback(() => {
    if (activeIndex === 0) {
      navigation.goBack();
    } else {
      scrollToActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, navigation, scrollToActiveIndex]);

  const handleForwardPress = useCallback(() => {
    if (activeIndex === data?.length - 1) {
      navigation.navigate('TabNavigator', {
        screen: 'DetermineSourceCode',
        params: {showToolTip: true},
      });
    } else {
      scrollToActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, navigation, scrollToActiveIndex]);

  const scrollToActiveIndex = useCallback(
    (index) => {
      flatListRef.current?.scrollToOffset({
        offset: index * windowWidth,
        animated: true,
      });
      setActiveIndex(index);
    },
    [windowWidth],
  );

  const handleMomentumScrollEnd = useCallback(
    (e) => {
      const contentOffset = e.nativeEvent.contentOffset;
      const viewSize = e.nativeEvent.layoutMeasurement;
      const pageNum = Math.floor(contentOffset.x / viewSize.width);

      if (activeIndex === pageNum && activeIndex === data?.length - 1) {
        navigation.navigate('TabNavigator', {
          screen: 'DetermineSourceCode',
          params: {showToolTip: true},
        });
      }

      setActiveIndex(pageNum);
    },
    [activeIndex, navigation],
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={handleBackPress} />
        }
        content={
          <Pagination activeIndex={activeIndex} dotsLength={data.length} />
        }
        rightContent={
          <Icon
            name="chevron-right"
            size={ms(26)}
            onPress={handleForwardPress}
          />
        }
      />
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        contentContainerStyle={CommonStyles.flexGrow1}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({item: Item}) => (
          <View style={[CommonStyles.flex1, {width: windowWidth}]}>
            <Item />
          </View>
        )}
      />
    </Container>
  );
};

export default SourceCodeDeterminationOnboarding;
