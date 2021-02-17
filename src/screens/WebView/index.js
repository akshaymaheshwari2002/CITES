import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';

import Config from '@config';

const WebView = ({route}) => {
  const uri = route.params?.sourceUri ?? Config.URL_CITES_HOMEPAGE;

  return <RNWebView startInLoadingState={true} source={{uri}} />;
};

export default WebView;
