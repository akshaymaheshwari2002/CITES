import React, {useCallback} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import {setContinueToStepTwo} from '@store/slices/sessionSlice';

const HomePage = ({navigation}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();

  const handlePress = useCallback(() => {
    navigation.navigate('InspectionFlow');
  }, [navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={Images.backgroundPatternTop}
        imageStyle={styles.resizeModeRepeat}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={Images.logo} style={styles.logo} />
          <ImageBackground
            style={styles.backgroundContainer}
            source={Images.backgroundThree}
            imageStyle={styles.backgroundImage}>
            <ImageBackground
              style={styles.backgroundContainer}
              source={Images.backgroundTwo}
              imageStyle={styles.backgroundImage}>
              <ImageBackground
                style={styles.backgroundContainer}
                source={Images.backgroundOne}
                imageStyle={styles.backgroundImage}>
                <View style={styles.contentContainer}>
                  <Button
                    onPress={handlePress}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'button.inspectFacility',
                    })}
                  />
                  <Button
                    onPress={() => {
                      dispatch(setContinueToStepTwo(false));
                      navigation.navigate('SourceFlow');
                    }}
                    buttonStyle={() => styles.filledButton}
                    buttonTextStyle={() => ({color: RawColors.white})}
                    buttonContent={formatMessage({
                      id: 'button.determineSourceCode',
                    })}
                  />
                  <Button
                    onPress={() => {}}
                    buttonContent={formatMessage({
                      id: 'button.giveFeedback',
                    })}
                    buttonStyle={() => styles.emptyButton}
                  />
                </View>
              </ImageBackground>
            </ImageBackground>
          </ImageBackground>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: RawColors.darkSalmon,
  },
  resizeModeRepeat: {
    resizeMode: 'repeat',
  },
  scrollContainer: {
    paddingTop: '120@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '28@vs',
  },
  backgroundImage: {
    resizeMode: 'stretch',
  },
  logo: {
    position: 'absolute',
    top: '80@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '146@vs',
    width: '250@s',
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
  buttonText: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15R,
  },
});

export default HomePage;
