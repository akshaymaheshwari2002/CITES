import React, {useCallback, useMemo} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import {ScaledSheet} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Container} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';
import getFormFields from './FormFields';

const ProductionCapacityCalculator = () => {
  const intl = useIntl();
  const formProps = useForm();
  const {handleSubmit, control, errors} = formProps;
  const formFields = useMemo(() => getFormFields(intl), [intl]);

  const onSubmit = useCallback((data, e) => {
    // console.log(data);
  }, []);

  const onError = useCallback((err, e) => {
    // console.error('Error in production Capacity calculator form - ', err);
  }, []);

  return (
    <Container>
      <View style={CommonStyles.screenContainer}>
        <Text style={style.title}>
          {intl.formatMessage({
            id: 'screen.ProductionCapacityCalculator.titleText',
          })}
        </Text>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Text style={style.paragraph}>
            {intl.formatMessage({
              id: 'screen.ProductionCapacityCalculator.infoText_1',
            })}
          </Text>
          <Text style={style.paragraph}>
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
          <Pressable
            style={style.buttonContainer}
            onPress={handleSubmit(onSubmit, onError)}>
            <Text style={style.buttonText}>Continue</Text>
          </Pressable>
        </KeyboardAwareScrollView>
      </View>
    </Container>
  );
};

const style = ScaledSheet.create({
  title: {
    fontSize: '30@s',
    lineHeight: '35@s',
    marginBottom: '20@s',
  },
  paragraph: {
    marginBottom: '20@s',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: 'rgb(242,242,247)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: '12@s',
  },
  buttonText: {
    fontSize: 18,
    color: 'rgb(112,112,112)',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default ProductionCapacityCalculator;
