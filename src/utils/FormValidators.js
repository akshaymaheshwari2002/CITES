import {
  isNumber,
  isNumberInteger,
  isNumberPercentageFraction,
  isNumberPositive,
} from '@utils/CommonFunctions';
import createIntl from '@utils/Intl';

export default () => {
  const {formatMessage} = createIntl();

  return {
    required: formatMessage({id: 'form.error.fieldRequired'}),
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
  };
};
