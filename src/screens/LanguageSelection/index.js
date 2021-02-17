import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, View, Animated, Dimensions, Easing} from 'react-native';
// import Animated from 'react-native-reanimated';
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Picker} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {setLocale} from '@store/slices/persistedSlice';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';
import LocaleList from './LocaleList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const [isMount, setIsMount] = useState(false);
  let searchlayout = useRef({}).current;
  // let meshlayout = useRef({}).current;

  const isMounting = useRef(true);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const searchCircleHeight = useRef(new Animated.Value(windowWidth)).current;
  const mainDataOpacity = useRef(new Animated.Value(0)).current;
  const imageWidth = useRef(new Animated.Value(windowWidth)).current;
  const imageHeight = useRef(new Animated.Value(windowHeight)).current;
  const meshOpacity = useRef(new Animated.Value(1)).current;
  const xPos = useRef(new Animated.Value(0)).current;
  const yPos = useRef(new Animated.Value(0)).current;
  const scaleSearch = useRef(new Animated.Value(verticalScale(1.5))).current;
  const scaleMaskX = useRef(new Animated.Value(1)).current;
  const scaleMaskY = useRef(new Animated.Value(1)).current;
  const scaleRedCircle = useRef(new Animated.Value(0.5)).current;
  const rectBarOpacity = useRef(new Animated.Value(1)).current;
  const rectBarTranslate = useRef(new Animated.Value(verticalScale(50)))
    .current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const translateXCircle = useRef(new Animated.Value(0)).current;
  const translateYCircle = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleChange = useCallback(
    ({value}) => {
      dispatch(setLocale(value));
      navigation.navigate('HomePage');
    },
    [dispatch, navigation],
  );

  useEffect(() => {
    if (isMounting.current) {
      if (windowWidth && windowWidth) {
        // Animated.sequence([
        //   Animated.parallel([
        //     Animated.timing(imageHeight, {
        //       toValue: windowHeight * 1.2,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(imageWidth, {
        //       toValue: windowWidth * 1.2,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //   ]),
        //   Animated.parallel([
        //     Animated.timing(imageWidth, {
        //       toValue: 30,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(imageHeight, {
        //       toValue: 30,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(xPos, {
        //       toValue: 30,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(yPos, {
        //       toValue: 100,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(scaleSearch, {
        //       toValue: 1,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: true,
        //     }),
        //     Animated.timing(rectBarTranslate, {
        //       toValue: 300,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: true,
        //     }),
        //     Animated.timing(rectBarOpacity, {
        //       toValue: 0,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: true,
        //     }),
        //   ]),
        //   Animated.timing(spinValue, {
        //     toValue: 1,
        //     duration: 10,
        //     easing: Easing.ease,
        //     useNativeDriver: false,
        //   }),
        //   Animated.parallel([
        //     Animated.timing(imageHeight, {
        //       toValue: windowHeight * 4,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(imageWidth, {
        //       toValue: windowWidth * 4,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(xPos, {
        //       toValue: 0,
        //       duration: 100,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(yPos, {
        //       toValue: 0,
        //       duration: 100,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(meshOpacity, {
        //       toValue: 0,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: false,
        //     }),
        //     Animated.timing(mainDataOpacity, {
        //       toValue: 1,
        //       duration: 1000,
        //       easing: Easing.ease,
        //       useNativeDriver: true,
        //     }),
        //   ]),
        // ]).start(() => {
        //   setIsMount(false);
        //   isMounting.current = false;
        // });
      }
    }
  }, [
    imageHeight,
    imageWidth,
    mainDataOpacity,
    meshOpacity,
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
            // opacity: mainDataOpacity,
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
              // transform: [{scaleX: scaleSearch}, {scaleY: scaleSearch}],
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
        <Animated.View
          style={{
            width: '100%',
            alignItems: 'center',
            // opacity: mainDataOpacity,
          }}>
          <View style={styles.dropDownContainer}>
            <Picker
              items={LocaleList}
              style={styles.picker}
              defaultValue={locale}
              onChange={handleChange}
              selectedLabelStyle={styles.selectedStyle}
            />
          </View>
        </Animated.View>
        {isMount ? (
          <Animated.Image
            onLayout={(e) => {
              // meshlayout = e.nativeEvent.layout;
            }}
            style={[
              styles.animationImage,
              {
                opacity: meshOpacity,
                height: imageHeight,
                width: imageWidth,
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
        {/* <Animated.Image
          style={[
            styles.redCircle,
            {
              transform: [
                {scaleX: scaleRedCircle},
                {scaleY: scaleRedCircle},
                // {
                //   translateX: Animated.divide(translateXCircle, scaleRedCircle),
                // },
                // {translateY: Animated.divide(translateYCircle, scaleRedCircle)},
              ],
            },
          ]}
          source={Images.redCircle}
          resizeMode="contain"
        /> */}
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
  },
  search: {
    marginTop: '5@vs',
    height: '212@vs',
    marginBottom: '10@vs',
  },
  selectedStyle: {
    ...Fonts.Lato17B,
    color: 'black',
  },
  dropDownContainer: {
    paddingHorizontal: '16@s',
    marginHorizontal: '16@s',
    paddingBottom: '16@vs',
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
    height: '142@vs',
    top: 0,
    left: 0,
    // backgroundColor: 'red',
  },
});

export default LanguageSelection;
