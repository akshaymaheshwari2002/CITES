import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';
import {Container, Button} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const StepsSummary = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container>
      <Container.ScrollView contentContainerStyle={styles.contentContainer}>
        <ImageBackground
          source={Images.semiCircle}
          style={CommonStyles.flex1}
          imageStyle={styles.backgroundImage}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartOne'})}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartTwo'})}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartThree'})}
          </Text>
          <View style={styles.pointsContainer}>
            <View style={[styles.pointRow, styles.pointOne]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato20B, {color: RawColors.white}]}>1</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentOne'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View style={[styles.pointRow, styles.pointTwo]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato20B, {color: RawColors.white}]}>2</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentTwo'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
            <View style={[styles.pointRow, styles.pointThree]}>
              <View style={styles.numberContainer}>
                <Text style={[Fonts.Lato20B, {color: RawColors.white}]}>3</Text>
              </View>
              <View>
                <Text style={styles.pointTitle}>
                  {formatMessage({id: 'screen.StepsSummary.contentThree'})}
                </Text>
                <Text style={styles.pointContent}>
                  {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                </Text>
              </View>
            </View>
          </View>
          <Button
            onPress={() =>
              navigation.navigate('StepOne', {
                screen: 'StepOne',
                params: {showToolTip: false},
              })
            }
            buttonContent={formatMessage({
              id: 'screen.InspectionFlow.buttonTwoPartTwo',
            })}
            buttonTextStyle={() => styles.buttonText}
            buttonStyle={() => styles.button}
          />
        </ImageBackground>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    backgroundColor: RawColors.transparent,
    paddingHorizontal: '16@s',
    paddingTop: '16@vs',
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
    left: '-110%',
  },
  title: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '30@ms',
    letterSpacing: '0.48@ms',
  },
  pointsContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginTop: '46@vs',
    marginBottom: '90@ms',
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointOne: {marginLeft: '30%'},
  pointTwo: {marginLeft: '42%', paddingVertical: '28@vs'},
  pointThree: {marginLeft: '30%'},
  numberContainer: {
    height: '46@ms',
    width: '46@ms',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.softRed,
    borderRadius: '23@ms',
    marginRight: '16@s',
  },
  pointTitle: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '30@ms',
    color: RawColors.darkGrey,
  },
  pointContent: {
    ...Fonts.Lato17R,
    lineHeight: '17@ms',
    color: RawColors.darkGrey,
  },
  button: {
    marginBottom: '16@vs',
  },
  buttonText: {
    textTransform: 'uppercase',
    color: RawColors.black,
    ...Fonts.Lato20B,
  },
});

export default StepsSummary;
