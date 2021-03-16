import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const ExampleDialogueStep2 = ({navigation: {navigate, goBack}}) => {
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
            {formatMessage({id: 'screen.ExampleDialogue.headerPartTwo'})}
          </Text>
        </View>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentOne',
          })}

          <Text style={styles.word}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentTwo',
            })}
          </Text>
        </Text>
        <Text style={[styles.content, styles.nogap]}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentThree',
          })}
        </Text>
        <Text style={[styles.content, styles.nogap]}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentThreeOne',
          })}
        </Text>
        <Text>
          <Text style={[styles.word, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentFour',
            })}
          </Text>
          <Text style={[styles.content]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentFive',
            })}
          </Text>
          <Text>
            <Text style={styles.word}>
              {formatMessage({
                id: 'screen.ExampleDialogueStep2.contentSix',
              })}
            </Text>
            <Text style={[styles.content, styles.nogap]}>
              {formatMessage({
                id: 'screen.ExampleDialogueStep2.contentSeven',
              })}
            </Text>
          </Text>
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentEight',
          })}
          <Text style={[styles.word, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentEightOne',
            })}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentEightTwo',
            })}
          </Text>
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentNine',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentTen',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentEleven',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentTwelve',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentThirteen',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentFourteen',
          })}
        </Text>

        <Button
          buttonContent={formatMessage({
            id: 'button.continueWithStep2',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => navigate('TabNavigator', {screen: 'StepTwo'})}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    width: '240@s',
    marginTop: '18@s',
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

export default ExampleDialogueStep2;
