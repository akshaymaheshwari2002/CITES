import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const points = [
  {
    icon: Images.tick,
    labelId: 'screen.q4MoreInfo.contentOne',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q4MoreInfo.contentTwo',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q4MoreInfo.contentThree',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q4MoreInfo.contentFour',
  },
  {
    icon: Images.tick,
    labelId: 'screen.q4MoreInfo.contentFive',
  },
];

const Q4MoreInfo = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.margin}>
          <View style={styles.title}>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.q4MoreInfo.title'})}
            </Text>
          </View>
          {points.map(({icon, labelId}, index) => (
            <View key={index} style={styles.item}>
              <Image source={icon} style={styles.itemIcon} />
              <Text style={[CommonStyles.flex1, Fonts.Lato17R]}>
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
    marginHorizontal: '20@s',
    alignItems: 'center',
  },
  title: {
    marginVertical: '20@vs',
  },
  titleContent: {
    ...Fonts.HelveticaNeue20B,
    // lineHeight: '37@s',
    letterSpacing: '0.72@s',
  },
  icon: {
    height: '30@vs',
    width: '30@s',
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

export default Q4MoreInfo;
