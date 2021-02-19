import React from 'react';
import {Platform, StatusBar, View} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';

const _Tooltip = ({children, isVisible, ...restProps}) => {
  return (
    <Tooltip
      topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
      backgroundColor={RawColors.backToolTipColor}
      contentStyle={styles.content}
      arrowSize={styles.arrowSize}
      isVisible={isVisible}
      allowChildInteraction={false}
      {...restProps}>
      <View style={isVisible ? styles.focused : undefined}>{children}</View>
    </Tooltip>
  );
};

const styles = ScaledSheet.create({
  content: {borderRadius: '8@ms'},
  arrowSize: {height: '10@vs', width: '10@ms'},
  focused: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '48@ms',
    width: '48@ms',
    borderRadius: '24@ms',
    borderColor: RawColors.darkSalmon,
    borderWidth: 3,
    backgroundColor: RawColors.white,
  },
});

export default _Tooltip;
