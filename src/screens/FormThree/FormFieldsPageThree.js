import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      label: formatMessage({id: 'form.label.ranchSpecies'}),
      name: 'ranchSpecies',
      rules: {required},
      fieldType: Constants.CHOICELIST,
      mode: 'radio-button',
      items: [
        {
          content: formatMessage({id: 'form.label.yes'}),
          name: Constants.YES,
        },
        {
          content: formatMessage({id: 'form.label.no'}),
          name: Constants.NO,
        },
      ],
    },
    {
      label: formatMessage({id: 'form.label.stageHarvested'}),
      placeholder: formatMessage({id: 'form.label.stageHarvested'}),
      name: 'stageHarvested',
      rules: {required},
      fieldType: Constants.PICKER,
      count: 1,
      pickerText: formatMessage({id: 'button.addLifeStage'}),
    },
    {
      label: formatMessage({id: 'form.label.numberHarvestedPreviousYear'}),
      placeholder: formatMessage({
        id: 'form.label.numberHarvestedPreviousYear',
      }),
      name: 'numberHarvestedPreviousYear',
      rules: {required},
      fieldType: Constants.PICKER,
      count: 1,
      pickerText: formatMessage({id: 'button.addLifeStage'}),
    },
  ];
};
