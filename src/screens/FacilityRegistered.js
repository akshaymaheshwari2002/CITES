import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import Config from '@config';

const FacilityRegistered = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FacilityRegistered.title'})}
          </Text>
          <Text style={styles.text}>
            {formatMessage({id: 'screen.FacilityRegistered.contentOnePartOne'})}
            <Text style={[styles.text, {...Fonts.Lato15B}]}>
              {formatMessage({
                id: 'screen.FacilityRegistered.contentOnePartTwo',
              })}
            </Text>
            {formatMessage({
              id: 'screen.FacilityRegistered.contentOnePartThree',
            })}
          </Text>
          <Text style={styles.text}>
            {formatMessage({id: 'screen.FacilityRegistered.contentTwo'})}
          </Text>
          <Text style={styles.text}>
            {formatMessage({
              id: 'screen.FacilityRegistered.contentThreePartOne',
            })}
            <Text style={[styles.text, {...Fonts.Lato15B}]}>
              {formatMessage({
                id: 'screen.FacilityRegistered.contentThreePartTwo',
              })}
            </Text>
            {formatMessage({
              id: 'screen.FacilityRegistered.contentThreePartThree',
            })}
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
  container: {
    flexGrow: 1,
    paddingHorizontal: '16@s',
  },
  title: {
    ...Fonts.HelveticaNeue30B,
    marginTop: '30@vs',
  },
  content: {
    flex: 1,
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
