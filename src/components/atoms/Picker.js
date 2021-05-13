import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, Platform, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {ScaledSheet, ms} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const Picker = React.forwardRef(
  (
    {
      label,
      error,
      style,
      value,
      onChange,
      showHelpIcon,
      onHelpIconPress,
      initialValue,
      ...restProps
    },
    _,
  ) => {
    const [open, setOpen] = useState(false);
    const [_value, _setValue] = useState(value);

    const handleChangeValue = useCallback(
      (newValue) => {
        onChange(newValue);
        setOpen(false);
      },
      [onChange],
    );

    useEffect(() => {
      _setValue(value);
    }, [value]);

    return (
      <>
        <View style={styles.labelContainer}>
          {label ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
          ) : null}
          {showHelpIcon ? (
            <TouchableOpacity onPress={onHelpIconPress}>
              <Image source={Images.information} style={styles.helpIcon} />
            </TouchableOpacity>
          ) : null}
        </View>
        <DropDownPicker
          open={open}
          searchable={false}
          value={_value}
          style={[styles.picker, style]}
          containerStyle={styles.container}
          dropDownContainerStyle={styles.dropDownStyle}
          listItemContainerStyle={styles.item}
          labelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          placeholderStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          selectedItemLabelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          setOpen={setOpen}
          setValue={_setValue}
          onChangeValue={handleChangeValue}
          {...restProps}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </>
    );
  },
);

const styles = ScaledSheet.create({
  labelContainer: {flexDirection: 'row', alignItems: 'center'},
  container: {
    marginVertical: '12@vs',
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
    backgroundColor: RawColors.lightGrey,
  },
  item: {
    justifyContent: 'flex-start',
    ...Fonts.Lato15R,
    backgroundColor: RawColors.lightGrey,
  },
  dropDownStyle: {
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
    backgroundColor: RawColors.lightGrey,
    borderRadius: 0,
  },
  error: {
    ...Fonts.Lato15R,
    color: RawColors.error,
    ...Platform.select({ios: {zIndex: -1}}),
  },
  helpIcon: {height: ms(40), width: ms(40), marginHorizontal: ms(8)},
});

Picker.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string,
  error: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

Picker.defaultProps = {
  items: [],
  label: '',
  error: '',
  style: {},
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default Picker;
