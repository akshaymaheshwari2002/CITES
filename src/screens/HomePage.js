import React, {useCallback} from 'react';
import {Image, ImageBackground, View, Text, Dimensions} from 'react-native';
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
  const {height, width} = Dimensions.get('window');
  const aspectRatio = height / width;

  const handlePress = useCallback(() => {
    navigation.navigate('InspectionFlow');
  }, [navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <ImageBackground
        style={styles.container}
        source={aspectRatio > 1.6 ? Images.fullBgTwo_2 : Images.fullBgTwo_1}
        imageStyle={styles.resizeModeRepeat}>
        <Container.ScrollView contentContainerStyle={styles.scrollContainer}>
          <Image source={Images.logo} style={styles.logo} />
          <Text style={styles.content}>
            {formatMessage({id: 'screen.languageSelection.contentOne'})}
          </Text>

          <View style={styles.contentContainer}>
            <Button
              onPress={handlePress}
              buttonStyle={() => styles.filledButton}
              buttonTextStyle={() => styles.buttonText}
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
              buttonTextStyle={() => styles.buttonText}
              buttonContent={formatMessage({
                id: 'button.determineSourceCode',
              })}
            />
            <Button
              onPress={() => {
                navigation.navigate('TabNavigator', {
                  screen: 'FeedbackTwo',
                });
              }}
              buttonContent={formatMessage({
                id: 'button.giveFeedback',
              })}
              buttonTextStyle={() => [
                styles.buttonText,
                {color: RawColors.black},
              ]}
              buttonStyle={() => styles.emptyButton}
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
    backgroundColor: RawColors.darkSalmon,
  },
  resizeModeRepeat: {},
  scrollContainer: {
    paddingTop: '120@vs',
    backgroundColor: RawColors.transparent,
  },
  backgroundContainer: {
    flexGrow: 1,
    paddingTop: '28@vs',
  },
  backgroundImage: {},
  logo: {
    position: 'absolute',
    top: '50@vs',
    resizeMode: 'contain',
    alignSelf: 'center',
    height: '97@vs',
    width: '169@s',
  },
  content: {
    position: 'absolute',
    top: '148@vs',
    alignSelf: 'center',
    ...Fonts.Lato30R,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyButton: {
    marginVertical: '16@vs',
    backgroundColor: RawColors.sugarCane,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: RawColors.white,
    textAlign: 'center',
    lineHeight: '22@ms',
    ...Fonts.Lato15R,
  },
});

export default HomePage;
