import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfJuveniles'}),
      placeholder: formatMessage({id: 'form.label.numberOfJuveniles'}),
      name: 'numberOfJuvenilesFacility information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({id: 'form.label.numberOfJuveniles'}),
      name: 'numberOfJuvenilesInspection information',
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
      label: formatMessage({id: 'form.label.sizeAtSexualMaturity'}),
      placeholder: formatMessage({
        id: 'form.label.sizeAtSexualMaturity',
      }),
      name: 'sizeAtSexualMaturity',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.approxSizeAtSale'}),
      placeholder: formatMessage({
        id: 'form.label.approxSizeAtSale',
      }),
      name: 'approxSizeAtSale',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.percentageJuvenilesSurvive'}),
      placeholder: formatMessage({
        id: 'form.label.percentageJuvenilesSurvive',
      }),
      name: 'percentageJuvenilesSurvive',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.label.feedJuveniles'}),
      placeholder: formatMessage({
        id: 'form.label.feedJuveniles',
      }),
      name: 'feedJuveniles',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
    },
  ];
};
