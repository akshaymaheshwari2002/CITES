import React from 'react';
import {View, Text, Image} from 'react-native';

import {ScaledSheet, ms, vs, s} from 'react-native-size-matters';
import {Images} from '@assets';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, Header} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';

const FeedbackTwo = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  const formProps = useForm();
  const {control, errors} = formProps;

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
      />
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
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
          <Image source={Images.emojiOne} style={styles.emoji} />
          <Image source={Images.emojiTwo} style={styles.emoji} />
          <Image source={Images.emojiThree} style={styles.emoji} />
          <Image source={Images.emojiFour} style={styles.emoji} />
          <Image source={Images.emojiFive} style={styles.emoji} />
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
        <Button
          buttonContent={formatMessage({
            id: 'button.submit',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => navigate('TabNavigator', {screen: 'StepOne'})}
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
  emoji: {
    marginHorizontal: '7@s',
  },
  titleContent: {
    ...Fonts.HelveticaNeue40B,
    lineHeight: '49@s',
    letterSpacing: '0.64@s',
  },
  questionContainer: {
    marginTop: '16@s',
    height: '18@vs',
  },
  question: {
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15B,
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
    marginHorizontal: '12@s',
    marginTop: '15@s',
    ...Fonts.Lato15R,
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '14@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedbackTwo;
