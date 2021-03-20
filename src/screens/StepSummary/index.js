import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const StepSummary = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.title}>
          <Text style={styles.titleOne}>
            {formatMessage({id: 'screen.StepSummary.headerPartOne'})}
          </Text>
          <Text style={styles.titleTwo}>
            {formatMessage({id: 'screen.StepSummary.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.backColor}>
          <View style={styles.margin}>
            <Text style={styles.contentOne}>
              {formatMessage({id: 'screen.StepSummary.contentOne'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentTwo'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentThree'})}
            </Text>

            <Button
              buttonContent={formatMessage({
                id: 'button.printForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate()}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.shareForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate()}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.beginNewInspection',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('InspectionFlow')}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.exit',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('LanguageSelection')}
            />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.whiteTwo,
  },
  margin: {
    marginHorizontal: '30@s',
    alignItems: 'center',
  },
  title: {
    height: '100@s',
    backgroundColor: 'white',
  },
  titleOne: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    marginLeft: '15@s',
    marginTop: '20@s',
  },
  titleTwo: {
    ...Fonts.Lato15R,
    color: RawColors.charcoalGrey60,
    lineHeight: '18@s',
    marginTop: '10@s',
    marginLeft: '15@s',
    letterSpacing: '0.09@s',
  },
  backColor: {
    backgroundColor: 'white',
    marginTop: '30@s',
  },
  contentOne: {
    width: '100%',
    ...Fonts.Lato20SB,
    marginTop: '30@s',
    color: RawColors.black,
  },
  content: {
    width: '100%',
    ...Fonts.Lato17R,
    lineHeight: 22,
    letterSpacing: 0.41,
    marginTop: '20@s',
    color: RawColors.black,
  },
  button: {
    height: '46@vs',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '22@vs',
    backgroundColor: RawColors.eggshell,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.marine,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepSummary;
