import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '@atoms';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Fonts, RawColors} from '@styles/Themes';
import {Form} from '@organisms';

const SubmitFeedback = ({navigation}) => {
  const {formatMessage} = useIntl();
  const formProps = useForm();
  const {control, errors} = formProps;

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.SubmitFeedback.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.SubmitFeedback.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {formatMessage({id: 'screen.SubmitFeedback.question'})}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-left" size={scale(54)} />
        </View>
        <View>
          <Form
            control={control}
            formProps={formProps}
            errors={errors}
            formFields={[
              {
                defaultValue: '',
                name: 'SubmitFeedback',
                rules: {
                  required: formatMessage({id: 'form.error.fieldRequired'}),
                },
                placeholder: formatMessage({
                  id: 'screen.SubmitFeedback.content',
                }),
                style: {
                  color: RawColors.grey,
                  height: scale(245),
                  width: scale(290),
                  marginTop: scale(29),
                  alignSelf: 'center',
                  borderRadius: scale(20),
                  borderWidth: 1,
                  borderColor: RawColors.darkGrey,
                  textAlignVertical: 'top',
                  padding: scale(16),
                },
              },
            ]}
          />
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginHorizontal: '16@s',
    marginTop: '18@s',
    height: '100@vs',
    width: '240@s',
  },
  titleContent: {
    fontWeight: 'bold',
    fontSize: '40@s',
    lineHeight: '49@s',
    letterSpacing: '0.64@s',
  },
  questionContainer: {
    marginLeft: '17@s',
    marginTop: '14@s',
    height: '18@vs',
    width: '173@s',
  },
  question: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15R,
  },
  iconContainer: {
    marginLeft: '19.3@s',
    marginRight: '20@s',
    marginTop: '21@s',
    flexDirection: 'row',
  },
  icon: {
    height: '54@s',
    width: '54@s',
  },
  contentContainer: {
    marginTop: '29@s',
    alignSelf: 'center',
    height: '245@vs',
    width: '290@s',
    borderRadius: '20@s',
    borderWidth: '1@s',
    borderColor: RawColors.darkGrey,
  },
  content: {
    color: RawColors.grey,
    lineHeight: '30@vs',
    height: '78@s',
    width: '265@s',
    marginLeft: '12@s',
    marginTop: '15@s',
    ...Fonts.Lato15R,
  },
  btn: {
    marginTop: '29@s',
    marginHorizontal: '43@s',
    marginVertical: '36@vs',
    height: '46@vs',
    width: '290@s',
  },
});

export default SubmitFeedback;
