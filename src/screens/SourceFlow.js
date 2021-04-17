import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';
import {vs, ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';

const SourceFlow = ({navigation}) => {
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
            <Text style={[styles.header, {marginTop: vs(5)}]}>
              {formatMessage({id: 'screen.SourceFlow.headerPartTwo'})}
            </Text>
            <Text style={styles.header}>
              {formatMessage({id: 'screen.SourceFlow.headerPartThree'})}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Button
              onPress={() =>
                navigation.navigate('SourceCodeDeterminationOnboarding')
              }
              buttonStyle={() => styles.filledButton}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.buttonText}>
                    {formatMessage({
                      id: 'button.learnSourceCode',
                    })}
                  </Text>
                </>
              }
            />
            <Button
              onPress={() =>
                navigation.navigate('TabNavigator', {
                  screen: 'DetermineSourceCode',
                })
              }
              buttonStyle={() => styles.filledButton}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.buttonText}>
                    {formatMessage({
                      id: 'button.determineSourceCodeOf',
                    })}
                  </Text>
                </>
              }
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.giveFeedback',
              })}
              buttonStyle={() => styles.emptyButton}
              onPress={() =>
                navigation.navigate('TabNavigator', {
                  screen: 'FeedbackTwo',
                })
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
  scrollContainer: {
    paddingTop: '148@vs',
    backgroundColor: RawColors.transparent,
  },
  headerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: '78.4%',
    top: '58@vs',
  },
  eye: {
    height: '60@vs',
    aspectRatio: 1.3194,
    alignSelf: 'flex-end',
    marginVertical: '10@vs',
  },
  header: {
    color: RawColors.darkGreyBlue,
    ...Fonts.HelveticaNeue26B,
    textAlign: 'right',
    lineHeight: '26@ms',
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
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15R,
  },
});

export default SourceFlow;
