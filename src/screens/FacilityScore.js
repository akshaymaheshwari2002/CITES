import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '@atoms';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import {useIntl} from 'react-intl';
import CommonStyles from '@styles/CommonStyles';

const FacilityScore = () => {
  const {formatMessage} = useIntl();

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FacilityScore.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FacilityScore.headerPartTwo'})}
          </Text>
        </View>
        <Text style={styles.titleCommon}>
          {formatMessage({id: 'screen.FacilityScore.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FacilityScore.contentOne'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FacilityScore.contentTwo'})}
        </Text>
        <View style={[CommonStyles.shadowEffect, styles.points]} />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: '20@s',
    height: '62@vs',
    width: '136@s',
  },
  titleContent: {
    fontWeight: 'bold',
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    fontSize: 28,
  },
  titleCommon: {
    color: RawColors.grey,
    marginTop: '5%',
    lineHeight: '20@vs',
    letterSpacing: 0.24,
    fontSize: 13,
  },
  contentOne: {
    color: RawColors.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '12%',
  },
  contentTwo: {
    color: RawColors.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  points: {
    marginHorizontal: '43@s',
    marginTop: '5%',
    backgroundColor: RawColors.lightGrey,
    height: '92@s',
    borderWidth: 4,
    borderColor: RawColors.black,
    elevation: 30,
  },
});

export default FacilityScore;
