import React from 'react';
import {TextInput as Input, Text} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';

const TextInput = React.forwardRef(
  ({label, error, onChange, style, ...restProps}, ref) => {
    return (
      <>
        {label ? <Text style={Fonts.Lato15R}>{label}</Text> : null}
        <Input
          ref={ref}
          onChangeText={onChange}
          style={[styles.inputContainer, Fonts.Lato15R, style]}
          {...restProps}
        />
        {error ? <Text style={Fonts.Lato15R}>{error}</Text> : null}
      </>
    );
  },
);

TextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
};

const styles = ScaledSheet.create({
  inputContainer: {
    marginVertical: '12@vs',
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
  },
});

export default TextInput;
