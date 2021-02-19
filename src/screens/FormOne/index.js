import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Button, Container} from '@atoms';
import {Form} from '@organisms';
import getFormFieldsPageOne from './FormFieldsPageOne';
import getFormFieldsPageTwo from './FormFieldsPageTwo';
import {Fonts, RawColors} from '@styles/Themes';

const FormOne = ({navigation}) => {
  const {formatMessage} = useIntl();
  const formProps = useForm();
  const formData = useRef({});
  const switchedFromPageTwo = useRef(false);
  const switchedFromPageOne = useRef(false);
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const formFields = useMemo(
    () =>
      formFieldsPage === 1 ? getFormFieldsPageOne() : getFormFieldsPageTwo(),
    [formFieldsPage],
  );
  const watch = formProps.watch();

  const handleSubmit = useCallback(() => {
    if (formFieldsPage === 1) {
      setFormFieldsPage(2);
      switchedFromPageOne.current = true;
    } else {
    }
  }, [formFieldsPage]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: ({onPress}) => (
        <TouchableOpacity
          onPress={() => {
            if (formFieldsPage === 2) {
              setFormFieldsPage(1);
              switchedFromPageTwo.current = true;
            } else {
              onPress();
            }
          }}>
          <Icon name="chevron-left" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [formFieldsPage, navigation]);

  useEffect(() => {
    if (!switchedFromPageOne.current && !switchedFromPageTwo.current) {
      formData.current = {...formData.current, ...watch};
    }
  }, [watch]);

  useEffect(() => {
    if (formFieldsPage === 1 && switchedFromPageTwo.current) {
      const values = getFormFieldsPageOne().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: formData.current[current.name],
        }),
        {},
      );

      formProps.reset(values);
      switchedFromPageTwo.current = false;
    }
  }, [formFieldsPage, formProps]);

  useEffect(() => {
    if (formFieldsPage === 2 && switchedFromPageOne.current) {
      const values = getFormFieldsPageTwo().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: formData.current[current.name],
        }),
        {},
      );

      formProps.reset(values);
      switchedFromPageOne.current = false;
    }
  }, [formFieldsPage, formProps]);

  return (
    <Container>
      <Container.ScrollView>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormOne.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FormOne.contentOne'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FormOne.contentTwo'})}
        </Text>
        <View style={styles.formContainer}>
          <Form {...formProps} formFields={formFields} />
          {formFieldsPage === 1 ? (
            <Button
              onPress={formProps.handleSubmit(handleSubmit)}
              buttonContent={formatMessage({id: 'button.continueToStep2'})}
            />
          ) : (
            <>
              <Button
                onPress={formProps.handleSubmit(handleSubmit)}
                buttonContent={formatMessage({id: 'button.saveAndAdd'})}
              />
              <Button
                onPress={formProps.handleSubmit(handleSubmit)}
                buttonStyle={() => ({marginVertical: verticalScale(16)})}
                buttonContent={formatMessage({id: 'button.viewFormOneSummary'})}
              />
              <Button
                onPress={formProps.handleSubmit(handleSubmit)}
                buttonContent={formatMessage({id: 'button.continueToStep1'})}
              />
            </>
          )}
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginHorizontal: '16@s',
    marginVertical: '16@vs',
    ...Fonts.HelveticaNeue30B,
  },
  contentOne: {
    marginHorizontal: '16@s',
    marginBottom: '16@vs',
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  contentTwo: {
    marginBottom: '16@vs',
    padding: '16@ms',
    backgroundColor: RawColors.whiteTwo,
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  formContainer: {
    paddingHorizontal: '16@s',
    marginBottom: '24@vs',
  },
});

export default FormOne;
