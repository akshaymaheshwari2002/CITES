import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default () => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      label: formatMessage({id: 'form.label.breedSpecies'}),
      name: 'breedSpecies',
      rules: {required},
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
      label: formatMessage({id: 'form.label.whenBreedSpecies'}),
      placeholder: formatMessage({id: 'form.label.whenBreedSpecies'}),
      name: 'whenBreedSpecies',
      rules: {required},
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfClutches'}),
      placeholder: formatMessage({id: 'form.label.numberOfClutches'}),
      name: 'numberOfClutches',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfOffspring'}),
      placeholder: formatMessage({id: 'form.label.numberOfOffspring'}),
      name: 'numberOfOffspring',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberProducedPreviousYear'}),
      placeholder: formatMessage({id: 'form.label.numberProducedPreviousYear'}),
      name: 'numberProducedPreviousYear',
      rules: {required},
      keyboardType: 'number-pad',
    },
  ];
};
