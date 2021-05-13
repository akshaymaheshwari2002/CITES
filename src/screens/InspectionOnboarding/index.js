import React, {useRef, useCallback, useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  FlatList,
  Platform,
  Pressable,
} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';

import {Container, Pagination, Tooltip} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import OnboardingFour from './OnboardingFour';
import OnboardingFive from './OnboardingFive';
import {setActiveInspection, setTooltipProps} from '@store/slices/sessionSlice';
import {TabBar} from '@molecules';

const data = [
  OnboardingOne,
  OnboardingTwo,
  OnboardingThree,
  OnboardingFour,
  OnboardingFive,
];

const InspectionOnboarding = ({navigation, route}) => {
  const flatListRef = useRef({});
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {width: windowWidth} = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState();
  const [showToolTip, setShowToolTip] = useState(false);

  const handleBackPress = useCallback(() => {
    if (activeIndex === 0) {
      navigation.goBack();
    } else {
      scrollToActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, navigation, scrollToActiveIndex]);

  const handleForwardPress = useCallback(() => {
    if (activeIndex < data?.length - 1) {
      scrollToActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, scrollToActiveIndex]);

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

  const handleMomentumScrollEnd = useCallback((e) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);

    setActiveIndex(pageNum);
  }, []);

  const handleTooltipClose = useCallback(() => {
    setShowToolTip(false);
    setTimeout(() => {
      dispatch(
        setTooltipProps({
          consumerName: 'home',
          isVisible: true,
          content: formatMessage({
            id: 'screen.StepOne.WalkThroughContentTwo',
          }),
        }),
      );
    }, 0);
  }, [dispatch, formatMessage]);

  useEffect(() => {
    if (activeIndex === 4) {
      setShowToolTip(true);
    }
  }, [activeIndex]);

  useEffect(() => {
    dispatch(setActiveInspection({}));
  }, [dispatch]);

  useEffect(() => {
    if (route.params.defaultIndex >= 0) {
      flatListRef.current?.scrollToOffset({
        offset: route.params.defaultIndex * windowWidth,
        animated: true,
      });
      setActiveIndex(route.params.defaultIndex);
    }
  }, [route.params.defaultIndex, windowWidth]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable hitSlop={10} onPress={handleBackPress}>
          <Tooltip
            placement="bottom"
            isVisible={showToolTip}
            allowChildInteraction={true}
            closeOnChildInteraction={false}
            content={formatMessage({
              id: 'screen.StepOne.WalkThroughContentOne',
            })}
            focusedStyle={styles.headerLeftTooltip}
            onClose={handleTooltipClose}>
            <Icon name="chevron-left" size={ms(22)} />
          </Tooltip>
        </Pressable>
      ),
      headerTitle: () => (
        <Pagination activeIndex={activeIndex} dotsLength={data.length} />
      ),
      headerRight: () => (
        <Pressable hitSlop={10} onPress={handleForwardPress}>
          <Icon name="chevron-right" size={ms(22)} />
        </Pressable>
      ),
    });
  }, [
    activeIndex,
    formatMessage,
    handleBackPress,
    handleForwardPress,
    handleTooltipClose,
    navigation,
    showToolTip,
  ]);

  return (
    <>
      <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
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
          renderItem={({item: Item, index}) => {
            return (
              <View style={[CommonStyles.flex1, {width: windowWidth}]}>
                <Item />
              </View>
            );
          }}
        />
      </Container>
      <TabBar />
    </>
  );
};

const styles = ScaledSheet.create({
  headerLeftTooltip: {marginLeft: '16@s'},
});

export default InspectionOnboarding;
