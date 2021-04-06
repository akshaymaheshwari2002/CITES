import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required, validateNumber} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.selectSpecies'}),
      placeholder: formatMessage({id: 'form.label.selectSpecies'}),
      name: '_id',
      rules: {required},
      fieldType: Constants.PICKER,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      ...fieldProps._id,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.totalSpecimen',
      }),
      placeholder: formatMessage({
        id: 'form.label.numberPlaceHolder',
      }),
      name: 'numberOfSpecimen',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      placeholder: formatMessage({id: 'form.label.numberPlaceHolder'}),
      name: 'numberOfBreedingAdults',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.specimenExported'}),
      placeholder: formatMessage({id: 'form.label.numberPlaceHolder'}),
      name: 'numberOfSpeciemenExportedSinceLastInspection',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
      labelBottom: formatMessage({
        id: 'form.label.specimenBottom',
      }),
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCode'}),
      placeholder: formatMessage({id: 'form.placeholder.sourceCode'}),
      name: 'sourceCodeOfPreviousExport',
      rules: {
        required,
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
