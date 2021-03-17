import React from 'react';
import {Text, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
import {Container, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingThreeA = ({
  onBackPress = () => {},
  onForwardPress = () => {},
  headerDots = () => {},
}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={onBackPress} />
        }
        content={headerDots()}
        rightContent={
          <Icon name="chevron-right" size={ms(26)} onPress={onForwardPress} />
        }
      />
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.content}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThreeA.contentOne'})}
          </Text>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={Images.onboardingThreeA} />
          </View>
          <View style={styles.imgContainerTwo}>
            <Image style={styles.img} source={Images.onboardingThreeAPartTwo} />
          </View>
          <View style={styles.imgContainerThree}>
            <Image style={styles.img} source={Images.backgroundNavbarLower} />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Fonts.Lato20R,
    lineHeight: '30@s',
    marginVertical: '30@vs',
  },
  content: {
    alignSelf: 'center',
    paddingHorizontal: '15@vs',
    justifyContent: 'space-evenly',
  },
  img: {
    resizeMode: 'contain',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainerTwo: {
    marginLeft: '75@s',
  },
  imgContainerThree: {
    marginLeft: '50@s',
    paddingBottom: '40@s',
  },

  backImage: {
    resizeMode: 'contain',
  },
});

export default OnboardingThreeA;
