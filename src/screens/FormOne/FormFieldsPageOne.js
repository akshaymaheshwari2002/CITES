import {verticalScale} from 'react-native-size-matters';
import {getAllCountries} from 'react-native-country-picker-modal';

import {store} from '@store';
import Config from '@config';
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

export default () => {
  const {formatMessage} = createIntl();
  const {
    required,
    requiredMobileInput,
    validateEmail,
    validateMobileInput,
    validBreedingCode,
  } = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateOfInspection'}),
      placeholder: formatMessage({id: 'form.label.dateOfInspection'}),
      name: 'dateOfInspection',
      rules: {required},
      headerTextIOS: formatMessage({id: 'form.label.dateOfInspection'}),
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.label.nameOfInspectionOfficers',
      }),
      placeholder: formatMessage({
        id: 'form.label.nameOfInspectionOfficers',
      }),
      name: 'nameOfInspectionOfficers',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      buttonText: formatMessage({id: 'button.addInspectionOfficer'}),
      count: 1,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityName'}),
      placeholder: formatMessage({id: 'form.label.facilityName'}),
      name: 'facilityName',
      rules: {required},
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityAddress'}),
      placeholder: formatMessage({id: 'form.placeholder.addressLineOne'}),
      name: 'facilityAddressLineOne',
      rules: {required},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      placeholder: formatMessage({id: 'form.placeholder.addressLineTwo'}),
      defaultValue: '',
      name: 'facilityAddressLineTwo',
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
      fieldType: Constants.COUNTRY_PICKER,
      items: countries,
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityOwner'}),
      placeholder: formatMessage({id: 'form.label.facilityOwner'}),
      name: 'facilityOwner',
      rules: {required},
    },
    {
      label: formatMessage({id: 'form.label.facilityOwnerEmail'}),
      placeholder: formatMessage({id: 'form.placeholder.emailId'}),
      name: 'facilityOwnerEmail',
      fieldContainerStyle: {marginBottom: 0},
      rules: {
        required,
        pattern: validateEmail,
      },
    },
    {
      name: 'facilityOwnerPhone',
      defaultValue: {
        callingCode: Config.DEFAULT_COUNTRY_CODE,
        cca2: Config.DEFAULT_COUNTRY,
      },
      placeholder: formatMessage({id: 'form.placeholder.phoneNumber'}),
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
      keyboardType: 'number-pad',
      rules: {
        validate: {
          requiredMobileInput,
          validateMobileInput,
        },
      },
      fieldType: Constants.MOBILE_INPUT,
    },
    {
      label: formatMessage({id: 'form.label.registeredSpecies'}),
      placeholder: formatMessage({
        id: 'form.label.registeredSpeciesPlaceholder',
      }),
      name: 'registeredSpecies',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addSpecies'}),
    },
    {
      label: formatMessage({id: 'form.label.facilityEstablishmentDate'}),
      placeholder: formatMessage({id: 'form.label.facilityEstablishmentDate'}),
      name: 'facilityEstablishmentDate',
      rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.label.facilityEstablishmentDate',
      }),
      fieldType: Constants.DATEPICKER,
      maximumDate: new Date(),
    },
    {
      label: formatMessage({id: 'form.label.typeOfInspection'}),
      name: 'typeOfInspection',
      rules: {required},
      fieldType: Constants.CHOICELIST,
      mode: 'radio-button',
      items: [
        {
          content: formatMessage({id: 'form.label.initialInspection'}),
          name: Constants.INITIAL_INSPECTION,
        },
        {
          content: formatMessage({id: 'form.label.routineInspection'}),
          name: Constants.ROUTINE_INSPECTION,
        },
        {
          content: formatMessage({id: 'form.label.followUpInspection'}),
          name: Constants.FOLLOWUP_INSPECTION,
        },
      ],
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(HelpTexts.typeOfInspection));
      },
    },
    {
      defaultValue: ['', '-', '', '', '-', '', '', ''],
      label: formatMessage({id: 'form.label.citesInformationCode'}),
      //placeholder: formatMessage({id: 'form.placeHolder.citesInformationCode'}),
      name: 'citesInformationCode',
      fieldType: Constants.BREEDING_CODE_INPUT,
      rules: {
        validate: {
          validBreedingCode,
        },
        maxLength: {
          value: 1,
          message: formatMessage({id: 'form.error.eightCharacters'}),
        },
      },
    },
  ];
};
