import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const InspectionFlow = () => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTopBlur}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logo}>
            <Text style={styles.headerOne}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartOne'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartTwo'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartThree'})}
            </Text>
            <Text style={styles.headerTwo}>
              {formatMessage({id: 'screen.InspectionFlow.headerPartFour'})}
            </Text>
          </View>
          <ImageBackground
            style={styles.backgroundContainer}
            source={Images.backgroundTwoBlur}
            imageStyle={styles.backgroundImage}>
            <ImageBackground
              style={styles.backgroundContainer}
              source={Images.backgroundOne}
              imageStyle={styles.backgroundImage}>
              <View style={styles.contentContainer}>
                <Button
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonOnePartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonOnePartTwo',
                        })}
                      </Text>
                    </>
                  }
                />
                <Button
                  buttonStyle={() => styles.filledButton}
                  buttonTextStyle={() => ({color: RawColors.black})}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonTwoPartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonTwoPartTwo',
                        })}
                      </Text>
                    </>
                  }
                />
                <Button
                  buttonStyle={() => styles.filledButton}
                  buttonContent={
                    <>
                      <Text style={styles.buttonTextOne}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonThreePartOne',
                        })}
                      </Text>
                      <Text style={styles.buttonTextTwo}>
                        {formatMessage({
                          id: 'screen.InspectionFlow.buttonThreePartTwo',
                        })}
                      </Text>
                    </>
                  }
                />
              </View>
            </ImageBackground>
          </ImageBackground>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.greyLight,
  },
  scrollContainer: {
    paddingTop: '146@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '36@vs',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  headerOne: {
    color: RawColors.darkSalmon,
    fontSize: '38@s',
    fontWeight: 'bold',
  },
  headerTwo: {
    color: RawColors.black,
    fontSize: '22@s',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contentContainer: {
    flex: 1,
    width: '294@s',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '80@vs',
    paddingBottom: '36@vs',
  },
  filledButton: {
    width: '294@s',
    height: '84@vs',
    borderWidth: 1,
    borderColor: RawColors.darkSalmon,
    marginBottom: '24@vs',
    alignSelf: 'center',
    //marginTop: '20@vs',
  },
  outlinedButton: {
    width: '294@s',
  },
  buttonTextOne: {
    textAlign: 'left',
    ...Fonts.Lato17R,
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
    marginHorizontal: '20@s',
    marginTop: '18@s',
  },
  buttonTextTwo: {
    textAlign: 'left',
    ...Fonts.Lato17R,
    fontWeight: 'bold',
    color: RawColors.darkGreyBlue,
    alignSelf: 'flex-start',
    marginHorizontal: '20@s',
    marginBottom: '18@s',
  },
  logo: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    top: '73@vs',
    height: '146@vs',
    paddingRight: '45@s',
    //paddingBottom: '20@s',
  },
});

export default InspectionFlow;
