import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfAdults'}),
      placeholder: formatMessage({id: 'form.label.numberOfAdults'}),
      name: 'numberOfAdultsFacility information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({id: 'form.label.numberOfAdults'}),
      name: 'numberOfAdultsInspection information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfMales'}),
      placeholder: formatMessage({id: 'form.label.numberOfMales'}),
      name: 'numberOfMalesFacility information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({id: 'form.label.numberOfMales'}),
      name: 'numberOfMalesInspection information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.numberOfFemales'}),
      placeholder: formatMessage({
        id: 'form.label.numberOfFemales',
      }),
      name: 'numberOfFemalesFacility information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      placeholder: formatMessage({id: 'form.label.numberOfFemales'}),
      name: 'numberOfFemalesInspection information',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.percentageFemalesBreed'}),
      placeholder: formatMessage({
        id: 'form.label.percentageFemalesBreed',
      }),
      name: 'percentageFemalesBreed',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      label: formatMessage({id: 'form.label.feedAdults'}),
      placeholder: formatMessage({
        id: 'form.label.feedAdults',
      }),
      name: 'feedAdults',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addFood'}),
    },
  ];
};
