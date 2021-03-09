import React from 'react';
import {Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Header} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const OnboardingOneA = ({
  onBackPress = () => {},
  onForwardPress = () => {},
}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={onBackPress} />
        }
        rightContent={
          <Icon name="chevron-right" size={ms(26)} onPress={onForwardPress} />
        }
      />
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
