import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.selectSpeciesForm3'}),
      placeholder: formatMessage({id: 'form.label.selectSpeciesForm3'}),
      name: 'speciesId',
      rules: {required},
      fieldType: Constants.PICKER,
      ...fieldProps.speciesId,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateSpecies'}),
      placeholder: formatMessage({id: 'form.label.dateSpecies'}),
      name: 'dateSpecies',
      rules: {required},
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCodeInitiaStock'}),
      placeholder: formatMessage({id: 'form.label.sourceCodeInitiaStock'}),
      name: 'sourceCodeInitiaStock',
      rules: {
        required,
        maxLength: {
          value: 1,
          message: formatMessage({id: 'form.error.singleCharacter'}),
        },
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.initialStock'}),
      placeholder: formatMessage({id: 'form.label.initialStock'}),
      name: 'initialStock',
      rules: {required},
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfMalesInitialStock'}),
      placeholder: formatMessage({id: 'form.label.numberOfMalesInitialStock'}),
      name: 'numberOfMalesInitialStock',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfFemalesInitialStock'}),
      placeholder: formatMessage({
        id: 'form.label.numberOfFemalesInitialStock',
      }),
      name: 'numberOfFemalesInitialStock',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.label.additionalAnimals'}),
      name: 'additionalAnimals',
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
      label: formatMessage({id: 'form.label.stockObtained'}),
      placeholder: formatMessage({id: 'form.label.stockObtained'}),
      name: 'stockObtained',
      rules: {required},
    },
  ];
};
