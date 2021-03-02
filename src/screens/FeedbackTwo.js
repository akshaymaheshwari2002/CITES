import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '@atoms';
import {ScaledSheet, ms, vs, s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';

import {Fonts, RawColors} from '@styles/Themes';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';

const FeedbackTwo = ({navigation}) => {
  const {formatMessage} = useIntl();
  const formProps = useForm();
  const {control, errors} = formProps;

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackTwo.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackTwo.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {formatMessage({id: 'screen.FeedbackTwo.question'})}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="chevron-left" size={ms(54)} />
        </View>
        <Form
          control={control}
          formProps={formProps}
          errors={errors}
          formFields={[
            {
              defaultValue: '',
              name: 'FeedbackTwo',
              rules: {
                required: formatMessage({id: 'form.error.fieldRequired'}),
              },
              placeholder: formatMessage({
                id: 'screen.FeedbackTwo.content',
              }),
              style: {
                color: RawColors.grey,
                height: vs(245),
                width: s(290),
                marginTop: vs(29),
                alignSelf: 'center',
                borderRadius: ms(20),
                borderWidth: 1,
                borderColor: RawColors.darkGrey,
                textAlignVertical: 'top',
                padding: ms(16),
              },
              multiLine: true,
            },
          ]}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
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
    marginTop: '16@s',
    height: '18@vs',
  },
  question: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15R,
  },
  iconContainer: {
    marginLeft: '3@s',
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
    width: '280@s',
    borderRadius: '20@s',
    borderWidth: '1@s',
    borderColor: RawColors.darkGrey,
  },
  content: {
    color: RawColors.grey,
    lineHeight: '30@vs',
    marginLeft: '12@s',
    marginTop: '15@s',
    ...Fonts.Lato15R,
  },
});

export default FeedbackTwo;
