import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const FeedbackOne = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
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
          <Image source={Images.grassHopper} style={styles.grassHopper} />
          <Button
            buttonContent={formatMessage({
              id: 'button.back',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={() => navigation.goBack()}
          />
          <Button
            buttonContent={formatMessage({
              id: 'button.contactCitesSecretariat',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return [styles.button, styles.gap3];
            }}
            onPress={() =>
              navigation.navigate('TabNavigator', {screen: 'NoExport'})
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
    ...Fonts.HelveticaNeue30B,
    //lineHeight: '49@s',
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
  grassHopper: {
    resizeMode: 'contain',
    width: '56@s',
    alignSelf: 'flex-end',
    marginRight: '60@s',
  },
  gap1: {
    marginTop: '20@vs',
  },
  gap2: {
    marginTop: '30@s',
  },
  gap3: {marginTop: '20@s'},
  line1: {
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato17B,
  },
  line2: {
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15B,
  },
  btn: {marginTop: '5@vs'},
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
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
