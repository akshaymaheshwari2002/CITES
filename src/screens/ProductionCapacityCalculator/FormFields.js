import {useDispatch} from 'react-redux';

import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';

const resultFieldStyleProps = {
  fontWeight: 'bold',
  color: RawColors.black,
  borderWidth: 3,
  borderColor: RawColors.black,
};
const resultFieldLabelStyleProps = {
  fontWeight: 'bold',
};

const helpText = {
  countTotalBreedingFemale: [
    'Number # of breeding females',
    'The total number of breeding females observed or claimed to be at the facility. Enter as a whole number.',
    'For example, 50.',
  ],
  percentageBreedingFemalePerSeason: [
    'Mean percentage % of females breeding per season',
    'The mean percentage (proportion) of females producing a clutch or litter per year. This information can be supplied by the facility, but should be confirmed using reliable external sources.',
    'For example, enter 70% enter as 0.7.',
  ],
  countLitterPerYear: [
    'Mean number # of litters / clutches per year',
    'The mean number of litters or clutches produced by females per year. This information can be supplied by the facility, but should be confirmed using reliable external sources.',
    'For example, enter as a whole number, such as 2.',
  ],
  countOffspringPerLitter: [
    'Mean number # of offspring / eggs in litter / clutch',
    'This information can be supplied by the facility, but should be confirmed using reliable external sources.',
    'For example, enter as a whole number, such as 20.',
  ],
  percentageSurvivingInTwoWeek: [
    'Mean percentage % of surviving after two weeks',
    'The mean number of eggs or live offspring produced that survive two weeks after hatching or birth. Enter as a percentage (of offspring surviving).',
    'For example, enter 80% as 0.8.',
  ],
  approximateYoungProducedPerYear: [
    'Number # of young per year at the facility inspected',
    'The estimated number of offspring the observed or claimed number of female stock can produce each year.',
  ],
};

export default ({modeSelected}) => {
  const dispatch = useDispatch();
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
      style: modeSelected === 2 ? resultFieldStyleProps : undefined,
      placeholderTextColor:
        modeSelected === 2 ? RawColors.black : RawColors.grey,
      labelStyle: modeSelected === 2 ? resultFieldLabelStyleProps : undefined,
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.countTotalBreedingFemale));
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
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.percentageBreedingFemalePerSeason));
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
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.countLitterPerYear));
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
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.countOffspringPerLitter));
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
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.percentageSurvivingInTwoWeek));
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
      showFieldHelpIcon: true,
      onFieldHelpIconPress: () => {
        dispatch(setHelpText(helpText.approximateYoungProducedPerYear));
      },
      keyboardType: 'number-pad',
      editable: modeSelected === 2,
      style: modeSelected === 1 ? resultFieldStyleProps : undefined,
      placeholderTextColor:
        modeSelected === 1 ? RawColors.black : RawColors.grey,
      labelStyle: modeSelected === 1 ? resultFieldLabelStyleProps : undefined,
    },
  ];
};
