import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/fr';
import 'intl/locale-data/jsonp/es';
import 'intl/locale-data/jsonp/lo';
import 'intl/locale-data/jsonp/ms';
import 'intl/locale-data/jsonp/zh';
import 'intl/locale-data/jsonp/km';
import 'intl/locale-data/jsonp/vi';
import 'intl/locale-data/jsonp/th';
import 'intl/locale-data/jsonp/id';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '@store';
import App from './src/App';
import {name as appName} from './app.json';

const renderApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => renderApp);
