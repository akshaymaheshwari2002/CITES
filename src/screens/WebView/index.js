import React from 'react';
import {Animated, Easing} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';
import {verticalScale, ScaledSheet} from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Container} from '@atoms';
import Config from '@config';
import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const WebView = ({route}) => {
  const uri = route.params?.sourceUri ?? Config.URL_CITES_HOMEPAGE;

  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const Loader = () => (
    <Animated.View
      style={[
        styles.loaderView,
        {
          transform: [{rotateZ: spin}],
        },
      ]}>
      <EvilIcons
        name={'spinner-3'}
        size={verticalScale(70)}
        color={RawColors.black}
      />
    </Animated.View>
  );

  return (
    <Container>
      <RNWebView
        startInLoadingState={true}
        source={{uri}}
        renderLoading={Loader}
      />
    </Container>
  );
};

export default WebView;

const styles = ScaledSheet.create({
  loaderView: {
    ...CommonStyles.centerContent,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
