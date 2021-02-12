import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {RawColors} from '@styles/Themes';
import {ScaledSheet} from 'react-native-size-matters';

import {useIntl} from 'react-intl';
import {Container} from '@atoms/';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const StepsSummary = () => {
  const {formatMessage} = useIntl();
  return (
    <Container>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.StepsSummary.title'})}
        </Text>
        <View style={styles.contentContainer}>
          <View style={styles.one}>
            <View style={styles.point1}>
              <Icon
                name="checkcircle"
                color={RawColors.red}
                style={styles.icon}
              />
              <Text style={styles.content}>
                {formatMessage({id: 'screen.StepsSummary.contentOne'})}
              </Text>
            </View>
            <Text style={styles.txt}>
              {formatMessage({id: 'screen.StepsSummary.contentFour'})}
            </Text>
          </View>
          <View style={styles.two}>
            <View style={styles.point2}>
              <Icon
                name="checkcircle"
                color={RawColors.red}
                style={styles.icon}
              />
              <Text style={styles.content}>
                {formatMessage({id: 'screen.StepsSummary.contentTwo'})}
              </Text>
            </View>
            <Text style={styles.txt}>
              {formatMessage({id: 'screen.StepsSummary.contentFour'})}
            </Text>
          </View>
          <View style={styles.three}>
            <View style={styles.point3}>
              <Icon
                name="checkcircle"
                color={RawColors.red}
                style={styles.icon}
              />
              <Text style={styles.content}>
                {formatMessage({id: 'screen.StepsSummary.contentThree'})}
              </Text>
            </View>
            <Text style={styles.txt}>
              {formatMessage({id: 'screen.StepsSummary.contentFour'})}
            </Text>
          </View>
        </View>
        M
      </KeyboardAwareScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '20%',
  },
  icon: {
    // height: 50,
    // width: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '30@s',
  },
  content: {
    marginHorizontal: '10@s',
    fontSize: '20@s',
    fontWeight: 'bold',
  },
  txt: {
    marginHorizontal: '10@s',
    fontSize: '20@s',
  },
  point1: {flexDirection: 'row'},
  one: {marginLeft: '30%', marginVertical: '7%'},
  two: {marginLeft: '55%', marginVertical: '7%'},
  three: {marginLeft: '35%', marginVertical: '7%'},

  point2: {flexDirection: 'row'},

  point3: {flexDirection: 'row'},
});

export default StepsSummary;
