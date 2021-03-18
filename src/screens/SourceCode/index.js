import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import SourceCodeData from './SourceCodeData';

const SourceCode = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const resultSourceCode = route.params?.selectedSourceCode;
  const continueToStepTwo = useSelector(
    (state) => state.sessionReducer.continueToStepTwo,
  );
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon
            name="chevron-left"
            size={ms(26)}
            style={{marginHorizontal: ms(10)}}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        rightContent={
          <IconAntDesign
            name="pluscircle"
            style={{marginHorizontal: ms(10)}}
            size={ms(26)}
            onPress={() => navigation.navigate('MoreInformation')}
          />
        }
      />
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
                <View style={styles.numberContainer}>
                  <Text style={styles.number}>
                    {formatMessage({id: 'screen.SourceCode.NumberOne'})}
                  </Text>
                </View>
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
        <Text style={styles.contentDescription}>
          {formatMessage({
            id: SourceCodeData[resultSourceCode].content,
          })}
        </Text>
        <Button
          buttonContent={formatMessage({
            id: 'button.continueCaps',
          })}
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
    alignSelf: 'center',
    backgroundColor: RawColors.white,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderWidth: 2,
    ...CommonStyles.shadowEffectDarker,
  },
  title: {
    textAlign: 'center',
    ...Fonts.Lato17R,
  },
  notApplicableText: {
    textAlign: 'center',
    color: RawColors.black,
    textTransform: 'uppercase',
    ...Fonts.Lato17B,
  },
  letter: {
    //textAlign: 'center',
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
