import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import AnimatedSplash from 'react-native-animated-splash-screen';

import {RawColors, Fonts} from '@styles/Themes';

const StepHeader = ({stepNumber = 1, showAnimation = false}) => {
  const intl = useIntl();
  const [_showAnimation, _setShowAnimation] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (_showAnimation) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 1000);
    } else {
      setStartAnimation(false);
    }
  }, [_showAnimation]);

  useEffect(() => {
    if (showAnimation) {
      _setShowAnimation(false);
    }
  }, [showAnimation]);

  useEffect(() => {
    _setShowAnimation(showAnimation);
  }, [showAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <View style={styles.titleTextWrapper}>
          <Text style={styles.titleText_1}>
            {intl.formatMessage({
              id: `general.${
                stepNumber === 1
                  ? 'stepOne'
                  : stepNumber === 2
                  ? 'stepTwo'
                  : 'stepThree'
              }`,
            })}
          </Text>
          <Text style={styles.titleText_2}>
            {intl.formatMessage({
              id: `stepHeader.${
                stepNumber === 1
                  ? 'beforeInspection'
                  : stepNumber === 2
                  ? 'duringInspection'
                  : 'afterInspection'
              }`,
            })}
          </Text>
        </View>
        <View style={styles.roundWrap}>
          {showAnimation ? (
            <AnimatedSplash
              translucent={true}
              isLoaded={startAnimation}
              customComponent={<Text style={styles.step}>{stepNumber}</Text>}
              backgroundColor={RawColors.transparent}
              logoHeight={ms(150)}
              logoWidth={ms(150)}>
              <View style={{height: ms(130), justifyContent: 'center'}}>
                <Text style={styles.step}>{stepNumber}</Text>
              </View>
            </AnimatedSplash>
          ) : (
            <Text style={styles.step}>{stepNumber}</Text>
          )}
        </View>
      </View>
      <View style={styles.descriptionTextView}>
        <Text style={styles.descriptionText}>
          {intl.formatMessage({
            id: 'general.yourTasks',
          })}
          :
        </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.snow,
    overflow: 'visible',
    zIndex: 100,
  },
  titleView: {
    backgroundColor: RawColors.softRed,
    flexDirection: 'row',
    paddingHorizontal: '16@s',
    alignItems: 'center',
    height: '110@ms',
  },
  titleTextWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  titleText_1: {
    color: RawColors.sugarCane,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    marginTop: '5@vs',
    ...Fonts.HelveticaNeue30B,
  },
  titleText_2: {
    color: RawColors.sugarCane,
    textTransform: 'uppercase',
    textAlignVertical: 'center',
    lineHeight: '30@ms',
    marginBottom: '5@vs',
    ...Fonts.Lato15R,
  },
  roundWrap: {
    borderRadius: '65@ms',
    height: '130@ms',
    width: '130@ms',
    backgroundColor: RawColors.snow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    color: '#2D4652',
    ...Fonts.HelveticaNeue80B,
  },
  descriptionTextView: {
    backgroundColor: RawColors.snow,
    justifyContent: 'center',
    height: '40@ms',
    paddingLeft: '16@s',
    zIndex: -1,
  },
  descriptionText: {
    textAlignVertical: 'center',
    textTransform: 'uppercase',
    color: RawColors.tuna,
    ...Fonts.Lato13R,
  },
});

export default StepHeader;
