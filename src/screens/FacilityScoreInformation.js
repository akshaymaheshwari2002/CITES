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
            <Text>
              {formatMessage({
                id: 'screen.FacilityScoreLessEight.contentThreePartOne',
              })}
            </Text>
            <Text style={{...Fonts.Lato17B}}>
              {formatMessage({
                id: 'screen.FacilityScoreLessEight.contentThreePartTwo',
              })}
            </Text>
            <Text>
              {formatMessage({
                id: 'screen.FacilityScoreLessEight.contentThreePartThree',
              })}
            </Text>
          </Text>
        ) : score > 11 ? (
          <>
            <Text style={styles.contentThree}>
              <Text>
                {formatMessage({
                  id: 'screen.FacilityScoreGreaterEleven.contentThreePartOne',
                })}
                <Text style={{...Fonts.Lato17B}}>
                  {formatMessage({
                    id: 'screen.FacilityScoreGreaterEleven.contentThreePartTwo',
                  })}
                </Text>
                <Text>
                  {formatMessage({
                    id:
                      'screen.FacilityScoreGreaterEleven.contentThreePartThree',
                  })}
                </Text>
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
            <Text>
              {formatMessage({
                id: 'screen.FacilityScoreGreaterEight.contentThreePartOne',
              })}
            </Text>
            <Text style={{...Fonts.Lato17B}}>
              {formatMessage({
                id: 'screen.FacilityScoreGreaterEight.contentThreePartTwo',
              })}
            </Text>
            <Text>
              {formatMessage({
                id: 'screen.FacilityScoreGreaterEight.contentThreePartThree',
              })}
            </Text>
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
    marginTop: '10@ms',
    lineHeight: '20@vs',
    letterSpacing: 0.2,
    ...Fonts.Lato15R,
  },
  contentOne: {
    color: RawColors.black,
    textAlign: 'center',
    marginTop: '20@ms',
    ...Fonts.HelveticaNeue30B,
  },
  contentTwo: {
    color: RawColors.black,
    ...Fonts.HelveticaNeue30B,
    textAlign: 'center',
  },
  contentThree: {
    color: RawColors.black,
    marginHorizontal: '10@s',
    marginTop: '15@s',
    textAlign: 'center',
    lineHeight: '18@s',
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
    marginVertical: '25@vs',
    backgroundColor: RawColors.lightGrey,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
});

export default FacilityScoreInformation;
