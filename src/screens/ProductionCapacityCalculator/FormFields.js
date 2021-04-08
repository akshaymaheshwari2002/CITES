import {s} from 'react-native-size-matters';

import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';
import {Fonts, RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import {store} from '@store';
import HelpText from '@utils/HelpTexts';

const resultFieldStyleProps = {
  fontWeight: 'bold',
  color: RawColors.black,
  borderWidth: 3,
  borderColor: RawColors.black,
};
const resultFieldLabelStyleProps = {
  fontWeight: 'bold',
};

export default ({modeSelected}) => {
  const {formatMessage} = getIntl();
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
          : formatMessage({id: 'form.placeholder.countTotalBreedingFemale'}),
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
      editable: modeSelected === 1,
      style:
        modeSelected === 2 ? resultFieldStyleProps : {color: RawColors.black},
      placeholderTextColor:
        modeSelected === 2 ? RawColors.black : RawColors.grey,
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
        id: 'form.placeholder.percentageBreedingFemalePerSeason',
      }),
      placeholderTextColor: RawColors.grey,
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
      placeholder: formatMessage({id: 'form.placeholder.countLitterPerYear'}),
      placeholderTextColor: RawColors.grey,
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
      placeholder: formatMessage({
        id: 'form.placeholder.countOffspringPerLitter',
      }),
      placeholderTextColor: RawColors.grey,
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
        id: 'form.placeholder.percentageSurvivingInTwoWeek',
      }),
      placeholderTextColor: RawColors.grey,
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
              id: 'form.placeholder.approximateYoungProducedPerYear',
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
      editable: modeSelected === 2,
      style:
        modeSelected === 1 ? resultFieldStyleProps : {color: RawColors.black},
      placeholderTextColor:
        modeSelected === 1 ? RawColors.black : RawColors.grey,
      labelStyle:
        modeSelected === 1
          ? resultFieldLabelStyleProps
          : {
              marginRight: s(33),
            },
    },
  ];
};
