import {NativeModules, Platform} from 'react-native';

import messages_en from '@locale/en.json';

export const getMessages = () => ({
  en: messages_en,
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

export const isJSONParsable = (string) => {
  try {
    JSON.parse(string);
    return true;
  } catch {
    return false;
  }
};

export const getDefaultValues = (formFields = []) =>
  formFields.reduce(
    (acc, current) => ({...acc, [current.name]: current.defaultValue || ''}),
    {},
  );
