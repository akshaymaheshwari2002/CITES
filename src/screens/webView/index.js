import React from 'react';
import {WebView} from 'react-native-webview';

const webView = ({route}) => {
  const uri = route.params?.sourceUri ?? 'https://cites.org';
  return <WebView source={{uri}} />;
};

export default webView;
