import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import getFormFieldsPageOne from './FormFieldsPageOne';
import getFormFieldsPageTwo from './FormFieldsPageTwo';
import getFormFieldsPageThree from './FormFieldsPageThree';
import getFormFieldsPageFour from './FormFieldsPageFour';
import getFormFieldsPageFive from './FormFieldsPageFive';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const FormThree = ({navigation: {navigate, goBack}}) => {
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection?.registeredSpecies || [],
    shallowEqual,
  );
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {reset, control, errors, watch, handleSubmit} = useForm({
    shouldFocusError: false,
  });
  const scrollViewRef = useRef();
  const savedFormData = useRef({});

  const formFields = useMemo(() => {
    const fieldProps = {
      _id: {
        items: registeredSpecies.map(({name, _id}) => ({
          label: name,
          value: _id,
        })),
      },
    };
    switch (formFieldsPage) {
      case 1:
        return getFormFieldsPageOne(fieldProps);
      case 2:
        return getFormFieldsPageTwo();
      case 3:
        return getFormFieldsPageThree();
      case 4:
        return getFormFieldsPageFour();
      case 5:
        return getFormFieldsPageFive();
    }
  }, [formFieldsPage, registeredSpecies]);

  const _handleSubmit = useCallback(() => {
    if (formFieldsPage < 5) {
      setFormFieldsPage((state) => state + 1);
    } else {
      navigate('TabNavigator', {screen: 'StepTwo'});
    }
  }, [formFieldsPage, navigate]);

  const scrollToTop = useCallback(() => {
    setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 200);
  }, []);
  const handleBackPress = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={handleBackPress} />
        }
      />
      <Text style={styles.title}>
        {formatMessage({id: 'screen.FormThree.title'})}
      </Text>
      <Text style={styles.contentOne}>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentOne'})}
        </Text>
        <Text style={styles.word}>
          {formatMessage({id: 'screen.FormThree.contentTwo'})}
        </Text>
      </Text>
      <Text style={styles.contentTwo}>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentThree'})}
        </Text>
        <Text style={styles.word}>
          {formatMessage({id: 'screen.FormThree.contentFour'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentFive'})}
        </Text>
      </Text>
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          <Button
            onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
            buttonContent={formatMessage({id: 'general.continue'})}
          />
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
  },
  content: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  word: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15B,
  },
  contentTwo: {
    marginBottom: '16@vs',
    padding: '16@ms',
    backgroundColor: RawColors.whiteTwo,
  },
  formContainer: {
    paddingHorizontal: '16@s',
    marginBottom: '24@vs',
  },
});

export default FormThree;
