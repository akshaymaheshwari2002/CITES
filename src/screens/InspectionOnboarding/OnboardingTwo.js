import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container, Header} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const points = [
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentOne',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentTwo',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentThree',
  },
  {
    icon: Images.tick,
    labelId: 'screen.OnboardingTwo.contentFour',
  },
];

const OnboardingTwo = ({onBackPress = () => {}, onForwardPress = () => {}}) => {
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
        source={Images.onboardingTwo}
        style={CommonStyles.flex1}
        imageStyle={styles.backgroundImage}>
        <Container.ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={[Fonts.Lato20R, styles.itemHeadline]}>
              {formatMessage({id: 'screen.OnboardingTwo.title'})}
            </Text>
            {points.map(({icon, labelId}, index) => (
              <View key={index} style={styles.item}>
                <Image source={icon} style={styles.itemIcon} />
                <Text style={[CommonStyles.flex1, Fonts.Lato20R]}>
                  {formatMessage({id: labelId})}
                </Text>
              </View>
            ))}
          </View>
        </Container.ScrollView>
      </ImageBackground>
    </Container>
  );
};

const styles = ScaledSheet.create({
  contentContainer: {
    paddingVertical: '60@vs',
    backgroundColor: RawColors.transparent,
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    height: '30@vs',
    width: '30@s',
  },
  itemHeadline: {
    marginVertical: '15@vs',
  },
  item: {
    flexDirection: 'row',
    marginLeft: '8@s',
    marginVertical: '12@vs',
  },
  backgroundImage: {
    resizeMode: 'center',
    paddingLeft: '700@s',
  },
  itemIcon: {
    width: '22@ms',
    height: '22@ms',
    resizeMode: 'contain',
    marginRight: '16@ms',
    marginTop: '2@ms',
  },
});

export default OnboardingTwo;
