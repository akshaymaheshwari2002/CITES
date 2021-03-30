import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, s, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, TextInput} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const ExampleDialogueConsentFormStep2 = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  const [name, setName] = useState();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={[CommonStyles.flex1]}>
        <View>
          <View style={styles.title}>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.ExampleDialogue.headerPartOne'})}
            </Text>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.ExampleDialogueConsent.header'})}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.word}>
              {formatMessage({
                id: 'screen.ExampleDialogueConsentFormStep2.contentOne',
              })}
            </Text>
            <TextInput
              value={name}
              placeholder={formatMessage({
                id: 'screen.ExampleDialogueConsentFormStep2.namePlaceHolder',
              })}
              onChange={setName}
              style={{width: s(180), marginRight: s(25), marginLeft: s(10)}}
            />
          </View>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentTwo',
            })}
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
          <Text style={styles.content}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentSixOne',
            })}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentSixTwo',
            })}
          </Text>
          <TextInput
            value={name}
            onChange={setName}
            placeholder={formatMessage({
              id: 'screen.ExampleDialogueConsentFormStep2.contentSeven',
            })}
            style={{width: s(190), marginHorizontal: s(15)}}
          />
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
              return styles.buttonPrint;
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
        </View>
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
    ...Fonts.Lato17R,
    color: RawColors.black,
    marginTop: '20@s',
  },
  buttonPrint: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  button: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginBottom: '24@vs',
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
