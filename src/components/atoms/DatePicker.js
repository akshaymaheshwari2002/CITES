import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TextInput from './TextInput';
import {Fonts, RawColors} from '@styles/Themes';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import CommonStyles from '@styles/CommonStyles';

const DatePicker = React.forwardRef(
  (
    {
      label,
      error,
      onChange,
      value,
      showHelpIcon,
      onHelpIconPress,
      ...restProps
    },
    _,
  ) => {
    const [pickerVisible, setPickerVisible] = useState(false);

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
        <TouchableOpacity
          onPress={() => {
            setPickerVisible(true);
          }}>
          <TextInput value={value} editable={false} />
        </TouchableOpacity>
        <DateTimePicker
          mode="date"
          date={new Date()}
          onConfirm={(date) => {
            setPickerVisible(false);
            onChange(`${new Date(date).getTime()}`);
          }}
          isVisible={pickerVisible}
          onCancel={() => setPickerVisible(false)}
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
});

DatePicker.proptype = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

DatePicker.defaultProps = {
  label: '',
  error: '',
  value: new Date(),
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default DatePicker;
