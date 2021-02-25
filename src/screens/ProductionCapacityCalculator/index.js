import React, {useCallback, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Button, Header} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';
import getFormFields from './FormFields';
import {Fonts, RawColors} from '@styles/Themes';

const ProductionCapacityCalculator = ({navigation: {navigate, goBack}}) => {
  const intl = useIntl();
  const formProps = useForm();
  const {setValue, handleSubmit} = formProps;
  const [modeSelected, setModeSelected] = useState(1);

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
        setValue(
          'approximateYoungProducedPerYear',
          approximateYoungProducedPerYear.toString(),
        );
      } else if (modeSelected === 2) {
        let countTotalBreedingFemale =
          Number(data.approximateYoungProducedPerYear) /
          (Number(data.percentageBreedingFemalePerSeason) *
            Number(data.countLitterPerYear) *
            Number(data.countOffspringPerLitter) *
            Number(data.percentageSurvivingInTwoWeek));
        countTotalBreedingFemale = Math.round(countTotalBreedingFemale);
        setValue(
          'countTotalBreedingFemale',
          countTotalBreedingFemale.toString(),
        );
      } else {
      }
    },
    [setValue, modeSelected],
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
      />
      <Text style={styles.title}>
        {intl.formatMessage({
          id: 'screen.ProductionCapacityCalculator.titleText',
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
            onPress={() => (modeSelected === 2 ? setModeSelected(1) : null)}>
            <Text
              style={[
                styles.modeButtonText,
                modeSelected === 1 ? styles.modeButtonTextSelected : {},
              ]}>
              {intl.formatMessage({
                id: 'screen.ProductionCapacityCalculator.modeButton_1',
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
            onPress={() => (modeSelected === 1 ? setModeSelected(2) : null)}>
            <Text
              style={[
                styles.modeButtonText,
                modeSelected === 2 ? styles.modeButtonTextSelected : {},
              ]}>
              {intl.formatMessage({
                id: 'screen.ProductionCapacityCalculator.modeButton_2',
              })}
            </Text>
          </Pressable>
        </View>
        <Form {...formProps} formFields={getFormFields({modeSelected})} />
        <Button
          buttonStyle={() => styles.button}
          buttonContent={intl.formatMessage({
            id: 'general.continue',
          })}
          onPress={handleSubmit(onSubmit)}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    paddingHorizontal: '16@vs',
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
    letterSpacing: '0.34@ms',
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
});

export default ProductionCapacityCalculator;
