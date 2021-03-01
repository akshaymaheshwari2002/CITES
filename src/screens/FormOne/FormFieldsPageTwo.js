import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.selectSpecies'}),
      placeholder: formatMessage({id: 'form.label.selectSpecies'}),
      name: 'speciesId',
      rules: {required},
      fieldType: Constants.PICKER,
      ...fieldProps.speciesId,
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
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      placeholder: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      name: 'numberOfBreedingAdults',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.specimenExported'}),
      placeholder: formatMessage({id: 'form.label.specimenExported'}),
      name: 'numberOfSpeciemenExportedSinceLastInspection',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCode'}),
      placeholder: formatMessage({id: 'form.label.sourceCode'}),
      name: 'sourceCodeOfPreviousExport',
      rules: {required},
    },
  ];
};
