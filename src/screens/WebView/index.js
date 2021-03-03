import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';

import {Container, Loader} from '@atoms';
import Config from '@config';

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

export default WebView;
