import React, {useEffect} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';

import {Fonts, RawColors} from '@styles/Themes';
import {Button, Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import SourceCodeData from './SourceCodeData';

const SourceCode = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const resultSourceCode = 'D';

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StepOne', {
              screen: 'StepOne',
              params: {showToolTip: true},
            })
          }>
          <Icon name="pluscircle" size={scale(26)} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.flex1}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.SourceCode.title'})}
          </Text>
          <Text style={styles.letter}>
            {formatMessage({id: resultSourceCode})}
          </Text>
        </View>
        <View style={styles.letterDescription}>
          <Text style={styles.letterDescriptionText}>
            {formatMessage({
              id: SourceCodeData[resultSourceCode].letterDescription,
            })}
          </Text>
        </View>
        <Text style={styles.line}>
          {formatMessage({id: 'screen.SourceCode.line'})}
        </Text>
        <View style={styles.numberRow}>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>
              {formatMessage({id: 'screen.SourceCode.NumberOne'})}
            </Text>
          </View>
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
        <Text style={styles.contentDescription}>
          {formatMessage({id: SourceCodeData[resultSourceCode].content})}
        </Text>
        <Button
          buttonContent={formatMessage({
            id: 'screen.SourceCode.buttonContent',
          })}
          buttonTextStyle={() => {
            return styles.btnTxt;
          }}
          buttonStyle={() => {
            return styles.btnTwo;
          }}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  titleContainer: {
    marginVertical: '15@vs',
    borderRadius: '90@s',
    height: '180@s',
    width: '180@s',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: 'rgba(0, 0, 0, 0.16)',
    borderWidth: 2,
  },
  title: {
    textAlign: 'center',
    ...Fonts.Lato17R,
  },
  letter: {
    textAlign: 'center',
    color: RawColors.redShade,
    ...Fonts.Didot56B,
  },
  letterDescription: {
    backgroundColor: RawColors.darkRed,
    justifyContent: 'center',
    alignContent: 'center',
    height: '71@s',
    marginTop: '18@s',
  },
  letterDescriptionText: {
    ...Fonts.Lato15B,
    textAlign: 'center',
    letterSpacing: 0.4,
    lineHeight: '19@s',
    marginHorizontal: '40@s',
  },
  line: {
    marginTop: '25@s',
    ...Fonts.Lato15R,
    textAlign: 'center',
    letterSpacing: 0.4,
    lineHeight: '19@s',
  },
  numberRow: {flexDirection: 'row', justifyContent: 'center', marginTop: '8@s'},
  numberContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RawColors.greyShade,
    marginHorizontal: '10@s',
    lineHeight: '24@s',
    borderRadius: 15,
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
  },
  btnTwo: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginTop: '30@vs',
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
