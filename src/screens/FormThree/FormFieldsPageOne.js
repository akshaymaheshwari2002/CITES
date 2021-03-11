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
      name: '_id',
      rules: {required},
      fieldType: Constants.PICKER,
      fieldContainerStyle: {zIndex: 1},
      ...fieldProps._id,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateFirstSpeciesAcquired'}),
      placeholder: formatMessage({id: 'form.label.dateFirstSpeciesAcquired'}),
      name: 'dateFirstSpeciesAcquired',
      rules: {required},
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCodeInitialStock'}),
      placeholder: formatMessage({id: 'form.label.sourceCodeInitialStock'}),
      name: 'sourceCodeInitialStock',
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
      label: formatMessage({id: 'form.label.lifeStageOfInitialStock'}),
      placeholder: formatMessage({id: 'form.label.lifeStageOfInitialStock'}),
      name: 'lifeStageOfInitialStock',
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
      label: formatMessage({
        id: 'form.label.additionalAnimalsAcquiredSinceInitialStock',
      }),
      name: 'additionalAnimalsAcquiredSinceInitialStock',
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
      label: formatMessage({id: 'form.label.addressOfAdditionalStock'}),
      placeholder: formatMessage({id: 'form.label.addressOfAdditionalStock'}),
      name: 'addressOfAdditionalStock',
      rules: {required},
    },
  ];
};
