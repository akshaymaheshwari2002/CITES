import React from 'react';
import {Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

import {Fonts, RawColors} from '@styles/Themes';

const Button = ({buttonText, buttonStyle, buttonTextStyle, ...restProps}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, buttonStyle(pressed)]}
      android_ripple={{color: RawColors.white}}
      {...restProps}>
      {({pressed}) => {
        return (
          <Text
            style={[
              {color: RawColors.darkGrey},
              Fonts.Lato15R,
              buttonTextStyle(pressed),
            ]}>
            {buttonText}
          </Text>
        );
      }}
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '14@ms',
    minHeight: '46@vs',
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
  },
});

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.func,
  buttonTextStyle: PropTypes.func,
};

Button.defaultProps = {
  buttonText: '',
  buttonStyle: () => ({}),
  buttonTextStyle: () => ({}),
};

export default Button;
