import {verticalScale} from 'react-native-size-matters';

import {store} from '@store';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {setHelpText} from '@store/slices/sessionSlice';
import HelpTexts from '@utils/HelpTexts';

export default () => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.fullTime'}),
      placeholder: formatMessage({id: 'form.label.fullTime'}),
      name: 'fullTime',
      rules: {required},
      fieldType: Constants.COUNTER,
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpTexts.staffCurrentAtFacility));
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.partTime'}),
      placeholder: formatMessage({id: 'form.label.partTime'}),
      name: 'partTime',
      rules: {required},
      fieldType: Constants.COUNTER,
    },
    {
      label: formatMessage({id: 'form.label.professionalVeterinaryServices'}),
      name: 'professionalVeterinaryServices',
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
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpTexts.professionalVeterinaryServices));
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.vetAddress'}),
      placeholder: formatMessage({id: 'form.placeholder.addressLineOne'}),
      name: 'vetAddressLineOne',
      rules: {required},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      placeholder: formatMessage({id: 'form.placeholder.addressLineTwo'}),
      defaultValue: '',
      name: 'vetAddressLineTwo',
      rules: {required},
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      placeholder: formatMessage({id: 'form.placeholder.country'}),
      defaultValue: '',
      name: 'country',
      rules: {required},
    },
    {
      label: formatMessage({id: 'form.label.animalsOtherLocation'}),
      name: 'animalsOtherLocation',
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
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpTexts.animalsOtherLocation));
      },
    },
    {
      label: formatMessage({id: 'form.label.otherAddressLocation'}),
      placeholder: formatMessage({id: 'form.label.otherAddressLocation'}),
      name: 'otherAddressLocation',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addSpecies'}),
    },
  ];
};
