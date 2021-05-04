import React, {useCallback, useEffect} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {verticalScale, ScaledSheet} from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const Loader = ({visible = false, customIcon, customText}) => {
  const spinValue = new Animated.Value(0);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animateLoop = useCallback(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished && visible) {
        spinValue.setValue(0);
        animateLoop();
      }
    });
  }, [spinValue, visible]);

  useEffect(() => {
    if (visible) {
      animateLoop();
    }
  }, [animateLoop, visible]);

  return (
    <>
      {visible ? (
        <>
          <Animated.View
            style={[
              customIcon ? {} : styles.loaderView,
              {
                transform: [{rotateZ: spin}],
              },
            ]}>
            {customIcon ? (
              customIcon
            ) : (
              <EvilIcons
                name={'spinner-3'}
                size={verticalScale(70)}
                color={RawColors.black}
              />
            )}
          </Animated.View>
          {customText ? (
            <View style={styles.loaderText}>{customText}</View>
          ) : null}
        </>
      ) : null}
    </>
  );
};

const styles = ScaledSheet.create({
  loaderView: {
    ...CommonStyles.centerContent,
    ...StyleSheet.absoluteFill,
  },
  loaderText: {
    marginVertical: '5@vs',
  },
});

export default Loader;
