import {s} from 'react-native-size-matters';

import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';
import {RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import {store} from '@store';
import {getHelpTexts} from '@utils/CommonFunctions';

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
      label: formatMessage({
        id: 'form.ProductionCapacityCalculator.label.countTotalBreedingFemale',
      }),
      placeholder:
        modeSelected === 2
          ? '0'
          : formatMessage({
              id: 'form.placeHolder.number',
            }),
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
        store.dispatch(setHelpText(getHelpTexts().countTotalBreedingFemale));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id:
          'form.ProductionCapacityCalculator.label.percentageBreedingFemalePerSeason',
      }),
      placeholder: formatMessage({
        id:
          'form.ProductionCapacityCalculator.placeholder.percentageBreedingFemalePerSeason',
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
        store.dispatch(
          setHelpText(getHelpTexts().percentageBreedingFemalePerSeason),
        );
      },
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.ProductionCapacityCalculator.label.countLitterPerYear',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
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
        store.dispatch(setHelpText(getHelpTexts().countLitterPerYear));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.ProductionCapacityCalculator.label.countOffspringPerLitter',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
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
        store.dispatch(setHelpText(getHelpTexts().countOffspringPerLitter));
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id:
          'form.ProductionCapacityCalculator.label.percentageSurvivingInTwoWeek',
      }),
      placeholder: formatMessage({
        id:
          'form.ProductionCapacityCalculator.placeholder.percentageSurvivingInTwoWeek',
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
        store.dispatch(
          setHelpText(getHelpTexts().percentageSurvivingInTwoWeek),
        );
      },
      keyboardType: 'decimal-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id:
          'form.ProductionCapacityCalculator.label.approximateYoungProducedPerYear',
      }),
      placeholder: modeSelected === 1 ? '0' : '0',
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
        store.dispatch(
          setHelpText(getHelpTexts().approximateYoungProducedPerYear),
        );
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
