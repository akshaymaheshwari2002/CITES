import {ms} from 'react-native-size-matters';

import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
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
      label: formatMessage({id: 'form.label.noOfJuvenilesPresentFacilityInfo'}),
      labelRight: formatMessage({
        id: 'form.label.facilityInformation',
      }),
      placeholder: formatMessage({
        id: 'form.label.noOfJuvenilesPresentFacilityInfo',
      }),
      name: 'noOfJuvenilesPresentFacilityInfo',
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
        id: 'form.label.inspectionInformation',
      }),
      placeholder: formatMessage({
        id: 'form.label.noOfJuvenilesPresentFacilityInfo',
      }),
      name: 'noOfJuvenilesPresentInspectionInfo',
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
      label: formatMessage({id: 'form.label.ageAtSexualMaturity'}),
      placeholder: formatMessage({id: 'form.label.ageAtSexualMaturity'}),
      name: 'ageAtSexualMaturity',
      rules: {
        required,
        validate: {
          validateNumber,
          validatePositiveNumber,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sizeOrMassAtSexualMaturity'}),
      placeholder: formatMessage({
        id: 'form.label.sizeOrMassAtSexualMaturity',
      }),
      name: 'sizeOrMassAtSexualMaturity',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sizeOrMassAtSaleOrExport'}),
      placeholder: formatMessage({
        id: 'form.label.sizeOrMassAtSaleOrExport',
      }),
      name: 'sizeOrMassAtSaleOrExport',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.percentageOfJuvenilesSurviveBeyond2Weeks',
      }),
      placeholder: formatMessage({
        id: 'form.label.percentageOfJuvenilesSurviveBeyond2Weeks',
      }),
      name: 'percentageOfJuvenilesSurviveBeyond2Weeks',
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
      defaultValue: '',
      label: formatMessage({id: 'form.label.foodFedToRearingAndJuveniles'}),
      placeholder: formatMessage({
        id: 'form.label.foodFedToRearingAndJuveniles',
      }),
      name: 'foodFedToRearingAndJuveniles',
      //rules: {required},
    },
  ];
};
