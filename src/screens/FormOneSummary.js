import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets/';

const FormOneSummary = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormOneSummary.title_1'}) + ':'}
        </Text>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormOneSummary.title_2'})}
        </Text>
      </View>
      <View style={styles.subHeading}>
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_1'})}
        </Text>
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_2'})}
        </Text>
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_3'})}
        </Text>
      </View>
      <View></View>
    </Container>
  );
};

const styles = ScaledSheet.create({
  flexGrow: {flexGrow: 1},
  titleView: {
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    backgroundColor: RawColors.white,
  },
  title: {
    lineHeight: '35@ms',
    textTransform: 'uppercase',
    ...Fonts.HelveticaNeue30B,
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '25@vs',
  },
  subHeadingText: {
    color: RawColors.charcoalGrey60,
  },
});

export default FormOneSummary;
