import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, View, Dimensions, Easing} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Picker} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {setLocale} from '@store/slices/persistedSlice';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';
import LocaleList from './LocaleList';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
} = Animated;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const runTiming = (clock, value, dest) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 2000,
    toValue: new Value(0),
    easing: Easing.linear,
  };

  return block([
    cond(
      clockRunning(clock),
      [
        // if the clock is already running we update the toValue, in case a new dest has been passed in
        set(config.toValue, dest),
      ],
      [
        // if the clock isn't running we reset all the animation params and start the clock
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, debug('stop clock', stopClock(clock))),
    // we made the block return the updated position
    state.position,
  ]);
};

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const [isMount, setIsMount] = useState(true);
  const [value, setValue] = useState();
  let searchlayout = useRef({}).current;
  // let meshlayout = useRef({}).current;
  // const clock = useRef(new Clock()).current;

  // const meshValue = runTiming(clock, 0, 2);

  const isMounting = useRef(true);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const meshValue = useRef(new Value(0)).current;
  const meshWidth = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [windowWidth, windowWidth * 1.2, 30, windowWidth * 4],
  });
  const meshHeight = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [windowHeight, windowHeight * 1.2, 30, windowHeight * 4],
  });
  const xPos = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, 30, 0],
  });
  const yPos = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, 100, 0],
  });
  const scaleSearch = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [
      verticalScale(1.5),
      verticalScale(1.5),
      verticalScale(1),
      verticalScale(1),
    ],
  });

  const rectBarTranslate = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [verticalScale(50), verticalScale(50), 300, 300],
  });

  const rectBarOpacity = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [1, 1, 0, 0],
  });

  const meshOpacity = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [1, 1, 1, 0],
  });
  const mainDataOpacity = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, 0, 1],
  });

  const redCircleSize = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [30, 30, 30, verticalScale(140)],
  });

  const redCircleOpacity = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, 1, 1],
  });

  const redCircleXPos = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [0, 0, 0, windowWidth / 2 - verticalScale(70) - 30],
  });

  const redCircleYPos = Animated.interpolate(meshValue, {
    inputRange: [0, 1, 2, 3],
    outputRange: [
      0,
      0,
      0,
      windowHeight / 2 - verticalScale(212) + verticalScale(110) - 100,
    ],
  });

  const searchCircleHeight = useRef(new Value(windowWidth)).current;
  const imageWidth = useRef(new Value(windowWidth)).current;
  const imageHeight = useRef(new Value(windowHeight)).current;
  const scaleMaskX = useRef(new Value(1)).current;
  const scaleMaskY = useRef(new Value(1)).current;
  const scaleRedCircle = useRef(new Value(0.5)).current;
  const spinValue = useRef(new Value(0)).current;
  const translateXCircle = useRef(new Value(0)).current;
  const translateYCircle = useRef(new Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleChange = useCallback(
    ({value}) => {
      dispatch(setLocale(value));
      navigation.navigate('OnboardingOne');
    },
    [dispatch, navigation],
  );

  useEffect(() => {
    if (isMounting.current) {
      if (windowWidth && windowWidth) {
        const ani = Animated.timing(meshValue, {
          toValue: 2,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        });
        ani.start(({finished}) => {
          if (finished) {
            console.log('finished');
            Animated.timing(spinValue, {
              toValue: 1,
              duration: 10,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start(({finished}) => {
              Animated.timing(meshValue, {
                toValue: 3,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
              }).start(({finished}) => {
                if (finished) {
                  isMounting.current = false;
                  setIsMount(false);
                }
              });
            });
          }
        });
      }
    }
  }, [
    imageHeight,
    imageWidth,
    mainDataOpacity,
    meshOpacity,
    meshValue,
    rectBarOpacity,
    rectBarTranslate,
    scaleMaskX,
    scaleMaskY,
    scaleSearch,
    searchCircleHeight,
    spinValue,
    xPos,
    yPos,
  ]);

  return (
    <Container statusBarProps={{backgroundColor: RawColors.darkBlue}}>
      <Container.ScrollView contentContainerStyle={[styles.scrollContainer]}>
        <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            opacity: mainDataOpacity,
          }}>
          <Image
            source={Images?.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.Image
          onLayout={(e) => {
            searchlayout = e.nativeEvent.layout;
          }}
          source={Images?.searchIcon}
          style={[
            styles.search,
            {
              transform: [{scaleX: scaleSearch}, {scaleY: scaleSearch}],
            },
          ]}
          resizeMode="contain"
        />
        {isMount ? (
          <Animated.Image
            source={Images?.rectangularBar}
            style={[
              {
                // height: verticalScale(212),
                opacity: rectBarOpacity,
                transform: [
                  {scaleX: verticalScale(0.8)},
                  {scaleY: verticalScale(0.8)},
                  {translateX: 100},
                  {translateY: rectBarTranslate},
                ],
              },
            ]}
            resizeMode="contain"
          />
        ) : null}
        {/* <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            opacity: mainDataOpacity,
          }}> */}
        <View style={styles.dropDownContainer}>
          <Picker
            items={LocaleList}
            style={styles.picker}
            defaultValue={locale}
            onChange={handleChange}
            selectedLabelStyle={styles.selectedStyle}
          />
        </View>
        {/* </Animated.View> */}
        {isMount ? (
          <Animated.Image
            onLayout={(e) => {
              // meshlayout = e.nativeEvent.layout;
            }}
            style={[
              styles.animationImage,
              {
                opacity: meshOpacity,
                height: meshHeight,
                width: meshWidth,
                transform: [
                  {
                    translateX: xPos,
                  },
                  {translateY: yPos},
                  {rotate: spin},
                ],
              },
            ]}
            source={Images.maskBackground}
            resizeMode="cover"
          />
        ) : null}
        <Animated.Image
          style={[
            styles.redCircle,
            {
              height: redCircleSize,
              width: redCircleSize,
              opacity: redCircleOpacity,
              transform: [
                // {scaleX: scaleRedCircle},
                // {scaleY: scaleRedCircle},
                {
                  translateX: redCircleXPos,
                },
                {translateY: redCircleYPos},
              ],
            },
          ]}
          source={Images.redCircle}
          resizeMode="contain"
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    alignItems: 'center',
    backgroundColor: RawColors.darkBlue,
    paddingVertical: '16@vs',
  },
  picker: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 0,
    width: '100%',
  },
  logo: {
    marginTop: '35@vs',
    height: '146@vs',
    width: '276@s',
  },
  search: {
    marginTop: '5@vs',
    height: '212@vs',
    marginBottom: '10@vs',
    // backgroundColor: 'red',
  },
  selectedStyle: {
    ...Fonts.Lato17B,
    color: 'black',
  },
  dropDownContainer: {
    paddingHorizontal: '16@s',
    marginHorizontal: '16@s',
    paddingBottom: '16@vs',
    // width: '100%',
  },
  animationImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    // right: '-50%',
    // bottom: '30%',
  },
  redCircle: {
    position: 'absolute',
    tintColor: 'red',
    height: 30,
    width: 30,
    // height: '142@vs',
    top: 100,
    left: 30,
    // backgroundColor: 'red',
  },
});

export default LanguageSelection;
