import React from 'react';
import {View, Text} from 'react-native';
import {Container} from '@atoms';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {Fonts, RawColors} from '@styles/Themes';
import {useIntl} from 'react-intl';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FacilityScore = () => {
  const {formatMessage} = useIntl();

  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.title}>
          <Text style={Fonts.HelveticaNeue40B}>
            {formatMessage({id: 'screen.facilityscore.headerPartOne'})}
          </Text>
          {/* <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.facilityscore.headerPartTwo'})}
          </Text> */}
        </View>
        {/* <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {formatMessage({id: 'screen.facilityscorecontentOne'})}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.facilityscorecontentTwo'})}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.facilityscorecontentThree'})}
          </Text>
        </View>
        <View style={styles.btn}></View> */}
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginLeft: '15@s',
    marginTop: '18@s',
    height: '100@vs',
    width: '240@s',
  },
  questionContainer: {
    marginLeft: '17@s',
    marginTop: '8@s',
    height: '18@vs',
    width: '173@s',
  },
  question: {
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0.36,
    ...Fonts.Lato15R,
  },
  iconContainer: {
    marginLeft: '19.3@s',
    marginRight: '20@s',
    marginTop: '21@s',
    flexDirection: 'row',
  },
  icon: {
    height: '54@s',
    width: '54@s',
  },
  contentContainer: {
    marginTop: '29@s',
    marginHorizontal: '43@s',
    height: '245@vs',
    width: '290@s',
    borderRadius: '20@s',
    borderWidth: 1,
    borderColor: RawColors.darkGrey,
  },
  content: {
    color: RawColors.grey,
    lineHeight: '30@vs',
    height: '78@s',
    width: '265@s',
    marginLeft: '12@s',
    marginTop: '15@s',
    ...Fonts.Lato15R,
  },
  btn: {
    marginTop: '29@s',
    marginHorizontal: '43@s',
    marginVertical: '36@vs',
    height: '46@vs',
    width: '290@s',
  },
});

export default FacilityScore;
