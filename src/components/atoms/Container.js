import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet, vs} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Container = ({
  isModal,
  children,
  statusBarProps,
  safeAreaViewProps: {style, ...restProps},
}) => {
  const isFocused = useIsFocused();
  const headerHeight = useHeaderHeight();

  return (
    <>
      {isFocused ? (
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={RawColors.transparent}
          {...statusBarProps}
        />
      ) : null}
      <SafeAreaView
        edges={
          headerHeight && !isModal
            ? ['right', 'bottom', 'left']
            : ['top', 'right', 'bottom', 'left']
        }
        style={[styles.container, style]}
        {...restProps}>
        {children}
      </SafeAreaView>
    </>
  );
};

Container.ScrollView = React.forwardRef(
  ({children, contentContainerStyle, ...restProps}, ref) => (
    <KeyboardAvoidingView
      keyboardVerticalOffset={vs(98)}
      behavior={Platform.OS === 'ios' ? 'height' : null}
      style={CommonStyles.flex1}>
      <ScrollView
        ref={ref}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[styles.container, contentContainerStyle]}
        {...restProps}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  ),
);

const styles = ScaledSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: RawColors.white,
  },
});

Container.propTypes = {
  isModal: PropTypes.bool,
  statusBarProps: PropTypes.object,
  safeAreaViewProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Container.defaultProps = {
  isModal: false,
  statusBarProps: {},
  safeAreaViewProps: {},
  children: {},
};

Container.ScrollView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  restProps: PropTypes.object,
};

Container.ScrollView.defaultProps = {
  children: {},
  contentContainerStyle: {},
  restProps: {},
};

export default Container;
