import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Fonts, RawColors} from '@styles/Themes';
import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const FacilityInfringement = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
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
    alignSelf: 'center',
    ...Fonts.Lato15R,
    lineHeight: 22,
    letterSpacing: 0.36,
    color: RawColors.tuna,
    marginTop: '30@s',
  },
  nogap: {
    marginTop: 0,
  },
});

export default FacilityInfringement;
