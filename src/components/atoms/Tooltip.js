import React from 'react';
import {Platform, Text, View} from 'react-native';
import Tooltip, {
  TooltipChildrenContext,
} from 'react-native-walkthrough-tooltip';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

import {Fonts, RawColors} from '@styles/Themes';

const _Tooltip = ({children, content, focusedStyle, ...restProps}) => {
  return (
    <Tooltip
      useInteractionManager={true}
      topAdjustment={Platform.OS === 'android' ? -getStatusBarHeight() : 0}
      backgroundColor={RawColors.backToolTipColor}
      contentStyle={styles.content}
      arrowSize={styles.arrowSize}
      childContentSpacing={vs(12)}
      allowChildInteraction={false}
      content={<Text style={Fonts.Lato20R}>{content}</Text>}
      {...restProps}>
      <TooltipChildrenContext.Consumer>
        {({tooltipDuplicate}) =>
          tooltipDuplicate ? (
            <View style={[styles.focused, focusedStyle]}>{children}</View>
          ) : (
            children
          )
        }
      </TooltipChildrenContext.Consumer>
    </Tooltip>
  );
};

const styles = ScaledSheet.create({
  content: {borderRadius: '8@ms'},
  arrowSize: {height: '8@vs', width: '6@ms'},
  focused: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '44@ms',
    width: '44@ms',
    borderRadius: '24@ms',
    borderColor: RawColors.darkSalmon,
    borderWidth: 4,
    backgroundColor: RawColors.white,
  },
});

_Tooltip.defaultProps = {
  children: {},
  content: '',
};

_Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  content: PropTypes.string,
};

export default _Tooltip;
