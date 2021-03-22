import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const FacilityInfringement = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.content}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FacilityInfringement.title'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentOne'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentTwo'})}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({id: 'screen.FacilityInfringement.contentThree'})}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({id: 'screen.FacilityInfringement.contentFour'})}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({id: 'screen.FacilityInfringement.contentFive'})}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({id: 'screen.FacilityInfringement.contentSix'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentSeven'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentEight'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentNine'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FacilityInfringement.contentTen'})}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.continueWithStep1',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
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
    ...Fonts.HelveticaNeue30B,
  },
  content: {
    ...Fonts.Lato15R,
    color: RawColors.tuna,
    marginTop: '30@s',
  },
  nogap: {
    marginTop: 0,
  },
  button: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '34@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FacilityInfringement;
