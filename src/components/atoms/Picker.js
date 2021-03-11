import React, {useState, useCallback} from 'react';
import {Text, View, Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {ScaledSheet, scale, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RawColors, Fonts} from '@styles/Themes';
import {Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';

const Picker = React.forwardRef(
  (
    {
      items,
      label,
      error,
      style,
      pickerText,
      count,
      onChange,
      showHelpIcon,
      onHelpIconPress,
      ...restProps
    },
    _,
  ) => {
    const [_count, _setCount] = useState(count);
    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < _count; ++index) {
        fields[index] = (
          <DropDownPicker
            key={index}
            labelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
            items={items}
            searchableError={() => null}
            containerStyle={styles.container}
            style={[styles.picker, style]}
            placeholder=""
            placeholderStyle={[{color: RawColors.black}, Fonts.Lato15R]}
            dropDownStyle={styles.dropDownStyle}
            itemStyle={styles.item}
            arrowSize={scale(24)}
            onChangeItem={({value}) => onChange(value)}
            selectedLabelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
            {...restProps}
          />
        );
      }
      return fields;
    }, [_count, items, onChange, restProps, style]);
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
              size={moderateScale(40)}
              onPress={onHelpIconPress}
            />
          ) : null}
        </View>
        <View
          style={pickerText ? styles.containerWithButton : styles.container}>
          {renderFields()}
          {pickerText ? (
            <Button
              buttonStyle={() => ({
                borderStyle: 'dashed',
                borderRadius: 1,
                borderWidth: 2,
              })}
              buttonTextStyle={() => {
                return styles.btnTxt;
              }}
              buttonContent={pickerText}
              onPress={() => _setCount((state) => state + 1)}
            />
          ) : null}
        </View>
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
    backgroundColor: RawColors.whiteTwo,
  },
  containerWithPicker: {
    marginVertical: '12@vs',
  },
  btnTxt: {
    ...Fonts.Lato15R,
    color: RawColors.tuna,
    alignContent: 'flex-start',
    textAlign: 'left',
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
  count: PropTypes.number,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

Picker.defaultProps = {
  items: [],
  label: '',
  error: '',
  style: {},
  count: 1,
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default Picker;
