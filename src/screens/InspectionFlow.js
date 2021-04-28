import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const InspectionFlow = ({navigation}) => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <ImageBackground
        style={styles.container}
        source={Images.fullBg}
        imageStyle={styles.resizeModeRepeat}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={Images?.eye}
              style={styles.eye}
              resizeMode="contain"
            />
            <Text style={styles.header}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartTwo'})}
            </Text>
            <Text style={styles.header}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartThree'})}
            </Text>
            <Text style={styles.header}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartFour'})}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Button
              onPress={() => navigation.navigate('InspectionOnboarding')}
              buttonStyle={() => styles.filledButton}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.buttonTextOne}>
                    {formatMessage({
                      id: 'button.learnUseApp',
                    })}
                  </Text>

                  <Text style={styles.buttonTextTwo}>
                    {formatMessage({
                      id: 'button.firstInspection',
                    })}
                  </Text>
                </>
              }
            />
            <Button
              onPress={() =>
                navigation.navigate('TabNavigator', {
                  screen: 'BeginInspection',
                })
              }
              buttonStyle={() => styles.filledButton}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.buttonTextOne}>
                    {formatMessage({
                      id: 'button.beginInspection',
                    })}
                  </Text>

                  <Text style={styles.buttonTextTwo}>
                    {formatMessage({
                      id: 'button.newInspection',
                    })}
                  </Text>
                </>
              }
            />
            <Button
              onPress={() =>
                navigation.navigate('TabNavigator', {
                  screen: 'ContinueInspection',
                })
              }
              buttonStyle={() => styles.filledButton}
              buttonContent={
                <>
                  <Text style={styles.buttonTextOne}>
                    {formatMessage({
                      id: 'button.continueInspection',
                    })}
                  </Text>
                  <Text style={styles.buttonTextTwo}>
                    {formatMessage({
                      id: 'button.startedInspection',
                    })}
                  </Text>
                </>
              }
            />
          </View>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: RawColors.greyLight,
  },
  resizeModeRepeat: {},
  scrollContainer: {
    paddingTop: '148@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '28@vs',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  headerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'flex-end',
    top: '45@vs',
    right: '25@s',
  },
  eye: {
    height: '60@vs',
    aspectRatio: 1.3194,
    alignSelf: 'flex-end',
    marginVertical: '10@vs',
  },
  header: {
    color: RawColors.darkGreyBlue,
    ...Fonts.HelveticaNeue25B,
    width: '290@s',
    textAlign: 'right',
    paddingLeft: '1@s',
    lineHeight: '30@s',
    letterSpacing: '0.45@ms',
  },
  contentContainer: {
    flex: 1,
    width: '78.4%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '84@vs',
    paddingBottom: '16@vs',
  },
  filledButton: {
    marginVertical: '16@vs',
    backgroundColor: RawColors.darkSalmon,
    minHeight: '66@vs',
    borderWidth: 0,
  },
  emptyButton: {
    marginVertical: '16@vs',
  },
  buttonTextOne: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15R,
  },
  buttonTextTwo: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15I,
  },
});

export default InspectionFlow;
