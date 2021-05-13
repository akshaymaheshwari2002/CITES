import React from 'react';
import {Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

import {RawColors} from '@styles/Themes';
import {Images} from '@assets';

const CheckBox = ({onChange, value, ...restProps}) => {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      style={[styles.container, !value ? styles.uncheckedContainer : undefined]}
      {...restProps}>
      {value ? (
        <Image
          source={Images.tick}
          style={value ? styles.checkedImage : undefined}
        />
      ) : null}
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '22@ms',
    width: '22@ms',
  },
  uncheckedContainer: {
    borderRadius: '11@ms',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: RawColors.ghostCheckboxBorder,
    borderWidth: 2,
  },
  checkedImage: {
    height: '100%',
    width: '100%',
    tintColor: RawColors.green,
    resizeMode: 'contain',
  },
});

CheckBox.defaultProps = {
  value: null,
  onChange: () => {},
};

CheckBox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckBox;
