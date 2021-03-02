import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const FeedbackOne = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackOne.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.FeedbackOne.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FeedbackOne.contentOne'})}
          </Text>
          <View style={styles.gap1}>
            <Text style={styles.line1}>
              {formatMessage({id: 'screen.FeedbackOne.contentTwo'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.FeedbackOne.contentThree'})}
            </Text>
          </View>

          <View style={styles.gap2}>
            <Text style={styles.line2}>
              {formatMessage({id: 'screen.FeedbackOne.contentFour'})}
            </Text>
          </View>
        </View>
        <View style={styles.btn} />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginTop: '18@s',
    height: '100@s',
    width: '240@s',
  },
  titleContent: {
    fontWeight: 'bold',
    fontSize: '40@s',
    lineHeight: '49@s',
    letterSpacing: '0.64@s',
  },
  contentContainer: {
    marginTop: '8@s',
  },
  content: {
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato15R,
  },
  gap1: {
    marginTop: '5%',
  },
  gap2: {
    marginTop: '12%',
  },
  line1: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato17R,
  },
  line2: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15R,
  },
  btn: {},
});

export default FeedbackOne;
