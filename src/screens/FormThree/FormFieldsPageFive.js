import React from 'react';
import {ms, s} from 'react-native-size-matters';
import {View, Switch, Text} from 'react-native';

import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';
import Constants from '@utils/Constants';
import {Fonts, RawColors} from '@styles/Themes';

export default (fieldProps = {}) => {
  const {formatMessage} = getIntl();
  const {
    required,
    validateInteger,
    validateNumber,
    validateNumberPercentageNonFraction,
    validatePositiveNumber,
  } = getValidators();

  return [
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.noOfJuvenilesPresentFacilityInfo',
      }),
      labelRight: formatMessage({
        id: 'form.FormThree.label.facilityInformation',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'noOfJuvenilesPresentFacilityInfo',
      rules: {
        // required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',

      style: {flex: 3},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
      fieldContainerStyle: {marginBottom: 0},
    },
    {
      defaultValue: '',
      labelRight: formatMessage({
        id: 'form.FormThree.label.inspectionInformation',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'noOfJuvenilesPresentInspectionInfo',
      rules: {
        // required,
        validate: {
          validateNumber,
          validatePositiveNumber,
          validateInteger,
        },
      },
      keyboardType: 'number-pad',
      style: {flex: 3},
      labelRightStyle: {paddingHorizontal: ms(15), flex: 3},
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormThree.label.ageAtSexualMaturity'}),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'ageAtSexualMaturity',
      rules: {
        // required,
        validate: {
          validateNumber,
          validatePositiveNumber,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.sizeOrMassAtSexualMaturity',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'sizeOrMassAtSexualMaturity',
      //rules: {required},
      labelRight: (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Text style={{...Fonts.Lato15R, margin: s(10)}}>cm</Text>
          <Switch
            trackColor={{
              false: RawColors.darkSalmon,
              true: RawColors.darkSalmon,
            }}
            thumbColor={
              fieldProps._cmOrGramOfSizeOrMassAtSexualMaturity
                ? RawColors.black
                : RawColors.black
            }
            ios_backgroundColor={RawColors.dimGrey}
            onValueChange={(value) => {
              fieldProps.handleUnitsOfSizeOrMass({
                key: 'cmOrGramOfSizeOrMassAtSexualMaturity',
                value,
              });
            }}
            value={fieldProps._cmOrGramOfSizeOrMassAtSexualMaturity ?? false}
          />
          <Text style={{...Fonts.Lato15R, margin: s(10)}}>g</Text>
        </View>
      ),
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.sizeOrMassAtSaleOrExport',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'sizeOrMassAtSaleOrExport',
      //rules: {required},
      labelRight: (
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Text style={{...Fonts.Lato15R, margin: s(10)}}>cm</Text>
          <Switch
            trackColor={{
              false: RawColors.darkSalmon,
              true: RawColors.darkSalmon,
            }}
            thumbColor={
              fieldProps._cmOrGramOfSizeOrMassAtSaleOrExport
                ? RawColors.black
                : RawColors.black
            }
            ios_backgroundColor={RawColors.dimGrey}
            onValueChange={(value) => {
              fieldProps.handleUnitsOfSizeOrMass({
                key: 'cmOrGramOfSizeOrMassAtSaleOrExport',
                value,
              });
            }}
            value={fieldProps._cmOrGramOfSizeOrMassAtSaleOrExport ?? false}
          />
          <Text style={{...Fonts.Lato15R, margin: s(10)}}>g</Text>
        </View>
      ),
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.percentageOfJuvenilesSurviveBeyond2Weeks',
      }),
      placeholder: formatMessage({
        id: 'form.placeHolder.number',
      }),
      name: 'percentageOfJuvenilesSurviveBeyond2Weeks',
      rules: {
        // required,
        validate: {
          validateNumber,
          validateNumberPercentageNonFraction,
        },
      },
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.foodFedToRearingAndJuveniles',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.foodFedToRearingAndJuveniles',
      }),
      name: 'foodFedToRearingAndJuveniles',
      // rules: {required},
      fieldType: Constants.TEXTINPUT_ARRAY,
      count: 1,
      buttonText: formatMessage({id: 'button.addFood'}),
    },
  ];
};
