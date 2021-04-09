import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = getIntl();
  const {required, validateNumber} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.selectSpecies'}),
      placeholder: formatMessage({id: 'form.FormOne.label.selectSpecies'}),
      name: '_id',
      rules: {required},
      fieldType: Constants.PICKER,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      ...fieldProps._id,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormOne.label.totalSpecimen',
      }),
      placeholder: formatMessage({
        id: 'form.FormOne.label.numberPlaceHolder',
      }),
      name: 'numberOfSpecimen',
      rules: {
        // required,
        validate: {validateNumber},
      },
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.FormOne.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.noOfBreedingAdult'}),
      placeholder: formatMessage({id: 'form.FormOne.label.numberPlaceHolder'}),
      name: 'numberOfBreedingAdults',
      rules: {
        // required,
        validate: {validateNumber},
      },
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.FormOne.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.specimenExported'}),
      placeholder: formatMessage({id: 'form.FormOne.label.numberPlaceHolder'}),
      name: 'numberOfSpeciemenExportedSinceLastInspection',
      rules: {
        // required,
        validate: {validateNumber},
      },
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.FormOne.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.sourceCode'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.sourceCode'}),
      name: 'sourceCodeOfPreviousExport',
      rules: {
        // required,
        maxLength: {
          value: 1,
          message: formatMessage({id: 'form.error.singleCharacterLimit'}),
        },
        pattern: {
          value: /^(D|I|U|X|W|C|F|O|A|R)$/,
          message: formatMessage({id: 'form.error.singleCharacterAllowed'}),
        },
      },
    },
  ];
};
