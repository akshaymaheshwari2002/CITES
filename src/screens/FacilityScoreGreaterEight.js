import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '@atoms';
import {ScaledSheet} from 'react-native-size-matters';

import {Fonts, RawColors} from '@styles/Themes';
import {useIntl} from 'react-intl';
import CommonStyles from '@styles/CommonStyles';

const FacilityScoreGreaterEight = () => {
  const {formatMessage} = useIntl();

  return (
    <Container>
      <View style={CommonStyles.screenContainer}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({
              id: 'screen.FacilityScore.headerPartOne',
            })}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({
              id: 'screen.FacilityScore.headerPartTwo',
            })}
          </Text>
        </View>
        <Text style={styles.titleCommon}>
          {formatMessage({id: 'screen.FacilityScore.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FacilityScoreGreaterEight.contentOne'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FacilityScoreGreaterEight.contentTwo'})}
        </Text>
        <Text style={styles.contentThree}>
          {formatMessage({id: 'screen.FacilityScoreGreaterEight.contentThree'})}
        </Text>
      </View>
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
    fontSize: 22,
    textAlign: 'center',
    marginTop: '12%',
  },
  contentTwo: {
    color: RawColors.black,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  contentThree: {
    color: RawColors.black,
    marginHorizontal: '16@s',
    marginTop: '23@s',
    textAlign: 'center',
    lineHeight: '15@s',
    letterSpacing: '0.36@s',
    fontSize: 13,
  },
});

export default FacilityScoreGreaterEight;
