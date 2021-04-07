import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import {Counter} from '@molecules';
import {Images} from '@assets';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const CounterPair = React.forwardRef(
  (
    {
      label,
      label_1,
      label_2,
      error,
      value,
      showHelpIcon,
      onHelpIconPress,
      onChange,
      shouldChange,
      label_style,
    },
    _,
  ) => {
    const handleChange = useCallback(
      (key, _value) => {
        if (shouldChange(_value)) {
          onChange({...value, [key]: _value});
        }
      },
      [onChange, value, shouldChange],
    );

    return (
      <>
        <View style={styles.labelContainer}>
          {label ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
          ) : null}
          {showHelpIcon ? (
            <TouchableOpacity onPress={onHelpIconPress}>
              <Image
                source={Images.information}
                style={{height: ms(40), width: ms(40)}}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Counter
          label={label_1}
          label_style={{marginHorizontal: ms(20)}}
          value={value?.fullTimeStaffs}
          onChange={(_value) => handleChange('fullTimeStaffs', _value)}
        />
        <Counter
          label={label_2}
          value={value?.partTimeStaffs}
          label_style={{marginHorizontal: ms(20)}}
          onChange={(_value) => handleChange('partTimeStaffs', _value)}
        />
        {error ? (
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
        ) : null}
      </>
    );
  },
);

export default CounterPair;

const styles = ScaledSheet.create({
  labelContainer: {
    flexDirection: 'row',

    flex: 1,
    marginBottom: '12@vs',
  },
});

CounterPair.propTypes = {
  label: PropTypes.string,
  label_1: PropTypes.string,
  label_2: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  shouldChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
  label_1_style: PropTypes.object,
};

CounterPair.defaultProps = {
  label: '',
  label_1: '',
  label_2: '',
  error: '',
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
  shouldChange: () => true,
  label_style: {},
};
