import React, {useCallback, useMemo} from 'react';
import {View, Text} from 'react-native';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import {ScaledSheet} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Container, Button} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';
import getFormFields from './FormFields';
import {Fonts} from '@styles/Themes';

const ProductionCapacityCalculator = () => {
  const intl = useIntl();
  const formProps = useForm();
  const {handleSubmit, control, errors, setValue} = formProps;
  const formFields = useMemo(() => getFormFields(intl), [intl]);

  Number.toString();
  const onSubmit = useCallback(
    (data) => {
      setValue(
        'approximateYoungProducedPerYear',
        (
          Number(data.countTotalBreedingFemale) *
          Number(data.percentageBreedingFemalePerSeason) *
          Number(data.countLitterPerYear) *
          Number(data.countOffspringPerLitter) *
          Number(data.percentageSurvivingInTwoWeek)
        ).toString(),
      );
    },
    [setValue],
  );

  const onError = useCallback((err, e) => {
    // console.error('Error in production Capacity calculator form - ', err);
  }, []);

  return (
    <Container>
      <View style={CommonStyles.screenContainer}>
        <Text style={Fonts.HelveticaNeue30B}>
          {intl.formatMessage({
            id: 'screen.ProductionCapacityCalculator.titleText',
          })}
        </Text>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Text style={[style.paragraph, Fonts.Lato17R]}>
            {intl.formatMessage({
              id: 'screen.ProductionCapacityCalculator.infoText_1',
            })}
          </Text>
          <Text style={[style.paragraph, Fonts.Lato17R]}>
            {intl.formatMessage({
              id: 'screen.ProductionCapacityCalculator.infoText_2',
            })}
          </Text>
          <Form
            control={control}
            formProps={formProps}
            errors={errors}
            formFields={formFields}
          />
          <Button
            title={intl.formatMessage({
              id: 'general.continue',
            })}
            onPress={handleSubmit(onSubmit, onError)}
          />
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
};

const style = ScaledSheet.create({
  paragraph: {
    marginBottom: '20@s',
  },
});

export default ProductionCapacityCalculator;
