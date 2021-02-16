import React from 'react';
import {Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import {Images} from '@assets';

const CheckBox = ({onPress, checked, ...restProps}) => {
  return (
    <Pressable
      onPress={onPress}
      style={checked ? styles.pressableChecked : styles.pressable}
      {...restProps}>
      <Image
        source={Images.tick}
        style={checked ? styles.tickChecked : styles.tick}
      />
    </Pressable>
  );
};

export default CheckBox;

CheckBox.defaultProps = {
  checked: false,
  onPress: () => {},
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};

const styles = ScaledSheet.create({
  pressable: {
    height: '22@s',
    width: '22@s',
    borderRadius: '11@s',
    borderColor: RawColors.ghostCheckboxBorder,
    borderWidth: '2@s',
  },
  pressableChecked: {height: '22@s', width: '22@s'},
  tick: {
    height: '100%',
    width: '100%',
    opacity: 0,
  },
  tickChecked: {
    height: '100%',
    width: '100%',
    opacity: 1,
    tintColor: RawColors.green,
  },
});
