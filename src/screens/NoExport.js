import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets/';
import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const NoExport = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
        rightContent={
          <IconAntDesign
            name="pluscircle"
            size={ms(26)}
            onPress={() => {
              navigate('MoreInformation');
            }}
          />
        }
      />
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.title}>
          <Text style={styles.titleOne}>
            {formatMessage({id: 'screen.NoExport.header'})}
          </Text>
        </View>
        <View style={styles.backColor}>
          <Image
            source={Images.logo}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.contentOne}>
            {formatMessage({id: 'screen.NoExport.contentOne'})}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'general.continue',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={() => navigate('HomePage')}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.whiteTwo,
  },
  title: {
    height: '216@vs',
    backgroundColor: RawColors.darkRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleOne: {
    ...Fonts.Lato15B,
    lineHeight: '19@s',
    letterSpacing: '0.41@s',
    textAlign: 'center',
    marginHorizontal: '40@s',
  },
  backColor: {
    backgroundColor: 'white',
  },
  contentOne: {
    alignSelf: 'center',
    ...Fonts.Lato15B,
    marginTop: '50@s',
    color: RawColors.black,
  },
  icon: {
    height: '112@ms',
    width: '198@ms',
    marginTop: '80@vs',
    alignSelf: 'center',
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginTop: '50@vs',
    backgroundColor: RawColors.eggshell,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.marine,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoExport;
