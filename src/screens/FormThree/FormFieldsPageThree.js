import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';

const lifeStageDropDownList = [
  'Adult',
  'Juvenile',
  'Egg',
  'Fledgling',
  'Chick',
  'Hatchling',
  'Owlet',
  'Fry',
  'Lavae',
  'Pupa',
  'Pup',
  'Spiderling',
  'Nymph',
  'Tadpole',
  'Froglet',
  'Chrysalis',
  'Other',
];

export default (fieldProps = {}) => {
  const {formatMessage} = getIntl();
  const {
    required,
    requiredTextInputArrayAlt,
    validateTextInputArrayAltNumber,
    validateTextInputArrayAltPositiveNumber,
    validateTextInputArrayAltInteger,
  } = getValidators();

  const formFields = [
    {
      label: formatMessage({id: 'form.label.doYouRanchThisSpecies'}),
      name: 'doYouRanchThisSpecies',
      //rules: {required},
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
      //rules: {required},
      fieldType: Constants.PICKER,
      items: lifeStageDropDownList.map((value) => ({
        label: value,
        value: value,
      })),
      multiple: true,
      ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      ...fieldProps.lifeStageHarvested,
    },
  ];
  if (fieldProps?._lifeStageHarvested?.length) {
    const _lifeStageHarvestedCopy = [
      ...(fieldProps?._lifeStageHarvested ?? []),
    ];
    const indexOfOther = _lifeStageHarvestedCopy?.findIndex(
      (value) => value?.toLowerCase() === 'other',
    );
    if (indexOfOther !== -1) {
      formFields.push({
        defaultValue: '',
        label: formatMessage({id: 'form.label.AddLifeStage'}),
        placeholder: formatMessage({id: 'form.label.AddLifeStage'}),
        name: 'otherLifeStage',
        //rules: {required},
      });
    }
    if (_lifeStageHarvestedCopy?.length) {
      formFields.push({
        label: formatMessage({id: 'form.label.numberHarvestedInPreviousYear'}),
        name: 'numberHarvestedInPreviousYear',
        rules: {
          validate: {
            requiredTextInputArrayAlt,
            validateTextInputArrayAltNumber,
            validateTextInputArrayAltPositiveNumber,
            validateTextInputArrayAltInteger,
          },
        },
        fieldType: Constants.TEXTINPUT_ARRAY_ALT,
        ...Platform.select({ios: {fieldContainerStyle: {zIndex: 1}}}),
      });
    }
  }
  return formFields;
};
