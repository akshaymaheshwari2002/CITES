import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Counter} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const CounterPair = React.forwardRef(
  (
    {
      label_0,
      label_1,
      label_2,
      placeholder,
      error,
      value,
      showHelpIcon,
      onHelpIconPress,
      onChange,
    },
    _,
  ) => {
    const handleChange = useCallback(
      (key, _value) => {
        onChange({...value, [key]: _value});
      },
      [onChange, value],
    );

    return (
      <>
        <View style={styles.labelContainer}>
          {label_0 ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15R]}>{label_0}</Text>
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
        <Counter
          label={label_1}
          value={value?.fullTimeStaffs}
          onChange={(_value) => handleChange('fullTimeStaffs', _value)}
        />
        <Counter
          label={label_2}
          value={value?.partTimeStaffs}
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
    alignItems: 'center',
    marginBottom: '12@vs',
  },
});
