import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import createIntl from '@utils/Intl';
import {verticalScale} from 'react-native-size-matters';

export default () => {
  const {formatMessage} = createIntl();
  const {required} = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.dateOfInspection'}),
      name: 'dateOfInspection',
      rules: {required},
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({
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
      name: 'facilityName',
      rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityAddress'}),
      name: 'facilityAddressLineOne',
      rules: {required},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
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
      defaultValue: '',
      name: 'facilityAddressLineThree',
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.label.facilityOwner'}),
      name: 'facilityOwner',
      rules: {required},
      keyboardType: 'decimal-pad',
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 2,
    },
    {
      label: formatMessage({id: 'form.label.facilityOwnerEmail'}),
      name: 'facilityOwnerEmail',
      rules: {required},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      name: 'facilityOwnerPhone',
      rules: {required},
      style: {
        marginVertical: 0,
        marginTop: verticalScale(6),
        marginBottom: verticalScale(6),
      },
    },
    {
      label: formatMessage({id: 'form.label.registeredSpecies'}),
      name: 'registeredSpeciesName',
      rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addSpecies'}),
    },
    {
      label: formatMessage({id: 'form.label.facilityEshtablishmentDate'}),
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
    },
  ];
};
