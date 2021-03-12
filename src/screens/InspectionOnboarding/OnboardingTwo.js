import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
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
            <Text style={[Fonts.Lato20B, styles.itemHeadline]}>
              {formatMessage({id: 'screen.OnboardingTwo.title'})}
            </Text>
            {points.map(({icon, labelId}, index) => (
              <View key={index} style={styles.item}>
                <Image source={icon} style={styles.itemIcon} />
                <View style={styles.textView}>
                  <Text style={styles.text}>
                    {formatMessage({id: labelId})}
                  </Text>
                </View>
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
    paddingVertical: '30@vs',
    marginHorizontal: '20@vs',
    backgroundColor: RawColors.transparent,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  itemHeadline: {
    marginVertical: '15@vs',
  },
  item: {
    flexDirection: 'row',
    marginRight: '8@s',
    marginVertical: '15@vs',
  },
  backgroundImage: {
    resizeMode: 'center',
    paddingLeft: '700@s',
  },
  itemIcon: {
    alignSelf: 'flex-start',
    width: '22@ms',
    height: '22@ms',
    resizeMode: 'contain',
    marginLeft: '6@ms',
    marginRight: '15@ms',
    marginTop: '2@ms',
  },
  textView: {
    flex: 1,
  },
  text: {
    ...Fonts.Lato20R,
  },
});

export default OnboardingTwo;
