import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const ExampleDialogueStep3 = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
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
          {formatMessage({id: 'screen.ExampleDialogueStep3.contentOne'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialogueStep3.contentTwo'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialogueStep3.contentThree'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialogueStep3.contentFour'})}
        </Text>
        <Button
          buttonContent={formatMessage({
            id: 'button.continueWithStep3',
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
    //height: '100@s',
    width: '240@s',
    marginTop: '18@s',
  },
  titleContent: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '32@s',
    letterSpacing: '0.64@s',
  },
  content: {
    alignSelf: 'center',
    ...Fonts.Lato15R,
    letterSpacing: 0.36,
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

export default ExampleDialogueStep3;
