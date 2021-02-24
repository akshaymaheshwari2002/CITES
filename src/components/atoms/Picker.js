import React from 'react';
import {Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from 'prop-types';
import {ScaledSheet, scale, moderateScale} from 'react-native-size-matters';
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
      ...restProps
    },
    _,
  ) => {
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
        <DropDownPicker
          items={items}
          searchableError={() => null}
          containerStyle={styles.container}
          style={[styles.picker, style]}
          placeholder=""
          placeholderStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          itemStyle={styles.item}
          arrowSize={scale(24)}
          onChangeItem={onChange}
          selectedLabelStyle={[{color: RawColors.black}, Fonts.Lato15R]}
          {...restProps}
        />
        {error ? (
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
        ) : null}
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
  item: {
    justifyContent: 'flex-start',
    ...Fonts.Lato15R,
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
