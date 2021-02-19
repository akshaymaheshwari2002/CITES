import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {RawColors} from '@styles/Themes';

const resultFieldStyleProps = {
  fontWeight: 'bold',
  borderWidth: 2,
  color: RawColors.black,
};

export default ({modeSelected}) => {
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
      rules:
        modeSelected === 1
          ? {
              required,
              validate: {
                validateNumber,
                validatePositiveNumber,
                validateInteger,
              },
            }
          : {},
      style:
        modeSelected === 2 ? resultFieldStyleProps : {color: RawColors.black},
      showHelpIcon: true,
      editable: modeSelected === 1,
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
      showHelpIcon: true,
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
      showHelpIcon: true,
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
      showHelpIcon: true,
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
      showHelpIcon: true,
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.approximateYoungProducedPerYear',
      }),
      name: 'approximateYoungProducedPerYear',
      rules:
        modeSelected === 2
          ? {
              required,
              validate: {
                validateNumber,
                validatePositiveNumber,
                validateInteger,
              },
            }
          : {},
      showHelpIcon: true,
      keyboardType: 'number-pad',
      editable: modeSelected === 2,
      style:
        modeSelected === 1 ? resultFieldStyleProps : {color: RawColors.black},
    },
  ];
};
