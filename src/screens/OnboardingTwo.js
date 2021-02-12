import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Container} from '@atoms';
import {RawColors} from '@styles/Themes';

const OnboardingTwo = ({navigation}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardingThree')}>
          <FeatherIcon name="chevron-right" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.OnboardingTwo.title'})}
        </Text>

        <View style={styles.contentContainer}>
          <View style={styles.points}>
            <AntDesignIcon
              name="checkcircle"
              color={RawColors.red}
              style={styles.icon}
            />
            <Text style={styles.content}>
              {formatMessage({id: 'screen.OnboardingTwo.contentOne'})}
            </Text>
          </View>
          <View style={styles.points}>
            <AntDesignIcon
              name="checkcircle"
              color={RawColors.red}
              style={styles.icon}
            />
            <Text style={styles.content}>
              {formatMessage({id: 'screen.OnboardingTwo.contentTwo'})}
            </Text>
          </View>

          <View style={styles.points}>
            <AntDesignIcon
              name="checkcircle"
              color={RawColors.red}
              style={styles.icon}
            />
            <Text style={styles.content}>
              {formatMessage({id: 'screen.OnboardingTwo.contentThree'})}
            </Text>
          </View>

          <View style={styles.points}>
            <AntDesignIcon
              name="checkcircle"
              color={RawColors.red}
              style={styles.icon}
            />
            <Text style={styles.content}>
              {formatMessage({id: 'screen.OnboardingTwo.contentFour'})}
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '20%',
    marginVertical: '20%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15@vs',
    lineHeight: '21@s',
  },
  contentContainer: {
    marginHorizontal: '13%',
  },
  icon: {
    height: '30@vs',
    width: '30@s',
  },
  title: {
    marginVertical: '10%',
    marginHorizontal: '15%',
  },
  points: {flexDirection: 'row', marginVertical: '3%'},
});

export default OnboardingTwo;
