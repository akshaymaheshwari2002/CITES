import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets';

const OnboardingThree = ({
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
      <Container.ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.contentOne'})}
          </Text>
          <Text style={styles.txt}>
            {formatMessage({id: 'screen.OnboardingThree.contentTwo'})}
          </Text>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={Images.onboardingThree} />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: RawColors.white,
    paddingHorizontal: '16@s',
  },
  txt: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    marginTop: '16@vs',
  },
  content: {
    ...CommonStyles.flex1,
    justifyContent: 'space-evenly',
  },
  img: {
    resizeMode: 'contain',
    height: '305@vs',
    width: '317@s',
  },
  imgContainer: {
    marginTop: '10@vs',
  },
});

export default OnboardingThree;
