import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useIntl} from 'react-intl';

import {Container} from '@atoms';
import {Fonts} from '@styles/Themes';

const GiveFeedback = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <KeyboardAwareScrollView>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.GiveFeedback.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.GiveFeedback.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.GiveFeedback.contentOne'})}
          </Text>
          <Text style={styles.line1}>
            {formatMessage({id: 'screen.GiveFeedback.contentTwo'})}
          </Text>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.GiveFeedback.contentThree'})}
          </Text>

          <Text style={styles.line2}>
            {formatMessage({id: 'screen.GiveFeedback.contentFour'})}
          </Text>
        </View>
        <View style={styles.btn}></View>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '20%',
    marginVertical: '20%',
  },
  title: {
    marginLeft: '15@s',
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
    marginHorizontal: '15@s',
    height: '284@s',
    width: '344@s',
  },
  content: {
    lineHeight: 22,
    letterSpacing: 0.41,
    ...Fonts.Lato17R,
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

export default GiveFeedback;
