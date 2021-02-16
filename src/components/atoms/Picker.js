import React from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';

const Picker = React.forwardRef(
  ({label, error, onChange, style, ...restProps}, _) => {
    return (
      <>
        {label ? <Text style={Fonts.Lato15R}>{label}</Text> : null}
        <DropDownPicker
          containerStyle={styles.container}
          style={[styles.picker, style]}
          itemStyle={styles.item}
          arrowSize={scale(24)}
          onChangeItem={onChange}
          {...restProps}
        />
        {error ? <Text style={Fonts.Lato15R}>{error}</Text> : null}
      </>
    );
  },
);

const styles = ScaledSheet.create({
  container: {
    height: '46@vs',
    width: '100%',
  },
  picker: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
  },
  item: {
    justifyContent: 'flex-start',
    ...Fonts.Lato15R,
  },
});

Picker.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Picker.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
};

export default Picker;
