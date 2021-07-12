import {createIntl as createReactIntl, createIntlCache} from 'react-intl';
import {NativeModules, Platform} from 'react-native';
import {decode} from 'he';

import Config from '@config';
import {store} from '@store';
import messages_en from '@locale/en.json';
import messages_vi from '@locale/vi.json';
import messages_es from '@locale/es.json';
import messages_id from '@locale/id.json';
import messages_km from '@locale/km.json';
import messages_lo from '@locale/lo.json';
import messages_ms from '@locale/ms.json';
import messages_th from '@locale/th.json';
import messages_fr from '@locale/fr.json';
import messages_zh from '@locale/zh.json';

const cache = createIntlCache();
let intl;

export const getMessages = () => ({
  en: messages_en,
  vi: messages_vi,
  es: messages_es,
  id: messages_id,
  km: messages_km,
  lo: messages_lo,
  ms: messages_ms,
  th: messages_th,
  fr: messages_fr,
  zh: messages_zh,
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

export const createIntl = (_locale, _messages = {}) => {
  const locale =
    _locale ||
    store.getState().persistedReducer.locale ||
    Config.DEFAULT_LOCALE;
  let messages = {...getMessages()[locale], ..._messages};
  messages = Object.keys(messages).reduce(
    (acc, curr) => ({...acc, [curr]: decode(messages[curr])}),
    {},
  );

  intl = createReactIntl({locale, messages}, cache);

  return intl;
};

export const getIntl = () => {
  return intl || createIntl();
};
