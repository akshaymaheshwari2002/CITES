import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Image, View, Dimensions, Easing} from 'react-native';
import Animated from 'react-native-reanimated';
import {ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {useIntl} from 'react-intl';

import {Container, Picker} from '@atoms';
import {setLocale} from '@store/slices/persistedSlice';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';
import LocaleList from './LocaleList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LanguageSelection = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const [isMount, setIsMount] = useState(true);
  const isMounting = useRef(true);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const meshValue = useRef(new Animated.Value(0)).current;
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

  const spinValue = useRef(new Animated.Value(0)).current;
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleChange = useCallback(
    (value) => {
      dispatch(setLocale(value));
      navigation.navigate('HomePage');
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
            Animated.timing(spinValue, {
              toValue: 1,
              duration: 10,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start(() => {
              Animated.timing(meshValue, {
                toValue: 3,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
              }).start(() => {
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
    mainDataOpacity,
    meshOpacity,
    meshValue,
    rectBarOpacity,
    rectBarTranslate,
    scaleSearch,
    spinValue,
    xPos,
    yPos,
  ]);

  return (
    <Container
      safeAreaViewProps={{style: {backgroundColor: RawColors.darkBlue}}}
      statusBarProps={{barStyle: 'light-content'}}>
      <Container.ScrollView contentContainerStyle={[styles.scrollContainer]}>
        <View style={[styles.logoContainer]}>
          <Image source={Images?.eye} style={styles.eye} resizeMode="contain" />
        </View>
        <Image
          source={Images?.logo}
          style={[styles.logo]}
          resizeMode="contain"
        />

        <View style={styles.dropDownContainer}>
          <Picker
            items={LocaleList}
            style={styles.picker}
            placeholder={formatMessage({id: 'screen.screen2.selectAnItem'})}
            placeholderStyle={styles.selectedStyle}
            defaultValue={locale}
            onChange={handleChange}
            selectedLabelStyle={styles.selectedStyle}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    alignItems: 'center',
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
  logoContainer: {
    width: '100%',
    alignItems: 'center',
  },
  eye: {
    marginTop: '35@vs',
    height: '146@vs',
    width: '276@s',
  },
  logo: {
    marginTop: '35@vs',
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
  },
});

export default LanguageSelection;
