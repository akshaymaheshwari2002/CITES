import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const ExampleDialog = ({navigation: {navigate, goBack}}) => {
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
            {formatMessage({id: 'screen.ExampleDialog.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.ExampleDialog.headerPartTwo'})}
          </Text>
        </View>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialog.contentOne'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialog.contentTwo'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialog.contentThree'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.ExampleDialog.contentFour'})}
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
          onPress={() => navigate('TabNavigator', {screen: 'StepOne'})}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    height: '100@s',
    width: '240@s',
  },
  titleContent: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '49@s',
    letterSpacing: '0.64@s',
  },
  content: {
    alignSelf: 'center',
    ...Fonts.Lato15R,
    lineHeight: 22,
    letterSpacing: 0.36,
    color: RawColors.tuna,
    marginTop: '30@s',
  },
  button: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleDialog;
