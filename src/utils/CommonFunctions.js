import {NativeModules, Platform, PermissionsAndroid} from 'react-native';
import {renderToStaticMarkup} from 'react-dom/server';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

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

export const requestWritePermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    return true;
  }
};

export const generatePdf = async (
  templates = [],
  fileName,
  saveFile = false,
) => {
  let options = {
    html: templates.map((value) => renderToStaticMarkup(value())).join(''),
  };
  let saveOptions = {
    html: templates.map((value) => renderToStaticMarkup(value())).join(''),
    fileName: fileName ? `${fileName}` : `${new Date().getTime()}`,
    directory: Platform.OS === 'ios' ? 'Documents' : 'Download',
  };
  try {
    const permissionGranted = await requestWritePermission();
    if (permissionGranted) {
      let file = await RNHTMLtoPDF.convert(saveFile ? saveOptions : options);
      console.log(file.filePath);
      return file;
    } else {
      return 'Please Grant Permission';
    }
  } catch (err) {
    return err;
  }
};

export const getDefaultValues = (formFields = []) =>
  formFields.reduce(
    (acc, current) => ({...acc, [current.name]: current.defaultValue || ''}),
    {},
  );

/**
 * Checks if a string contains a valid number
 * @param {(string|number)} value - entity to be checked
 * @returns {boolean}
 */
export const isNumber = (value) => {
  if (typeof value === 'number') {
    return true;
  } else if (typeof value === 'string') {
    return !isNaN(value);
  } else {
    return false;
  }
};

/**
 * Checks is a number positive
 * @param {(number|string)} value - entity to be checked
 * @returns {boolean}
 */
export const isNumberPositive = (value) => {
  try {
    return Number(value) >= 0;
  } catch (err) {
    return false;
  }
};

/**
 * Checks if a number is in range 0 to 1
 * @param {(number|string)} value - entity to be checked
 * @returns {boolean}
 */
export const isNumberPercentageFraction = (value) => {
  try {
    return Number(value) >= 0 && Number(value) <= 1;
  } catch (err) {
    return false;
  }
};

/**
 * Checks if a number is integer
 * @param {(number|string)} value - entity to be checked
 * @returns {boolean}
 */
export const isNumberInteger = (value) => {
  try {
    return Number.isInteger(Number(value));
  } catch (err) {
    return false;
  }
};
