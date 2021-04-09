import {createIntl as createReactIntl, createIntlCache} from 'react-intl';
import {NativeModules, Platform} from 'react-native';

import Config from '@config';
import {store} from '@store';
import messages_en from '@locale/en.json';
import messages_vi from '@locale/vi.json';

const cache = createIntlCache();
let intl;

export const getMessages = () => ({
  en: messages_en,
  vi: messages_vi,
});

export const getDeviceLocale = () => {
  let locale =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager?.settings?.AppleLocale?.split(/[_|-]/)[0]
      : NativeModules.I18nManager?.localeIdentifier?.split(/[_|-]/)[0];

  const messages = getMessages();

  if (!messages[locale]) {
    locale = 'en';
  }
  return locale;
};

export const createIntl = (_locale) => {
  const locale =
    _locale ||
    store.getState().persistedReducer.locale ||
    Config.DEFAULT_LOCALE;
  const messages = getMessages()[locale];

  intl = createReactIntl({locale, messages}, cache);

  return intl;
};

export const getIntl = () => {
  return intl || createIntl();
};
