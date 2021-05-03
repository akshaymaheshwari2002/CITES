import {verticalScale} from 'react-native-size-matters';
import {getAllCountries} from 'react-native-country-picker-modal';

import {store} from '@store';
import Config from '@config';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';
import {setHelpText} from '@store/slices/sessionSlice';
import {getHelpTexts} from '@utils/CommonFunctions';

let countries;

(async () => {
  let _countries = await getAllCountries();
  _countries = _countries.map(({name}) => ({label: name, value: name}));

  countries = _countries;
})();

export default () => {
  const {formatMessage} = getIntl();
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
      label: formatMessage({id: 'form.FormOne.label.dateOfInspection'}),
      placeholder: formatMessage({id: 'form.FormOne.label.dateOfInspection'}),
      name: 'dateOfInspection',
      rules: {required},
      minimumDate: new Date(),
      headerTextIOS: formatMessage({id: 'form.FormOne.label.dateOfInspection'}),
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormOne.label.nameOfInspectionOfficers',
      }),
      placeholder: formatMessage({
        id: 'form.FormOne.placeholder.nameOfInspectionOfficers',
      }),
      name: 'nameOfInspectionOfficers',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      buttonText: formatMessage({id: 'button.addInspectionOfficer'}),
      count: 1,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.facilityName'}),
      placeholder: formatMessage({id: 'form.FormOne.label.facilityName'}),
      name: 'facilityName',
      //rules: {required},
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.addressLineOne'}),
      placeholder: formatMessage({
        id: 'form.FormOne.placeholder.addressLineOne',
      }),
      name: 'facilityAddressLineOne',
      //rules: {required},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      label: formatMessage({id: 'form.FormOne.label.addressLineTwo'}),
      placeholder: formatMessage({
        id: 'form.FormOne.placeholder.addressLineTwo',
      }),
      defaultValue: '',
      name: 'facilityAddressLineTwo',
      //rules: {required},
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.FormOne.label.city'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.city'}),
      defaultValue: '',
      name: 'city',
      //rules: {required},
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.FormOne.placeholder.stateRegion'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.stateRegion'}),
      defaultValue: '',
      name: 'stateProvienceRegion',
      //rules: {required},
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.FormOne.label.zipCode'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.zipCode'}),
      defaultValue: '',
      name: 'zipCode',
      fieldContainerStyle: {marginBottom: 0},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.FormOne.placeholder.country'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.country'}),
      defaultValue: '',
      name: 'country',
      //rules: {required},
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
      label: formatMessage({id: 'form.FormOne.label.facilityOwner'}),
      placeholder: formatMessage({id: 'form.FormOne.label.facilityOwner'}),
      name: 'facilityOwner',
      // rules: {required},
    },
    {
      label: formatMessage({id: 'form.FormOne.label.facilityOwnerEmail'}),
      placeholder: formatMessage({id: 'form.FormOne.placeholder.emailId'}),
      name: 'facilityOwnerEmail',
      fieldContainerStyle: {marginBottom: 0},
      rules: {
        pattern: validateEmail,
      },
    },
    {
      name: 'facilityOwnerPhone',
      defaultValue: {
        callingCode: Config.DEFAULT_COUNTRY_CODE,
        cca2: Config.DEFAULT_COUNTRY,
      },
      placeholder: formatMessage({id: 'form.placeHolder.number'}),
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
      keyboardType: 'number-pad',
      rules: {
        validate: {
          // requiredMobileInput,
          validateMobileInput,
        },
      },
      fieldType: Constants.MOBILE_INPUT,
    },
    {
      label: formatMessage({id: 'form.FormOne.label.registeredSpecies'}),
      placeholder: formatMessage({
        id: 'form.FormOne.label.registeredSpeciesPlaceholder',
      }),
      name: 'registeredSpecies',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addSpecies'}),
    },
    {
      label: formatMessage({
        id: 'form.FormOne.label.facilityEstablishmentDate',
      }),
      placeholder: formatMessage({
        id: 'form.FormOne.label.facilityEstablishmentDate',
      }),
      name: 'facilityEstablishmentDate',
      //rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.FormOne.label.facilityEstablishmentDate',
      }),
      fieldType: Constants.DATEPICKER,
      maximumDate: new Date(),
    },
    {
      label: formatMessage({id: 'form.FormOne.label.typeOfInspection'}),
      name: 'typeOfInspection',
      // rules: {required},
      fieldType: Constants.CHOICELIST,
      mode: 'radio-button',
      items: [
        {
          content: formatMessage({id: 'form.FormOne.label.initialInspection'}),
          name: Constants.INITIAL_INSPECTION,
        },
        {
          content: formatMessage({id: 'form.FormOne.label.routineInspection'}),
          name: Constants.ROUTINE_INSPECTION,
        },
        {
          content: formatMessage({id: 'form.FormOne.label.followUpInspection'}),
          name: Constants.FOLLOWUP_INSPECTION,
        },
      ],
      showHelpIcon: true,
      onHelpIconPress: () => {
        store.dispatch(setHelpText(getHelpTexts().typeOfInspection));
      },
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormOne.label.nationalPermitNumber'}),
      placeholder: formatMessage({
        id: 'form.FormOne.placeHolder.nationalPermitNumber',
      }),
      name: 'nationalPermitNumber',
      //rules: {required},
    },
    {
      defaultValue: ['', '-', '', '', '-', '', '', ''],
      label: formatMessage({id: 'form.FormOne.label.citesInformationCode'}),
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
