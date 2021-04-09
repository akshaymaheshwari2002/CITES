import {ms} from 'react-native-size-matters';

import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = getIntl();
  const {
    required,
    validateInteger,
    validateNumber,
    validateNumberPercentageNonFraction,
    validatePositiveNumber,
  } = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.noOfAdultsPresentFacilityInfo',
      }),
      labelRight: formatMessage({
        id: 'form.FormThree.label.facilityInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfAdultsPresentFacilityInfo',
      }),
      name: 'noOfAdultsPresentFacilityInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      defaultValue: '',
      labelRight: formatMessage({
        id: 'form.FormThree.label.inspectionInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfAdultsPresentFacilityInfo',
      }),
      name: 'noOfAdultsPresentInspectionInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.noOfMalesPresentFacilityInfo',
      }),
      labelRight: formatMessage({
        id: 'form.FormThree.label.facilityInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfMalesPresentFacilityInfo',
      }),
      name: 'noOfMalesPresentFacilityInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      defaultValue: '',
      labelRight: formatMessage({
        id: 'form.FormThree.label.inspectionInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfMalesPresentFacilityInfo',
      }),
      name: 'noOfMalesPresentInspectionInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.noOfFemalesPresentFacilityInfo',
      }),
      labelRight: formatMessage({
        id: 'form.FormThree.label.facilityInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfFemalesPresentFacilityInfo',
      }),
      name: 'noOfFemalesPresentFacilityInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      defaultValue: '',
      labelRight: formatMessage({
        id: 'form.FormThree.label.inspectionInformation',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.noOfFemalesPresentFacilityInfo',
      }),
      name: 'noOfFemalesPresentInspectionInfo',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 2},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.percentageOfFemalesBreedEachYear',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.percentageOfFemalesBreedEachYear',
      }),
      name: 'percentageOfFemalesBreedEachYear',
      rules: {
        required,
        validate: {
          validateNumber,
          validateNumberPercentageNonFraction,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.FormThree.label.foodFedToAdults'}),
      placeholder: formatMessage({
        id: 'form.FormThree.label.foodFedToAdults',
      }),
      name: 'foodFedToAdults',
      //rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addFood'}),
    },
  ];
};
