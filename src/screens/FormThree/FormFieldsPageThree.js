import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';

export default (fieldProps = {}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      label: formatMessage({id: 'form.label.doYouRanchThisSpecies'}),
      name: 'doYouRanchThisSpecies',
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
      label: formatMessage({id: 'form.label.lifeStageHarvested'}),
      placeholder: formatMessage({id: 'form.label.lifeStageHarvested'}),
      name: 'lifeStageHarvested',
      rules: {required},
      fieldType: Constants.PICKER,
      count: 1,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      pickerText: formatMessage({id: 'button.addLifeStage'}),
    },
    {
      label: formatMessage({id: 'form.label.numberHarvestedInPreviousYear'}),
      placeholder: formatMessage({
        id: 'form.label.numberHarvestedInPreviousYear',
      }),
      name: 'numberHarvestedInPreviousYear',
      rules: {required},
      fieldType: Constants.PICKER,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      count: 1,
      pickerText: formatMessage({id: 'button.addLifeStage'}),
    },
  ];
};
