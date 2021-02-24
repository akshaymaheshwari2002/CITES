import React, {useEffect} from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingOneA = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('OnboardingTwoA')}>
          <Icon name="chevron-right" size={ms(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ImageBackground
        source={Images.backOnboardingOneA}
        style={CommonStyles.flex1}
        imageStyle={styles.backgroundImage}>
        <Container.ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.OnboardingOneA.title'})}
          </Text>

          <Text style={[styles.content, styles.gap]}>
            {formatMessage({id: 'screen.OnboardingOneA.contentOne'})}
          </Text>
          <Text style={[styles.content, styles.gap]}>
            {formatMessage({id: 'screen.OnboardingOneA.contentTwo'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.OnboardingOneA.contentThree'})}
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
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '34@ms',
    marginTop: '15@s',
    ...Fonts.Lato30R,
  },
  gap: {marginTop: '30@s'},
  content: {
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '30@ms',
    ...Fonts.Lato20R,
  },
  backgroundImage: {
    resizeMode: 'contain',
    position: 'absolute',
  },
});

export default OnboardingOneA;
