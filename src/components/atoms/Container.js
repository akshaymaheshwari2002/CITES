import React from 'react';
import {StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderHeightContext} from '@react-navigation/stack';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';

const Container = ({isModal, children, statusBarStyle}) => {
  const isFocused = useIsFocused();

  return (
    <>
      {isFocused ? (
        <StatusBar
          translucent
          barStyle={statusBarStyle}
          backgroundColor={RawColors.transparent}
        />
      ) : null}
      <HeaderHeightContext.Consumer>
        {(headerHeight) => (
          <SafeAreaView
            edges={
              headerHeight && !isModal
                ? ['right', 'bottom', 'left']
                : ['top', 'right', 'bottom', 'left']
            }
            style={styles.container}>
            {children}
          </SafeAreaView>
        )}
      </HeaderHeightContext.Consumer>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: RawColors.white,
  },
});

Container.propTypes = {
  isModal: PropTypes.bool,
  statusBarStyle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Container.defaultProps = {
  isModal: false,
  statusBarStyle: 'dark-content',
  children: {},
};

export default Container;
