import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {useIntl} from 'react-intl';
import CommonStyles from '@styles/CommonStyles';

const FacilityScore = ({navigation: {navigate, goBack}, route}) => {
  const {formatMessage} = useIntl();
  const savedScore = route.params.scoreTotal;

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Container.ScrollView
        style={[CommonStyles.screenContainer, CommonStyles.flex1]}>
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
        <View style={[CommonStyles.shadowEffect, styles.points]}>
          <Text style={styles.score}>{savedScore}</Text>
        </View>
        <Button
          buttonContent={formatMessage({
            id: 'button.continueCaps',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() =>
            navigate('FacilityScoreInformation', {scoreObtained: savedScore})
          }
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: '20@s',
    height: '50@vs',
    width: '136@s',
  },
  titleContent: {
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    ...Fonts.HelveticaNeue30B,
  },
  titleCommon: {
    color: RawColors.grey,
    marginTop: '5%',
    lineHeight: '20@vs',
    letterSpacing: 0.24,
    fontSize: 13,
    ...Fonts.Lato15R,
  },
  contentOne: {
    color: RawColors.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: '12%',
    ...Fonts.HelveticaNeue30B,
  },
  contentTwo: {
    color: RawColors.black,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    ...Fonts.HelveticaNeue30B,
  },
  points: {
    marginHorizontal: '43@s',
    marginTop: '5%',
    backgroundColor: RawColors.lightGrey,
    height: '92@s',
    borderWidth: 4,
    ...Fonts.HelveticaNeue30B,
    borderColor: RawColors.black,
    elevation: 30,
    justifyContent: 'center',
    ...Fonts.HelveticaNeue30B,
  },
  score: {
    alignItems: 'center',
    textAlign: 'center',
    ...Fonts.HelveticaNeue30B,
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '35@vs',
    backgroundColor: RawColors.lightGrey,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
});

export default FacilityScore;
