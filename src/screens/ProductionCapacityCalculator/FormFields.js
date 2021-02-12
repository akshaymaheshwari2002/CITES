import {
  isNumber,
  isNumberInteger,
  isNumberPercentageFraction,
  isNumberPositive,
} from '@utils/CommonFunctions';

export default ({formatMessage}) => {
  const required = formatMessage({id: 'form.error.fieldRequired'});
  const validateNumber = (value) =>
    isNumber(value) || formatMessage({id: 'form.error.number'});
  const validatePositiveNumber = (value) =>
    isNumberPositive(value) || formatMessage({id: 'form.error.positiveNumber'});
  const validateInteger = (value) =>
    isNumberInteger(value) || formatMessage({id: 'form.error.numberInteger'});
  const validateNumberPercentageFraction = (value) =>
    isNumberPercentageFraction(value) ||
    formatMessage({id: 'form.error.numberPercentageFraction'});

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.countTotalBreedingFemale'}),
      name: 'countTotalBreedingFemale',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.percentageBreedingFemalePerSeason',
      }),
      name: 'percentageBreedingFemalePerSeason',
      rules: {
        required,
        validate: {
          validateNumber,
          validateNumberPercentageFraction,
        },
      },
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.countLitterPerYear'}),
      name: 'countLitterPerYear',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.countOffspringPerLitter'}),
      name: 'countOffspringPerLitter',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.percentageSurvivingInTwoWeek'}),
      name: 'percentageSurvivingInTwoWeek',
      rules: {
        required,
        validate: {
          validateNumber,
          validateNumberPercentageFraction,
        },
      },
      keyboardType: 'decimal-pad',
    },
    {
      label: formatMessage({
        id: 'form.label.approximateYoungProducedPerYear',
      }),
      name: 'approximateYoungProducedPerYear',
      editable: false,
    },
  ];
};
