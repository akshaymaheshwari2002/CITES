import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default () => {
  const {formatMessage} = createIntl();
  const {
    required,
    validateInteger,
    validateNumber,
    validateNumberPercentageFraction,
    validatePositiveNumber,
  } = getValidators();

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
