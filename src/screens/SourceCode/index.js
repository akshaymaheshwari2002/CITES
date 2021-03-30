import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms, s} from 'react-native-size-matters';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import SourceCodeData from './SourceCodeData';

const SourceCode = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const resultSourceCode = route.params?.selectedSourceCode;
  const continueToStepTwo = useSelector(
    (state) => state.sessionReducer.continueToStepTwo,
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconAntDesign
          name="pluscircle"
          size={ms(26)}
          onPress={() => navigation.navigate('MoreInformation')}
        />
      ),
    });
  }, [navigation]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView style={CommonStyles.flex1}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {formatMessage({id: 'screen.SourceCode.title'})}
            </Text>
            {!(resultSourceCode === 'NotApplicable') ? (
              <Text style={styles.letter}>{resultSourceCode}</Text>
            ) : (
              <Text style={styles.notApplicableText}>
                {formatMessage({id: 'screen.SourceCode.NotApplicable.letter'})}
              </Text>
            )}
          </View>
          <View style={styles.letterDescription}>
            <Text style={styles.letterDescriptionText}>
              {formatMessage({
                id: SourceCodeData[resultSourceCode].letterDescription,
              })}
            </Text>
          </View>
        </View>
        {resultSourceCode !== 'NotApplicable' ? (
          <>
            <Text style={styles.line}>
              {formatMessage({id: 'screen.SourceCode.line'})}
            </Text>
            <View style={styles.gap}>
              <View style={styles.numberRow}>
                {resultSourceCode !== 'W' ? (
                  <View style={styles.numberContainer}>
                    <Text style={styles.number}>
                      {formatMessage({id: 'screen.SourceCode.NumberOne'})}
                    </Text>
                  </View>
                ) : null}
                <View>
                  {resultSourceCode !== 'D' ? (
                    <View style={styles.numberRow}>
                      <View style={styles.numberContainer}>
                        <Text style={styles.number}>
                          {formatMessage({id: 'screen.SourceCode.NumberTwo'})}
                        </Text>
                      </View>
                      <View style={styles.numberContainer}>
                        <Text style={styles.number}>
                          {formatMessage({id: 'screen.SourceCode.NumberThree'})}
                        </Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
          </>
        ) : null}
        <Text
          style={
            resultSourceCode !== 'NotApplicable'
              ? styles.contentDescription
              : styles.notApplicableContentDescription
          }>
          {formatMessage({
            id: SourceCodeData[resultSourceCode].content,
          })}
        </Text>
        <Button
          buttonContent={
            continueToStepTwo
              ? formatMessage({
                  id: 'button.continueToStepTwo',
                })
              : formatMessage({
                  id: 'button.returnToHome',
                })
          }
          buttonTextStyle={() => {
            return styles.btnTxt;
          }}
          buttonStyle={() => {
            return styles.btnTwo;
          }}
          onPress={() => {
            if (continueToStepTwo) {
              return navigation.navigate('StepTwo');
            } else {
              return navigation.navigate('HomePage');
            }
          }}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.darkRed,
    height: '266@s',
  },
  titleContainer: {
    marginVertical: '15@vs',
    borderRadius: '90@s',
    minHeight: '180@s',
    minWidth: '180@s',
    aspectRatio: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: '10@s',
    backgroundColor: RawColors.white,
    textAlignVertical: 'center',
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderWidth: 2,
    ...CommonStyles.shadowEffectDarker,
  },
  title: {
    textAlign: 'center',
    paddingTop: '30@s',
    textAlignVertical: 'center',
    ...Fonts.Lato19R,
  },
  notApplicableText: {
    textAlign: 'center',
    paddingHorizontal: '20@s',
    color: RawColors.black,
    textTransform: 'uppercase',
    ...Fonts.Lato19B,
  },
  notApplicableContentDescription: {
    padding: '35@s',
    marginTop: '50@vs',
    ...Fonts.Lato17SB,
    justifyContent: 'center',
    textAlign: 'center',
  },
  letter: {
    textAlign: 'center',
    paddingHorizontal: '20@s',
    color: RawColors.redShade,
    ...Fonts.Didot56B,
    alignSelf: 'center',
  },
  letterDescription: {
    backgroundColor: RawColors.darkRed,
    justifyContent: 'center',
    alignContent: 'center',
    color: RawColors.white,
    marginVertical: '15@s',
  },
  letterDescriptionText: {
    ...Fonts.Lato15B,
    textAlign: 'center',
    letterSpacing: 0.4,
    color: RawColors.whiteTwo,
    lineHeight: '19@s',
    marginHorizontal: '40@s',
  },
  gap: {marginTop: '10@vs'},
  line: {
    marginTop: '25@s',
    ...Fonts.Lato15R,
    textAlign: 'center',
    letterSpacing: 0.4,
    lineHeight: '19@s',
  },
  numberRow: {flexDirection: 'row', justifyContent: 'center'},
  numberContainer: {
    height: '30@s',
    width: '30@s',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.greyShade,
    marginHorizontal: '10@s',
    lineHeight: '24@s',
    borderRadius: '15@s',
  },
  number: {
    fontSize: 20,
    color: RawColors.black,
  },
  contentDescription: {
    marginTop: '18@s',
    alignSelf: 'center',
    paddingHorizontal: '15@vs',
    ...Fonts.Lato17SB,
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: '16@s',
    marginBottom: '30@vs',
  },
  btnTwo: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: '15@vs',
    backgroundColor: RawColors.sugarCane,
  },
  btnTxt: {
    ...Fonts.Lato15R,
    color: RawColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SourceCode;
