import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default () => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      label: formatMessage({id: 'form.label.doYouBreedThisSpecies'}),
      name: 'doYouBreedThisSpecies',
      //rules: {required},
      fieldType: Constants.CHOICELIST,
      mode: 'radio-button',
      items: [
        {
          content: formatMessage({id: 'form.label.yes'}),
          name: Constants.YES,
        },
        {
          content: formatMessage({id: 'form.label.no'}),
          name: Constants.NO,
        },
      ],
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.whenDidYouBreedThisSpecies'}),
      placeholder: formatMessage({id: 'form.label.whenDidYouBreedThisSpecies'}),
      name: 'whenDidYouBreedThisSpecies',
      //rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.label.whenDidYouBreedThisSpecies',
      }),
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfLittersPerYear'}),
      placeholder: formatMessage({id: 'form.label.numberOfLittersPerYear'}),
      name: 'numberOfLittersPerYear',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfOffspringPerLitter'}),
      placeholder: formatMessage({id: 'form.label.numberOfOffspringPerLitter'}),
      name: 'numberOfOffspringPerLitter',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberProducedInPreviousYear'}),
      placeholder: formatMessage({
        id: 'form.label.numberProducedInPreviousYear',
      }),
      name: 'numberProducedInPreviousYear',
      //rules: {required},
      keyboardType: 'number-pad',
    },
  ];
};
