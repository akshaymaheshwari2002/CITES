import {
  isNumber,
  isNumberInteger,
  isNumberPercentage,
  isNumberPercentageFraction,
  isNumberPositive,
} from '@utils/CommonFunctions';
import {getIntl} from '@utils/Intl';
// A - BR - 001;

const regexPhone = /^[1-9]+[0-9]*$/;
const regexBreedingCode = /^[A-Z][A-Z][A-Z][0-9][0-9][0-9]$/;

export default () => {
  const {formatMessage} = getIntl();

  return {
    required: formatMessage({id: 'form.error.fieldRequired'}),
    requiredMobileInput: (value) =>
      value?.contactNumber
        ? true
        : formatMessage({id: 'form.error.fieldRequired'}),
    requiredTextInputArrayAlt: (value) =>
      (Array.isArray(value) &&
        value.length &&
        value.reduce((accumulatedValue, el) => {
          if (typeof el?.data === 'number' || el?.data) {
            return accumulatedValue;
          } else {
            return false;
          }
        }, true)) ||
      formatMessage({id: 'form.error.allFieldsRequired'}),
    validateNumber: (value) =>
      value &&
      value.length &&
      (isNumber(value) || formatMessage({id: 'form.error.number'})),
    validatePositiveNumber: (value) =>
      isNumberPositive(value) ||
      formatMessage({id: 'form.error.positiveNumber'}),
    validateInteger: (value) =>
      isNumberInteger(value) || formatMessage({id: 'form.error.numberInteger'}),
    validateNumberPercentageFraction: (value) =>
      isNumberPercentageFraction(value) ||
      formatMessage({id: 'form.error.numberPercentageFraction'}),
    validateNumberPercentageNonFraction: (value) =>
      isNumberPercentage(value) ||
      formatMessage({id: 'form.error.numberPercentageNonFraction'}),
    validateEmail: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: formatMessage({id: 'form.error.invalidEmail'}),
    },
    validatePhone: {
      value: regexPhone,
      message: formatMessage({id: 'form.error.invalidPhone'}),
    },
    validateMobileInput: (value) =>
      value.length
        ? regexPhone.test(value?.contactNumber)
          ? true
          : formatMessage({id: 'form.error.invalidPhone'})
        : true,
    validBreedingCode: (value) => {
      console.log(value,'78')
      return value !== ''
        ? regexBreedingCode.test(value)
          ? true
          : formatMessage({id: 'form.error.invalidBreedingCode'})
        : true;
    },
    validateTextInputArrayAltNumber: (value) =>
      (Array.isArray(value) &&
        value.length &&
        value.reduce((accumulatedValue, el) => {
          if (isNumber(el?.data)) {
            return accumulatedValue;
          } else {
            return false;
          }
        }, true)) ||
      formatMessage({id: 'form.error.allNumber'}),
    validateTextInputArrayAltPositiveNumber: (value) =>
      (Array.isArray(value) &&
        value.length &&
        value.reduce((accumulatedValue, el) => {
          if (isNumberPositive(el?.data)) {
            return accumulatedValue;
          } else {
            return false;
          }
        }, true)) ||
      formatMessage({id: 'form.error.allPositiveNumber'}),
    validateTextInputArrayAltInteger: (value) =>
      (Array.isArray(value) &&
        value.length &&
        value.reduce((accumulatedValue, el) => {
          if (isNumberInteger(el?.data)) {
            return accumulatedValue;
          } else {
            return false;
          }
        }, true)) ||
      formatMessage({id: 'form.error.allNumberInteger'}),
  };
};
