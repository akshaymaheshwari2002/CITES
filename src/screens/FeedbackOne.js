import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Header, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const FeedbackOne = ({navigation}) => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        }
      />

      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackOne.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackOne.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FeedbackOne.contentOne'})}
          </Text>
          <View style={styles.gap1}>
            <Text style={styles.line1}>
              {formatMessage({id: 'screen.FeedbackOne.contentTwo'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.FeedbackOne.contentThree'})}
            </Text>
          </View>

          <View style={styles.gap2}>
            <Text style={styles.line2}>
              {formatMessage({id: 'screen.FeedbackOne.contentFour'})}
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            buttonContent={formatMessage({
              id: 'button.giveFeedback',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={() =>
              navigation.navigate('TabNavigator', {screen: 'FeedbackTwo'})
            }
          />
          <Button
            buttonContent={formatMessage({
              id: 'button.contactCitesSecretariat',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={() =>
              navigation.navigate('TabNavigator', {screen: 'StepOne'})
            }
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: '18@s',
    height: '100@s',
    width: '240@s',
  },
  titleContent: {
    fontWeight: 'bold',
    fontSize: '40@s',
    lineHeight: '49@s',
    letterSpacing: '0.64@s',
  },
  contentContainer: {
    marginTop: '8@s',
  },
  content: {
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato15R,
  },
  gap1: {
    marginTop: '5%',
  },
  gap2: {
    marginTop: '12%',
  },
  line1: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato17R,
  },
  line2: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15R,
  },
  btn: {marginTop: '50@s'},
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '10@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedbackOne;
