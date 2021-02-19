import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default () => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.selectSpecies'}),
      name: 'name',
      rules: {required},
      fieldType: Constants.PICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.totalSpecimen',
      }),
      name: 'numberOfSpecimen',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfBreedingAdult'}),
      name: 'numberOfBreedingAdults',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.specimenExported'}),
      name: 'numberOfSpeciemenExportedSinceLastInspection',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sourceCode'}),
      name: 'sourceCodeOfPreviousExport',
      rules: {required},
    },
  ];
};
