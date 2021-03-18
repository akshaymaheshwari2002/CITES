import {
  isNumber,
  isNumberInteger,
  isNumberPercentage,
  isNumberPercentageFraction,
  isNumberPositive,
} from '@utils/CommonFunctions';
import createIntl from '@utils/Intl';
// A - BR - 001;

const regexPhone = /^[1-9]+[0-9]*$/;
const regexBreedingCode = /^[A-Z]-[A-Z][A-Z]-[0-9][0-9][0-9]$/;

export default () => {
  const {formatMessage} = createIntl();

  return {
    required: formatMessage({id: 'form.error.fieldRequired'}),
    requiredMobileInput: (value) =>
      value?.contactNumber
        ? true
        : formatMessage({id: 'form.error.fieldRequired'}),
    validateNumber: (value) =>
      isNumber(value) || formatMessage({id: 'form.error.number'}),
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
      regexPhone.test(value?.contactNumber)
        ? true
        : formatMessage({id: 'form.error.invalidPhone'}),
    validBreedingCode: (value) => {
      return regexBreedingCode.test(value.join().replace(/,/g, ''))
        ? true
        : formatMessage({id: 'form.error.invalidBreedingCode'});
    },
  };
};
