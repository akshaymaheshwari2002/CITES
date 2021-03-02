import {verticalScale} from 'react-native-size-matters';

import {store} from '@store';
import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {setHelpText} from '@store/slices/sessionSlice';
import HelpTexts from '@utils/HelpTexts';

export default () => {
  const {formatMessage} = createIntl();
  const {required, validateEmail, validatePhone} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateOfInspection'}),
      placeholder: formatMessage({id: 'form.label.dateOfInspection'}),
      name: 'dateOfInspection',
      rules: {required},
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
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityOwner'}),
      placeholder: formatMessage({id: 'form.label.facilityOwner'}),
      name: 'facilityOwner',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 2,
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
      placeholder: formatMessage({id: 'form.placeholder.phoneNumber'}),
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
      keyboardType: 'number-pad',
      rules: {
        required,
        pattern: validatePhone,
      },
    },
    {
      label: formatMessage({id: 'form.label.registeredSpecies'}),
      placeholder: formatMessage({id: 'form.label.registeredSpecies'}),
      name: 'registeredSpecies',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addSpecies'}),
    },
    {
      label: formatMessage({id: 'form.label.facilityEshtablishmentDate'}),
      placeholder: formatMessage({id: 'form.label.facilityEshtablishmentDate'}),
      name: 'facilityEshtablishmentDate',
      rules: {required},
      fieldType: Constants.DATEPICKER,
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
      defaultValue: '',
      label: formatMessage({id: 'form.label.citesInformationCode'}),
      placeholder: formatMessage({id: 'form.label.citesInformationCode'}),
      name: 'citesInformationCode',
      rules: {required},
    },
  ];
};
