import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const animals = [
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentThree',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentFour',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentFive',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentSix',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentSeven',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentEight',
  },
];
const plants = [
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentEleven',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentTwelve',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentThirteen',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentFourteen',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q9MoreInfo.contentFifteen',
  },
];

const Q9MoreInfo = () => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.title}>
        <Text style={styles.titleContent}>
          {formatMessage({id: 'screen.q9MoreInfo.headerPartOne'})}
        </Text>
        <Text style={styles.titleContent}>
          {formatMessage({id: 'screen.q9MoreInfo.headerPartTwo'})}
        </Text>
      </View>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.margin}>
          <Text style={[Fonts.Lato20B, styles.contentOne, styles.itemHeadline]}>
            {formatMessage({id: 'screen.q9MoreInfo.contentOne'})}
          </Text>
          <Text style={[Fonts.Lato20R, styles.itemHeadline]}>
            {formatMessage({id: 'screen.q9MoreInfo.contentTwo'})}
          </Text>
          {animals.map(({icon, labelId}, index) => (
            <View key={index} style={styles.item}>
              <Image source={icon} style={styles.itemIcon} />
              <Text style={[CommonStyles.flex1, Fonts.Lato20R]}>
                {formatMessage({id: labelId})}
              </Text>
            </View>
          ))}
          <Text style={[Fonts.Lato15B, styles.contentOne, styles.itemHeadline]}>
            {formatMessage({id: 'screen.q9MoreInfo.contentNine'})}
          </Text>
          <Text style={[Fonts.Lato20R, styles.itemHeadline]}>
            {formatMessage({id: 'screen.q9MoreInfo.contentTen'})}
          </Text>
          {plants.map(({icon, labelId}, index) => (
            <View key={index} style={styles.item}>
              <Image source={icon} style={styles.itemIcon} />
              <Text style={[CommonStyles.flex1, Fonts.Lato20R]}>
                {formatMessage({id: labelId})}
              </Text>
            </View>
          ))}
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  margin: {
    marginHorizontal: '10@s',
    alignItems: 'center',
  },
  title: {
    marginLeft: '40@s',
    marginTop: '20@s',
  },
  titleContent: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '37@s',
    letterSpacing: '0.50@s',
  },
  icon: {
    height: '30@vs',
    width: '30@s',
  },
  contentOne: {
    width: '100%',
    marginTop: '30@s',
  },
  itemHeadline: {
    marginVertical: '15@vs',
  },
  item: {
    flexDirection: 'row',
    marginLeft: '8@s',
    marginVertical: '12@vs',
  },
  backgroundImage: {
    resizeMode: 'center',
    paddingLeft: '700@s',
  },
  itemIcon: {
    width: '22@ms',
    height: '22@ms',
    resizeMode: 'contain',
    marginRight: '16@ms',
    marginTop: '2@ms',
  },
});

export default Q9MoreInfo;
