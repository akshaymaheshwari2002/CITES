import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const ExampleDialogueConsentFormStep2 = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
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
            {formatMessage({id: 'screen.ExampleDialogue.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.ExampleDialogueConsent.header'})}
          </Text>
        </View>
        <Text>
          <Text style={styles.word}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentOne',
            })}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentTwo',
            })}
          </Text>
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentThree',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentFour',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentFive',
          })}
        </Text>
        <Text>
          <Text style={styles.content}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentSix',
            })}
          </Text>
          <Text style={styles.word}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentSeven',
            })}
          </Text>
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentEight',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentNine',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueConsentFormStep2.contentTen',
          })}
        </Text>
        <Button
          buttonContent={formatMessage({
            id: 'button.print',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => navigate('TabNavigator', {screen: 'StepOne'})}
        />
        <Button
          buttonContent={formatMessage({
            id: 'button.continueWithStep1',
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
    marginVertical: '18@s',
  },
  nogap: {
    marginTop: '0@s',
  },
  titleContent: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '32@s',
    letterSpacing: '0.64@s',
  },
  word: {
    ...Fonts.Lato17B,
    color: RawColors.black,
  },
  content: {
    width: '100%',
    alignSelf: 'center',
    ...Fonts.Lato17R,
    lineHeight: 30,
    letterSpacing: 0.41,
    color: RawColors.black,
    marginTop: '20@s',
  },
  button: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleDialogueConsentFormStep2;
