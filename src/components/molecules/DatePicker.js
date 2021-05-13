import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const DatePicker = React.forwardRef(
  (
    {
      label,
      placeholder,
      error,
      onChange,
      value,
      showHelpIcon,
      onHelpIconPress,
      headerTextIOS,
      ...restProps
    },
    _,
  ) => {
    const [pickerVisible, setPickerVisible] = useState(false);

    const getValue = useCallback(() => {
      if (value) {
        if (typeof value === 'string') {
          return new Date(parseInt(value, 10)).toLocaleDateString();
        } else {
          return Date.now().toLocaleString();
        }
      } else {
        return '';
      }
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
        <TouchableOpacity
          onPress={() => {
            setPickerVisible(true);
          }}>
          <TextInput
            pointerEvents="none"
            style={{color: RawColors.black}}
            value={getValue()}
            placeholder={placeholder}
            editable={false}
          />
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
          headerTextIOS={headerTextIOS}
          style={{color: RawColors.black}}
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
  helpIcon: {height: ms(40), width: ms(40), marginHorizontal: ms(8)},
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
  value: '',
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default DatePicker;
