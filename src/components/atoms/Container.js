import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/stack';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {RawColors} from '@styles/Themes';

const Container = ({
  isModal,
  children,
  statusBarProps,
  safeAreaViewProps,
  keyboardAwareScrollViewProps,
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
        style={styles.container}
        {...safeAreaViewProps}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          contentContainerStyle={styles.container}
          {...keyboardAwareScrollViewProps}>
          {children}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
};

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
  keyboardAwareScrollViewProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Container.defaultProps = {
  isModal: false,
  statusBarProps: {},
  safeAreaViewProps: {},
  keyboardAwareScrollViewProps: {},
  children: {},
};

export default Container;
