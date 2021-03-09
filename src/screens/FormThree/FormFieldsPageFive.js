import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.noOfJuvenilesPresentFacilityInfo'}),
      placeholder: formatMessage({
        id: 'form.label.noOfJuvenilesPresentFacilityInfo',
      }),
      name: 'noOfJuvenilesPresentFacilityInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({
        id: 'form.label.noOfJuvenilesPresentFacilityInfo',
      }),
      name: 'noOfJuvenilesPresentInspectionInfo',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.ageAtSexualMaturity'}),
      placeholder: formatMessage({id: 'form.label.ageAtSexualMaturity'}),
      name: 'ageAtSexualMaturity',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.sizeOrMassAtSexualMaturity'}),
      placeholder: formatMessage({
        id: 'form.label.sizeOrMassAtSexualMaturity',
      }),
      name: 'sizeOrMassAtSexualMaturity',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.approxSizeAtSale'}),
      placeholder: formatMessage({
        id: 'form.label.sizeOrMassAtSaleOrExport',
      }),
      name: 'sizeOrMassAtSaleOrExport',
      rules: {required},
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
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.label.foodFedToRearingAndJuveniles'}),
      placeholder: formatMessage({
        id: 'form.label.foodFedToRearingAndJuveniles',
      }),
      name: 'foodFedToRearingAndJuveniles',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
    },
  ];
};
