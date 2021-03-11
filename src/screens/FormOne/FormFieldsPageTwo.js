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
      fieldContainerStyle: {zIndex: 1},
      ...fieldProps._id,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.totalSpecimen',
      }),
      placeholder: formatMessage({
        id: 'form.label.totalSpecimen',
      }),
      name: 'numberOfSpecimen',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      placeholder: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      name: 'numberOfBreedingAdults',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.specimenExported'}),
      placeholder: formatMessage({id: 'form.label.specimenExported'}),
      name: 'numberOfSpeciemenExportedSinceLastInspection',
      rules: {required, validate: {validateNumber}},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCode'}),
      placeholder: formatMessage({id: 'form.label.sourceCode'}),
      name: 'sourceCodeOfPreviousExport',
      rules: {
        required,
        maxLength: {
          value: 1,
          message: formatMessage({id: 'form.error.singleCharacter'}),
        },
      },
    },
  ];
};
