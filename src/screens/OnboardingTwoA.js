import React, {useEffect} from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingTwoA = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardingThreeA')}>
          <Icon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ImageBackground
        source={Images.onboardingTwo}
        style={CommonStyles.flex1}
        imageStyle={styles.backgroundImage}>
        <Container.ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.OnboardingTwoA.title'})}
          </Text>

          <Text style={styles.content}>
            {formatMessage({id: 'screen.OnboardingTwoA.contentOne'})}
          </Text>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    paddingHorizontal: '34@s',
    paddingVertical: 30,
    backgroundColor: RawColors.transparent,
  },
  content: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginTop: '15@s',
    paddingBottom: '15@s',
    ...Fonts.Lato20R,
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginTop: '15@s',
    ...Fonts.Lato30R,
  },
  backgroundImage: {
    resizeMode: 'center',
    position: 'absolute',
    paddingLeft: '600@s',
    paddingTop: '600@s',
  },
});

export default OnboardingTwoA;
