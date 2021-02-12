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

export const isNumber = (value) => {
  // typeOf @value = "string" or "number"
  // returns boolean true if value is number otherwise false
  if (typeof value === 'number') {
    return true;
  } else if (typeof value === 'string') {
    return !isNaN(value);
  } else {
    return false;
  }
};

export const isNumberPositive = (value) => {
  // typeOf @value = "string" or "number"
  // returns boolean true if value if a positive number otherwise false
  try {
    return Number(value) >= 0;
  } catch (err) {
    return false;
  }
};

export const isNumberPercentageFraction = (value) => {
  // typeOf @value = "string" or "number"
  // returns boolean true if value is number and ranges from 0 to 1 otherwise false
  try {
    return Number(value) >= 0 && Number(value) <= 1;
  } catch (err) {
    return false;
  }
};

export const isNumberInteger = (value) => {
  // typeOf @value = "string" or "number"
  // returns boolean true if value is number otherwise false
  try {
    return Number.isInteger(Number(value));
  } catch (err) {
    return false;
  }
};
