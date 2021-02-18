import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const StepsSummary = ({navigation}) => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <ImageBackground
        source={Images.onboardingTwo}
        style={CommonStyles.flex1}
        imageStyle={styles.backgroundImage}>
        <Container.ScrollView style={styles.contentContainer}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartOne'})}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartTwo'})}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.StepsSummary.headerPartThree'})}
          </Text>
          <View style={styles.contentContainer}>
            <View style={styles.one}>
              <View style={styles.point}>
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>1</Text>
                </View>
                <View styles={styles.point1}>
                  <Text style={styles.content}>
                    {formatMessage({id: 'screen.StepsSummary.contentOne'})}
                  </Text>
                  <Text style={styles.txt}>
                    {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.two}>
              <View style={styles.point}>
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>2</Text>
                </View>
                <View style={styles.point1}>
                  <Text style={styles.content}>
                    {formatMessage({id: 'screen.StepsSummary.contentTwo'})}
                  </Text>
                  <Text style={styles.txt}>
                    {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.three}>
              <View style={styles.point}>
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>3</Text>
                </View>
                <View style={styles.point1}>
                  <Text style={styles.content}>
                    {formatMessage({id: 'screen.StepsSummary.contentThree'})}
                  </Text>
                  <Text style={styles.txt}>
                    {formatMessage({id: 'screen.StepsSummary.contentFour'})}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Button
            onPress={() => navigation.navigate('StepOne', {showToolTip: false})}
            buttonContent="BEGIN INSPECTION"
            buttonTextStyle={() => {
              return styles.btnTxt;
            }}
            buttonStyle={() => {
              return styles.btn;
            }}
          />
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    backgroundColor: RawColors.transparent,
    marginHorizontal: '16@s',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '22@s',
  },
  content: {
    marginHorizontal: '10@s',
    fontSize: '22@s',
    fontWeight: 'bold',
    color: RawColors.darkGrey,
  },
  txt: {
    fontSize: '14@s',
    marginLeft: '8@s',
    color: RawColors.darkGrey,
    flexDirection: 'column',
  },
  numberContainer: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.softRed,
    borderRadius: 20,
  },
  number: {
    fontSize: 20,
    color: RawColors.white,
  },
  backgroundImage: {
    resizeMode: 'center',
  },
  btn: {
    height: '40@s',
    marginHorizontal: '15@s',
    marginVertical: '20@vs',
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: RawColors.black,
  },
  point: {flexDirection: 'row'},
  point1: {flexDirection: 'column'},
  one: {marginLeft: '30%', marginVertical: '28@s'},
  two: {marginLeft: '42%', marginVertical: '34@s'},
  three: {marginLeft: '30%', marginVertical: '40@s'},
});

export default StepsSummary;
