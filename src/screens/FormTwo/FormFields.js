import {verticalScale} from 'react-native-size-matters';
import {getAllCountries} from 'react-native-country-picker-modal';

import {store} from '@store';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {setHelpText} from '@store/slices/sessionSlice';
import HelpTexts from '@utils/HelpTexts';

let countries;

(async () => {
  let _countries = await getAllCountries();
  _countries = _countries.map(({name}) => ({label: name, value: name}));

  countries = _countries;
})();

export default ({
  isAccessToVeterinaryServices,
  isAnimalKeptAtOtherLocation,
}) => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: {
        fullTimeStaffs: '0',
        partTimeStaffs: '0',
      },
      label: formatMessage({id: 'form.label.employmentHours'}),
      label_1: formatMessage({id: 'form.label.fullTime'}),
      label_2: formatMessage({id: 'form.label.partTime'}),
      name: 'staffHours',
      fieldType: Constants.COUNTER_PAIR,
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpTexts.staffCurrentAtFacility));
      },
      shouldChange: (value) => {
        if (typeof value === 'number' || typeof value === 'string') {
          return Number(value) >= 0;
        } else {
          return true;
        }
      },
    },
    {
      label: formatMessage({id: 'form.label.professionalVeterinaryServices'}),
      name: 'accessToVeterinaryServices',
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
      label: formatMessage({id: 'form.label.vetNameAndAddress'}),
      placeholder: formatMessage({id: 'form.placeholder.veterinarianName'}),
      name: 'veterinarianName',
      rules: isAccessToVeterinaryServices ? {required} : {},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      placeholder: formatMessage({id: 'form.placeholder.veterinarianAddress'}),
      defaultValue: '',
      name: 'veterinarianAddress',
      rules: isAccessToVeterinaryServices ? {required} : {},
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
      name: 'veterinarianCountry',
      rules: isAccessToVeterinaryServices ? {required} : {},
      fieldType: Constants.COUNTRY_PICKER,
      items: countries,
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.label.animalKeptAtOtherLocation'}),
      name: 'animalKeptAtOtherLocation',
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
      label: formatMessage({id: 'form.label.addressOfOtherAnimals'}),
      placeholder: formatMessage({id: 'form.label.addressOfOtherAnimals'}),
      name: 'addressOfOtherAnimals',
      rules: isAnimalKeptAtOtherLocation ? {required} : {},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'form.button.addAddress'}),
    },
  ];
};
