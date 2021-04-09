import React from 'react';
import {View, Text} from 'react-native';
import {Container, Button} from '@atoms';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';
import {useIntl} from 'react-intl';
import CommonStyles from '@styles/CommonStyles';

const FacilityScoreInformation = ({navigation: {navigate, goBack}, route}) => {
  const {formatMessage} = useIntl();
  const score = route.params.scoreObtained;

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Container.ScrollView
        style={[CommonStyles.screenContainer, CommonStyles.flex1]}>
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
        {score < 8 ? (
          <Text style={styles.contentOne}>
            {formatMessage({id: 'screen.FacilityScoreLessEight.contentOne'})}
          </Text>
        ) : score > 11 ? (
          <Text style={styles.contentOne}>
            {formatMessage({
              id: 'screen.FacilityScoreGreaterEleven.contentOne',
            })}
          </Text>
        ) : (
          <Text style={styles.contentOne}>
            {formatMessage({id: 'screen.FacilityScoreGreaterEight.contentOne'})}
          </Text>
        )}
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FacilityScoreInformation.contentTwo'})}
        </Text>
        {score < 8 ? (
          <Text style={styles.contentThree}>
            {formatMessage({id: 'screen.FacilityScoreLessEight.contentThree'})}
          </Text>
        ) : score > 11 ? (
          <>
            <Text style={styles.contentThree}>
              {formatMessage({
                id: 'screen.FacilityScoreGreaterEleven.contentThreePartOne',
              })}
              <Text style={styles.content}>
                {formatMessage({
                  id: 'screen.FacilityScoreGreaterEleven.contentThreePartTwo',
                })}
              </Text>
              <Text style={{...Fonts.Lato15R}}>
                {formatMessage({
                  id: 'screen.FacilityScoreGreaterEleven.contentThreePartThree',
                })}
              </Text>
            </Text>
            <Text style={styles.contentThree}>
              {formatMessage({
                id: 'screen.FacilityScoreGreaterEleven.contentThreePartFour',
              })}
            </Text>
          </>
        ) : (
          <Text style={styles.contentThree}>
            {formatMessage({
              id: 'screen.FacilityScoreGreaterEight.contentThree',
            })}
          </Text>
        )}
        <Button
          buttonContent={formatMessage({
            id: 'button.continueWithStep3',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => navigate('StepThree')}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: '20@s',
    // height: '62@vs',
    // width: '136@s',
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
    textAlign: 'center',
    marginTop: '12%',
    ...Fonts.Lato22B,
  },
  contentTwo: {
    color: RawColors.black,
    ...Fonts.Lato22B,
    textAlign: 'center',
  },
  contentThree: {
    color: RawColors.black,
    marginHorizontal: '16@s',
    marginTop: '23@s',
    textAlign: 'center',
    lineHeight: '15@s',
    letterSpacing: '0.36@s',
    ...Fonts.Lato15R,
  },
  content: {
    ...Fonts.Lato15B,
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '20@vs',
    backgroundColor: RawColors.lightGrey,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
});

export default FacilityScoreInformation;
