import React from 'react';
import {NativeModules, Platform, PermissionsAndroid} from 'react-native';
import {renderToStaticMarkup} from 'react-dom/server';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import createIntl from './Intl';
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
      return false;
    }
  } else {
    return true;
  }
};

export const generatePdf = async ({
  templates = [],
  fileName,
  saveFile = false,
  locale = 'en',
}) => {
  const intl = createIntl(locale);

  let options = {
    html: templates.map((value) => renderToStaticMarkup(value)).join(''),
  };
  let saveOptions = {
    html: templates.map((value) => renderToStaticMarkup(value)).join(''),
    fileName: fileName ? `${fileName}` : `${new Date().getTime()}`,
    directory: Platform.OS === 'ios' ? 'Documents' : 'Download',
  };
  try {
    const permissionGranted = await requestWritePermission();
    if (permissionGranted) {
      let file = await RNHTMLtoPDF.convert(saveFile ? saveOptions : options);
      return file;
    } else {
      return intl.formatMessage({id: 'permission.writeExternal'});
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
 * Checks if a number is in range 0 to 100
 * @param {(number|string)} value - entity to be checked
 * @returns {boolean}
 */
export const isNumberPercentage = (value) => {
  try {
    return Number(value) >= 0 && Number(value) <= 100;
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

/**
 * Will return an html input element wrapped in a span.
 * @param {Object} props properties to be set on input field
 * @param {string} props.name name for html input field
 * @param {string} props.defaultValue default value in input field
 * @param {number|string} props.inputSize size for input field
 * @param {string} props.type input field type
 * @param {string} props.checked optional checked for radio button
 * @param {string} props.id id for element
 * @returns {JSX.Element}
 */
export const getInputFieldElementForFormSummary = ({
  name = 'unNamedField',
  defaultValue = '',
  inputSize = 20,
  type = 'text',
  checked,
  id,
}) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `
          <input
            type="${type}"
            size="${inputSize}"
            name="${name}"
            value="${defaultValue}"
            ${checked ? 'checked' : ''}
            ${id ? 'id="' + id + '"' : ''}
            oninput="shipData(this.name, this.value)"
          />`,
      }}
    />
  );
};
