import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import Config from '@config';

const FacilityRegistered = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
      />
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FacilityRegistered.title'})}
          </Text>
          <Text style={styles.text}>
            {formatMessage({id: 'screen.FacilityRegistered.contentOne'})}
          </Text>
          <Text style={styles.text}>
            {formatMessage({id: 'screen.FacilityRegistered.contentTwo'})}
          </Text>
          <Text style={styles.text}>
            {formatMessage({id: 'screen.FacilityRegistered.contentThree'})}
          </Text>
          <Button
            buttonContent={
              <>
                <Text style={styles.btnTxt}>
                  {formatMessage({
                    id: 'button.citesRegister',
                  })}
                </Text>
                <Text style={styles.btnTxt}>
                  {formatMessage({
                    id: 'button.AppendixI',
                  })}
                </Text>
              </>
            }
            buttonTextStyle={() => {
              return styles.btnTxt;
            }}
            buttonStyle={() => {
              return styles.btn;
            }}
            onPress={() =>
              navigate('WebView', {
                sourceUri: Config.URL_CITES_REGISTER_FOR_APPENDIX1_SPECIES,
              })
            }
          />
          <Button
            buttonContent={formatMessage({
              id: 'button.continueWithStep1',
            })}
            buttonTextStyle={() => {
              return styles.btnTxt;
            }}
            buttonStyle={() => {
              return styles.btnTwo;
            }}
            onPress={() => navigate('TabNavigator', {screen: 'StepOne'})}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    ...Fonts.HelveticaNeue25B,
  },
  content: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    color: RawColors.tuna,
    marginTop: '10@s',
    ...Fonts.Lato15R,
  },
  btn: {
    height: '80@vs',
    marginHorizontal: '15@s',
    marginTop: '24@vs',
    backgroundColor: RawColors.lightGrey,
  },
  btnTwo: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  btnTxt: {
    ...Fonts.Lato15R,
    color: RawColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FacilityRegistered;
