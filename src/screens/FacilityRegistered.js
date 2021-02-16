import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const FacilityRegistered = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FacilityRegistered.title'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityRegistered.contentOne'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityRegistered.contentTwo'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityRegistered.contentThree'})}
          </Text>
          <Button
            buttonContent={
              <>
                <Text style={styles.buttonTextOne}>
                  {formatMessage({
                    id: 'screen.FacilityRegistered.ButtonOnePartOne',
                  })}
                </Text>
                <Text style={styles.buttonTextTwo}>
                  {formatMessage({
                    id: 'screen.FacilityRegistered.ButtonOnePartTwo',
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
          />
          <Button
            buttonContent={formatMessage({
              id: 'screen.FacilityRegistered.ButtonTwo',
            })}
            buttonTextStyle={() => {
              return styles.btnTxt;
            }}
            buttonStyle={() => {
              return styles.btnTwo;
            }}
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
    ...Fonts.Lato15R,
    lineHeight: 20,
    letterSpacing: 0.4,
    color: RawColors.tuna,
    marginTop: '10@s',
  },
  nogap: {
    marginTop: 0,
  },
  btn: {
    height: '80@s',
    marginHorizontal: '15@s',
    marginTop: '24@vs',
    backgroundColor: RawColors.lightGrey,
  },
  btnTwo: {
    height: '40@s',
    marginHorizontal: '15@s',
    marginTop: '44@vs',
    backgroundColor: RawColors.lightGrey,
  },
  btnTxt: {
    fontSize: 15,
    color: RawColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FacilityRegistered;
