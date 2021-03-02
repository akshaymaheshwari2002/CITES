import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import {store} from '@store';
import HelpText from '@utils/HelpTexts';

const resultFieldStyleProps = {
  fontWeight: 'bold',
  color: RawColors.brightRed,
  borderWidth: 3,
  borderColor: RawColors.black,
};
const resultFieldLabelStyleProps = {
  fontWeight: 'bold',
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
      placeholder:
        modeSelected === 2
          ? '0'
          : formatMessage({id: 'form.label.countTotalBreedingFemale'}),
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
      editable: !modeSelected === 2,
      style: modeSelected === 2 ? resultFieldStyleProps : undefined,
      placeholderTextColor: modeSelected === 2 ? RawColors.black : undefined,
      labelStyle: modeSelected === 2 ? resultFieldLabelStyleProps : undefined,
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.countTotalBreedingFemale));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.percentageBreedingFemalePerSeason',
      }),
      placeholder: formatMessage({
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
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.percentageBreedingFemalePerSeason));
      },
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.countLitterPerYear'}),
      placeholder: formatMessage({id: 'form.label.countLitterPerYear'}),
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
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.countLitterPerYear));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.countOffspringPerLitter'}),
      placeholder: formatMessage({id: 'form.label.countOffspringPerLitter'}),
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
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.countOffspringPerLitter));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.percentageSurvivingInTwoWeek'}),
      placeholder: formatMessage({
        id: 'form.label.percentageSurvivingInTwoWeek',
      }),
      name: 'percentageSurvivingInTwoWeek',
      rules: {
        required,
        validate: {
          validateNumber,
          validateNumberPercentageFraction,
        },
      },
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.percentageSurvivingInTwoWeek));
      },
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.approximateYoungProducedPerYear',
      }),
      placeholder:
        modeSelected === 1
          ? '0'
          : formatMessage({
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
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpText.approximateYoungProducedPerYear));
      },
      keyboardType: 'number-pad',
      editable: !modeSelected === 1,
      style: modeSelected === 1 ? resultFieldStyleProps : undefined,
      placeholderTextColor: modeSelected === 1 ? RawColors.black : undefined,
      labelStyle: modeSelected === 1 ? resultFieldLabelStyleProps : undefined,
    },
  ];
};
