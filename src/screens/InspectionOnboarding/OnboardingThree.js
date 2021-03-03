import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';

import {Fonts} from '@styles/Themes';
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
      <Container.ScrollView style={CommonStyles.screenContainer}>
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
  txt: {
    textAlign: 'center',
    ...Fonts.Lato20R,
    marginTop: '15@vs',
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: '15@s',
  },
  img: {
    resizeMode: 'contain',
    height: '305@vs',
    width: '317@s',
  },
  imgContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginTop: 'auto',
  },
});

export default OnboardingThree;
