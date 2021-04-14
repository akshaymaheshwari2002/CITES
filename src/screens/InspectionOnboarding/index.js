import React, {useRef, useCallback, useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  FlatList,
  Platform,
  Pressable,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';

import {Container, Header, Pagination} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import OnboardingFour from './OnboardingFour';
import {setActiveInspection} from '@store/slices/sessionSlice';

const data = [OnboardingOne, OnboardingTwo, OnboardingThree, OnboardingFour];

const InspectionOnboarding = ({navigation, route}) => {
  const flatListRef = useRef({});
  const dispatch = useDispatch();
  const {width: windowWidth} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(route.params.defaultIndex);

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
        screen: 'StepOne',
        params: {showToolTip: true, notShowAnimation: true},
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

  const handleMomentumScrollBegin = useCallback(
    (e) => {
      const velocity = e.nativeEvent.velocity?.x;
      const contentOffset = e.nativeEvent.contentOffset;
      const viewSize = e.nativeEvent.layoutMeasurement;
      const pageNum = Math.floor(contentOffset.x / viewSize.width);

      if (Platform.OS === 'ios') {
        if (pageNum === 0 && velocity < 0) {
          navigation.navigate('InspectionFlow');
        }
      } else if (pageNum === 0 && velocity > 0) {
        navigation.navigate('InspectionFlow');
      }

      setActiveIndex(pageNum);
    },
    [navigation],
  );

  const handleMomentumScrollEnd = useCallback(
    (e) => {
      const contentOffset = e.nativeEvent.contentOffset;
      const viewSize = e.nativeEvent.layoutMeasurement;
      const pageNum = Math.floor(contentOffset.x / viewSize.width);

      if (activeIndex === pageNum && activeIndex === data?.length - 1) {
        navigation.navigate('TabNavigator', {
          screen: 'StepOne',
          params: {showToolTip: true, notShowAnimation: true},
        });
      }

      setActiveIndex(pageNum);
    },
    [activeIndex, navigation],
  );

  useEffect(() => {
    dispatch(setActiveInspection({}));
  }, [dispatch]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Pressable hitSlop={10} onPress={handleBackPress}>
            <Icon name="chevron-left" size={ms(22)} />
          </Pressable>
        }
        content={
          <Pagination activeIndex={activeIndex} dotsLength={data.length} />
        }
        rightContent={
          <Pressable hitSlop={10} onPress={handleForwardPress}>
            <Icon name="chevron-right" size={ms(22)} />
          </Pressable>
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
        onMomentumScrollBegin={handleMomentumScrollBegin}
        renderItem={({item: Item}) => (
          <View style={[CommonStyles.flex1, {width: windowWidth}]}>
            <Item />
          </View>
        )}
      />
    </Container>
  );
};

export default InspectionOnboarding;
