import React from 'react';
import {TextInput as Input, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {RawColors, Fonts} from '@styles/Themes';

const TextInput = React.forwardRef(
  ({label, error, onChange, ...restProps}, ref) => {
    return (
      <>
        {label ? <Text style={Fonts.Lato15R}>{label}</Text> : null}
        <Input
          ref={ref}
          onChangeText={onChange}
          {...restProps}
          style={[styles.inputContainer, Fonts.Lato15R]}
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

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 12,
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
  },
});

export default TextInput;
