import React, {useCallback} from 'react';
import {Text, View, Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RawColors, Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const Picker = React.forwardRef(
  (
    {
      items,
      label,
      error,
      style,
      onChange,
      showHelpIcon,
      onHelpIconPress,
      initialValue,
      ...restProps
    },
    _,
  ) => {
    const handleChangeItem = useCallback(
      (item) => {
        Array.isArray(item) ? onChange(item) : onChange(item.value);
      },
      [onChange],
    );

    return (
      <>
        <View style={styles.labelContainer}>
          {label ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15R]}>{label}</Text>
          ) : null}
          {showHelpIcon ? (
            <Icon
              name="information-outline"
              color={RawColors.darkSalmon}
              size={ms(40)}
              onPress={onHelpIconPress}
            />
          ) : null}
        </View>
        <DropDownPicker
          labelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          items={items}
          searchableError={() => null}
          containerStyle={styles.container}
          style={[styles.picker, style]}
          placeholder=""
          placeholderStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          dropDownStyle={styles.dropDownStyle}
          itemStyle={styles.item}
          arrowSize={ms(24)}
          onChangeItem={handleChangeItem}
          selectedLabelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          defaultValue={initialValue}
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
    backgroundColor: RawColors.lightGrey,
  },
  error: {
    ...Fonts.Lato15R,
    color: RawColors.error,
    ...Platform.select({ios: {zIndex: -1}}),
  },
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
