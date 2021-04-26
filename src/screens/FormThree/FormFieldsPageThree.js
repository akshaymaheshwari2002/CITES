import {Platform} from 'react-native';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';


const lifeStageDropDownList = [
  {text: 'lifeStgeDropDownList.option1'},
  {text: 'lifeStgeDropDownList.option2'},
  {text: 'lifeStgeDropDownList.option3'},
  {text: 'lifeStgeDropDownList.option4'},
  {text: 'lifeStgeDropDownList.option5'},
  {text: 'lifeStgeDropDownList.option6'},
  {text: 'lifeStgeDropDownList.option7'},
  {text: 'lifeStgeDropDownList.option8'},
  {text: 'lifeStgeDropDownList.option9'},
  {text: 'lifeStgeDropDownList.option10'},
  {text: 'lifeStgeDropDownList.option11'},
  {text: 'lifeStgeDropDownList.option12'},
  {text: 'lifeStgeDropDownList.option13'},
  {text: 'lifeStgeDropDownList.option14'},
  {text: 'lifeStgeDropDownList.option15'},
  {text: 'lifeStgeDropDownList.option16'},
  {text: 'lifeStgeDropDownList.option17'},
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
      label: formatMessage({id: 'form.FormThree.label.doYouRanchThisSpecies'}),
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
      label: formatMessage({id: 'form.FormThree.label.lifeStageHarvested'}),
      placeholder: formatMessage({
        id: 'form.FormThree.label.lifeStageHarvested',
      }),
      name: 'lifeStageHarvested',
      //rules: {required},
      fieldType: Constants.PICKER,
      items: lifeStageDropDownList.map((value) => ({
        label: formatMessage({id: value.text}),
        value: formatMessage({id: value.text}),
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
        label: formatMessage({id: 'form.FormThree.label.AddLifeStage'}),
        placeholder: formatMessage({id: 'form.FormThree.label.AddLifeStage'}),
        name: 'otherLifeStage',
        //rules: {required},
      });
    }
    if (_lifeStageHarvestedCopy?.length) {
      formFields.push({
        label: formatMessage({
          id: 'form.FormThree.label.numberHarvestedInPreviousYear',
        }),
        name: 'numberHarvestedInPreviousYear',
        rules: {
          validate: {
            validateTextInputArrayAltNumber,
            validateTextInputArrayAltPositiveNumber,
            validateTextInputArrayAltInteger,
          },
        },
        fieldType: Constants.TEXTINPUT_ARRAY_ALT,
        ...Platform.select({ios: {fieldContainerStyle: {zIndex: -1}}}),
        keyboardType: 'number-pad',
      });
    }
  }
  return formFields;
};
