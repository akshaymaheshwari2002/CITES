import React from 'react';
import {WebView as RNWebView} from 'react-native-webview';

const WebView = ({route}) => {
  const uri = route.params?.sourceUri ?? 'https://cites.org';
  return <RNWebView source={{uri}} />;
};

export default WebView;
