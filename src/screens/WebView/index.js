import React, {useCallback, useRef, useEffect} from 'react';
import {Easing, Animated} from 'react-native';
import {WebView as RNWebView} from 'react-native-webview';
import {verticalScale, ScaledSheet} from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {Container, Loader} from '@atoms';
import Config from '@config';
import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const WebView = ({route}) => {
  const uri = route.params?.sourceUri ?? Config.URL_CITES_HOMEPAGE;

  return (
    <Container>
      <RNWebView
        startInLoadingState={true}
        source={{uri}}
        renderLoading={() => <Loader visible={true} />}
      />
    </Container>
  );
};

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

export default WebView;
