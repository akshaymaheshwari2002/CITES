import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = getIntl();
  const {
    required,
    validateNumber,
    validatePositiveNumber,
    validateInteger,
  } = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormThree.label.selectSpeciesForm3'}),
      placeholder: formatMessage({
        id: 'form.FormThree.label.selectSpeciesForm3',
      }),
      name: '_id',
      rules: {required},
      fieldType: Constants.PICKER,
      ...fieldProps._id,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.dateFirstSpeciesAcquired',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.dateFirstSpeciesAcquired',
      }),
      name: 'dateFirstSpeciesAcquired',
      //rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.FormThree.label.dateFirstSpeciesAcquired',
      }),
      fieldType: Constants.DATEPICKER,
      maximumDate: new Date(),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormThree.label.sourceCodeInitialStock'}),
      placeholder: formatMessage({
        id: 'form.FormThree.label.sourceCodeInitialStock',
      }),
      name: 'sourceCodeInitialStock',
      fieldType: Constants.PICKER,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      ...fieldProps._sourceCode,
      // rules: {
      //   required,
      //   maxLength: {
      //     value: 1,
      //     message: formatMessage({
      //       id: 'form.error.singleCharacterLimit',
      //     }),
      //   },
      //   pattern: {
      //     value: /^(D|I|U|X|W|C|F|O|A|R)$/,
      //     message: formatMessage({
      //       id: 'form.error.singleCharacterAllowed',
      //     }),
      //   },
      //  },
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.lifeStageOfInitialStock',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.lifeStageOfInitialStock',
      }),
      name: 'lifeStageOfInitialStock',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.numberOfMalesInitialStock',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'numberOfMalesInitialStock',
      rules: {
        // required,
        validate: {validateNumber, validatePositiveNumber, validateInteger},
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.numberOfFemalesInitialStock',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'numberOfFemalesInitialStock',
      rules: {
        // required,
        validate: {validateNumber, validatePositiveNumber, validateInteger},
      },
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({
        id: 'form.FormThree.label.additionalAnimalsAcquiredSinceInitialStock',
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
      label: formatMessage({
        id: 'form.FormThree.label.addressOfAdditionalStock',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.addressOfAdditionalStock',
      }),
      name: 'addressOfAdditionalStock',
      //rules: {required},
    },
  ];
};
