import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfAdultsPresentFacilityInfo'}),
      placeholder: formatMessage({
        id: 'form.label.noOfAdultsPresentFacilityInfo',
      }),
      name: 'noOfAdultsPresentFacilityInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({
        id: 'form.label.noOfAdultsPresentFacilityInfo',
      }),
      name: 'noOfAdultsPresentInspectionInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfMalesPresentFacilityInfo'}),
      placeholder: formatMessage({
        id: 'form.label.noOfMalesPresentFacilityInfo',
      }),
      name: 'noOfMalesPresentFacilityInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({
        id: 'form.label.noOfMalesPresentFacilityInfo',
      }),
      name: 'noOfMalesPresentInspectionInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfFemalesPresentFacilityInfo'}),
      placeholder: formatMessage({
        id: 'form.label.noOfFemalesPresentFacilityInfo',
      }),
      name: 'noOfFemalesPresentFacilityInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({
        id: 'form.label.noOfFemalesPresentFacilityInfo',
      }),
      name: 'noOfFemalesPresentInspectionInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.percentageOfFemalesBreedEachYear'}),
      placeholder: formatMessage({
        id: 'form.label.percentageOfFemalesBreedEachYear',
      }),
      name: 'percentageOfFemalesBreedEachYear',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.label.foodFedToAdults'}),
      placeholder: formatMessage({
        id: 'form.label.foodFedToAdults',
      }),
      name: 'foodFedToAdults',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addFood'}),
    },
  ];
};
