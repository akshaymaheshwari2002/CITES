import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {
    required,
    validateNumber,
    validatePositiveNumber,
    validateInteger,
  } = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.selectSpeciesForm3'}),
      placeholder: formatMessage({id: 'form.label.selectSpeciesForm3'}),
      name: '_id',
      rules: {required},
      fieldType: Constants.PICKER,
      ...fieldProps._id,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateFirstSpeciesAcquired'}),
      placeholder: formatMessage({id: 'form.label.dateFirstSpeciesAcquired'}),
      name: 'dateFirstSpeciesAcquired',
      //rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.label.dateFirstSpeciesAcquired',
      }),
      fieldType: Constants.DATEPICKER,
      maximumDate: new Date(),
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
          message: formatMessage({id: 'form.error.singleCharacterLimit'}),
        },
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.lifeStageOfInitialStock'}),
      placeholder: formatMessage({id: 'form.label.lifeStageOfInitialStock'}),
      name: 'lifeStageOfInitialStock',
      //rules: {required},
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfMalesInitialStock'}),
      placeholder: formatMessage({id: 'form.label.numberOfMalesInitialStock'}),
      name: 'numberOfMalesInitialStock',
      rules: {
        required,
        validate: {validateNumber, validatePositiveNumber, validateInteger},
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfFemalesInitialStock'}),
      placeholder: formatMessage({
        id: 'form.label.numberOfFemalesInitialStock',
      }),
      name: 'numberOfFemalesInitialStock',
      rules: {
        required,
        validate: {validateNumber, validatePositiveNumber, validateInteger},
      },
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({
        id: 'form.label.additionalAnimalsAcquiredSinceInitialStock',
      }),
      name: 'additionalAnimalsAcquiredSinceInitialStock',
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
      label: formatMessage({id: 'form.label.addressOfAdditionalStock'}),
      placeholder: formatMessage({id: 'form.label.addressOfAdditionalStock'}),
      name: 'addressOfAdditionalStock',
      //rules: {required},
    },
  ];
};
