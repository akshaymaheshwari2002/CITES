import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import {Fonts} from '@styles/Themes';

const DatePicker = React.forwardRef(
  ({label, error, onChange, value, ...restProps}, _) => {
    const [pickerVisible, setPickerVisible] = useState(false);

    return (
      <>
        {label ? <Text style={Fonts.Lato15R}>{label}</Text> : null}
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
        {error ? <Text style={Fonts.Lato15R}>{error}</Text> : null}
      </>
    );
  },
);

DatePicker.proptype = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

DatePicker.defaultProps = {
  label: '',
  error: '',
  value: new Date(),
};

export default DatePicker;
