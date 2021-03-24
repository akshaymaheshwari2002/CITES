import React from 'react';
import {Platform, Text, View} from 'react-native';
import Tooltip, {
  TooltipChildrenContext,
} from 'react-native-walkthrough-tooltip';
import {useIntl} from 'react-intl';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

import {Fonts, RawColors} from '@styles/Themes';

const _Tooltip = ({
  children,
  content,
  focusedStyle,
  contentstyle,
  ...restProps
}) => {
  const {formatMessage} = useIntl();
  return (
    <Tooltip
      useInteractionManager={true}
      topAdjustment={Platform.OS === 'android' ? -getStatusBarHeight() : 0}
      backgroundColor={RawColors.backToolTipColor}
      contentStyle={styles.content}
      arrowSize={styles.arrowSize}
      childContentSpacing={vs(12)}
      allowChildInteraction={false}
      content={
        <Text style={Fonts.Lato17R}>
          <Text style={Fonts.Lato17B}>
            {formatMessage({id: 'screen.StepOne.WalkThroughContentTap'})}
          </Text>
          {content}
        </Text>
      }
      {...restProps}>
      <TooltipChildrenContext.Consumer>
        {({tooltipDuplicate}) =>
          tooltipDuplicate ? (
            <View style={[styles.focusedChildren, focusedStyle]}>
              {children}
            </View>
          ) : (
            children
          )
        }
      </TooltipChildrenContext.Consumer>
    </Tooltip>
  );
};

const styles = ScaledSheet.create({
  content: {borderRadius: '10@ms'},
  arrowSize: {height: '8@vs', width: '4@ms'},
  focusedChildren: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '44@ms',
    width: '44@ms',
    borderRadius: '22@ms',
    borderColor: RawColors.darkSalmon,
    borderWidth: 5,
    backgroundColor: RawColors.white,
  },
});

_Tooltip.defaultProps = {
  children: {},
  content: '',
  contentstyle: {},
};

_Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  content: PropTypes.string,
  contentstyle: PropTypes.object,
};

export default _Tooltip;
