import React from 'react';
import {TouchableOpacity, Text, Linking, Platform} from 'react-native';
import {s, verticalScale} from 'react-native-size-matters';
import {getAllCountries} from 'react-native-country-picker-modal';

import {store} from '@store';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';
import {setHelpText} from '@store/slices/sessionSlice';
import {getHelpTexts} from '@utils/CommonFunctions';
import {Fonts} from '@styles/Themes';

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
  const {formatMessage} = getIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: {
        fullTimeStaffs: '0',
        partTimeStaffs: '0',
      },
      label: formatMessage({id: 'form.FormTwo.label.employmentHours'}),
      label_1: formatMessage({id: 'form.FormTwo.label.fullTime'}),
      label_2: formatMessage({id: 'form.FormTwo.label.partTime'}),
      name: 'staffHours',
      fieldType: Constants.COUNTER_PAIR,
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(getHelpTexts().staffCurrentAtFacility));
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
      label: formatMessage({
        id: 'form.FormTwo.label.professionalVeterinaryServices',
      }),
      name: 'accessToVeterinaryServices',
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
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(
          setHelpText(getHelpTexts().professionalVeterinaryServices),
        );
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormTwo.label.vetNameAndAddress'}),
      placeholder: formatMessage({
        id: 'form.FormTwo.placeholder.veterinarianName',
      }),
      name: 'veterinarianName',
      labelStyle: {marginRight: s(80)},
      //rules: isAccessToVeterinaryServices ? {required} : {},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      placeholder: formatMessage({
        id: 'form.FormTwo.placeholder.veterinarianAddress',
      }),
      defaultValue: '',
      name: 'veterinarianAddress',
      //rules: isAccessToVeterinaryServices ? {required} : {},
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      placeholder: formatMessage({id: 'form.FormTwo.placeholder.country'}),
      defaultValue: '',
      name: 'veterinarianCountry',
      //rules: isAccessToVeterinaryServices ? {required} : {},
      fieldType: Constants.COUNTRY_PICKER,
      items: countries,
      fieldContainerStyle: {marginTop: 7},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({
        id: 'form.FormTwo.label.animalKeptAtOtherLocation',
      }),
      name: 'animalKeptAtOtherLocation',
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
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(getHelpTexts().animalsOtherLocation));
      },
    },
    {
      defaultValue: [],
      label: (
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS === 'ios') {
              Linking.openURL('calshow:');
            } else if (Platform.OS === 'android') {
              Linking.openURL('content://com.android.calendar/time/');
            }
          }}>
          <Text style={{...Fonts.Lato15R}}>
            {formatMessage({
              id: 'form.FormTwo.label.addressOfOtherAnimalsPartOne',
            })}
          </Text>
          <Text style={{...Fonts.Lato15I}}>
            {formatMessage({
              id: 'form.FormTwo.label.addressOfOtherAnimalsPartTwo',
            })}
          </Text>
        </TouchableOpacity>
      ),
      name: 'addressOfOtherAnimals',
      rules: isAnimalKeptAtOtherLocation ? {required} : {},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'form.button.addAddress'}),
      placeholder: formatMessage({id: 'form.button.placeholder.addAddress'}),
    },
  ];
};
