import React, {useCallback, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import getFormFields from './FormFields';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const FormTwo = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {reset, control, errors, watch, handleSubmit} = useForm({
    shouldFocusError: false,
  });
  const scrollViewRef = useRef();
  const savedFormData = useRef({});
  const formFields = useMemo(() => getFormFields(), []);
  const _handleSubmit = useCallback();
  const scrollToTop = useCallback(() => {
    setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 200);
  }, []);
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={handleBackPress} />
        }
      />
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormTwo.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FormTwo.contentOne'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FormTwo.contentTwo'})}
        </Text>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          <Button
            onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
            buttonContent={formatMessage({id: 'button.continueWithStep2'})}
          />
          <Button
            onPress={() =>
              navigation.navigate('FormTwoSummary', {
                data: savedFormData.current,
              })
            }
            buttonStyle={() => ({marginVertical: verticalScale(16)})}
            buttonContent={formatMessage({id: 'button.viewForm2Summary'})}
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

export default FormTwo;
