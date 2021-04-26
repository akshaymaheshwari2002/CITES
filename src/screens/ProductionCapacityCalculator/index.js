import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import {ScaledSheet, vs} from 'react-native-size-matters';

import {Container, Button, TextInput} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';
import FormFields from './FormFields';
import {Fonts, RawColors} from '@styles/Themes';

const resultFieldStyleProps = {
  fontWeight: 'bold',
  color: RawColors.black,
  borderWidth: 3,
  borderColor: RawColors.black,
};
const resultFieldLabelStyleProps = {
  fontWeight: 'bold',
};

const ProductionCapacityCalculator = ({navigation: {goBack}}) => {
  const intl = useIntl();
  const {control, errors, handleSubmit} = useForm();
  const [modeSelected, setModeSelected] = useState(1);
  const [resultFieldValue, setResultFieldValue] = useState(0);
  const [resultFieldInputProps, setResultFieldInputProps] = useState({});

  const getFormFields = useCallback(() => {
    return modeSelected === 1
      ? FormFields({modeSelected}).slice(0, 5)
      : FormFields({modeSelected}).slice(1).reverse();
  }, [modeSelected]);

  useEffect(() => {
    const field =
      modeSelected === 1
        ? FormFields({modeSelected})[5]
        : FormFields({modeSelected})[0];
    setResultFieldInputProps({
      label: field.label,
      showHelpIcon: true,
      onHelpIconPress: field.onHelpIconPress,
      labelStyle: resultFieldLabelStyleProps,
    });
  }, [modeSelected]);

  const onSubmit = useCallback(
    (data) => {
      if (modeSelected === 1) {
        let approximateYoungProducedPerYear =
          Number(data.countTotalBreedingFemale) *
          Number(data.percentageBreedingFemalePerSeason) *
          Number(data.countLitterPerYear) *
          Number(data.countOffspringPerLitter) *
          Number(data.percentageSurvivingInTwoWeek);
        approximateYoungProducedPerYear = Math.round(
          approximateYoungProducedPerYear,
        );
        setResultFieldValue(approximateYoungProducedPerYear.toString());
      } else if (modeSelected === 2) {
        let countTotalBreedingFemale =
          Number(data.approximateYoungProducedPerYear) /
          (Number(data.percentageBreedingFemalePerSeason) *
            Number(data.countLitterPerYear) *
            Number(data.countOffspringPerLitter) *
            Number(data.percentageSurvivingInTwoWeek));
        countTotalBreedingFemale = Math.round(countTotalBreedingFemale);
        setResultFieldValue(countTotalBreedingFemale.toString());
      } else {
      }
    },
    [modeSelected],
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Text style={styles.title}>
        {intl.formatMessage({
          id: 'button.stepThree.productionCapacityCalculated',
        })}
      </Text>
      <Container.ScrollView
        style={CommonStyles.flex1}
        contentContainerStyle={CommonStyles.screenContainer}>
        <Text style={[styles.paragraph, Fonts.Lato17R]}>
          {intl.formatMessage({
            id: 'screen.ProductionCapacityCalculator.infoText_1',
          })}
        </Text>
        <Text style={[styles.paragraph, Fonts.Lato17R]}>
          {intl.formatMessage({
            id: 'screen.ProductionCapacityCalculator.infoText_2',
          })}
        </Text>
        <View style={[styles.paragraph, styles.modeButtonWrapper]}>
          <Pressable
            style={
              modeSelected === 1
                ? [
                    styles.modeButton,
                    CommonStyles.shadowEffect,
                    styles.modeButtonOne,
                    styles.modeButtonSelectedOne,
                  ]
                : [styles.modeButton, styles.modeButtonOne]
            }
            android_ripple={true}
            onPress={() => {
              if (modeSelected === 2) {
                setModeSelected(1);
                setResultFieldValue(0);
              }
            }}>
            <Text
              style={[
                styles.modeButtonText,
                modeSelected === 1 ? styles.modeButtonTextSelected : {},
              ]}>
              {intl.formatMessage({
                id: 'button.noOfSpecies',
              })}
            </Text>
          </Pressable>
          <Pressable
            style={
              modeSelected === 2
                ? [
                    styles.modeButton,
                    CommonStyles.shadowEffect,
                    styles.modeButtonTwo,
                    styles.modeButtonSelectedTwo,
                  ]
                : [styles.modeButton, styles.modeButtonTwo]
            }
            android_ripple={true}
            onPress={() => {
              if (modeSelected === 1) {
                setModeSelected(2);
                setResultFieldValue(0);
              }
            }}>
            <Text
              style={[
                styles.modeButtonText,
                modeSelected === 2 ? styles.modeButtonTextSelected : {},
              ]}>
              {intl.formatMessage({
                id: 'button.noOfFemales',
              })}
            </Text>
          </Pressable>
        </View>
        <Form {...{errors, control}} formFields={getFormFields()} />
        <Button
          buttonStyle={() => styles.button}
          buttonContent={intl.formatMessage({
            id: 'general.calculate',
          })}
          onPress={handleSubmit(onSubmit)}
        />
        <View style={{...styles.marginBottomVS28, marginTop: vs(28)}}>
          <TextInput
            value={resultFieldValue}
            {...resultFieldInputProps}
            labelStyle={Fonts.Lato16B}
            editable={false}
            style={resultFieldStyleProps}
          />
        </View>
        <Button
          buttonStyle={() => styles.button}
          buttonContent={intl.formatMessage({
            id: 'button.continueCaps',
          })}
          onPress={goBack}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    paddingHorizontal: '16@vs',
    paddingBottom: '30@vs',
    ...Fonts.HelveticaNeue30B,
  },
  paragraph: {
    marginBottom: '20@s',
  },
  modeButtonWrapper: {
    flex: 1,
    flexDirection: 'row',
    minHeight: '90@vs',
    width: '100%',
  },
  modeButton: {
    padding: '15@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: RawColors.white,
    borderColor: RawColors.dimGrey,
  },
  modeButtonOne: {
    borderTopLeftRadius: '14@vs',
    borderBottomLeftRadius: '14@vs',
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  modeButtonTwo: {
    borderTopRightRadius: '14@vs',
    borderBottomRightRadius: '14@vs',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  modeButtonSelectedOne: {
    borderColor: RawColors.grey57,
    backgroundColor: RawColors.lightContinueInspection,
    borderRightWidth: 1,
  },
  modeButtonSelectedTwo: {
    borderColor: RawColors.grey57,
    backgroundColor: RawColors.lightContinueInspection,
    borderLeftWidth: 1,
  },
  modeButtonText: {
    letterSpacing: '0.3@ms',
    lineHeight: '21@ms',
    textAlignVertical: 'center',
    textAlign: 'center',
    ...Fonts.Lato12R,
  },
  modeButtonTextSelected: {
    letterSpacing: '0.19@ms',
    lineHeight: '21@ms',
    ...Fonts.Lato12B,
  },
  button: {
    marginBottom: '16@vs',
  },
  marginBottomVS28: {
    marginBottom: vs(28),
  },
});

export default ProductionCapacityCalculator;
