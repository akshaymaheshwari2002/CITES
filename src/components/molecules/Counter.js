import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Counter = React.forwardRef(
  (
    {
      label,
      placeholder,
      error,
      value,
      count,
      buttonText,
      showHelpIcon,
      onHelpIconPress,
      onChange,
    },
    _,
  ) => {
    const [_count, _setCount] = useState(count);
    const [counterValue, setCounterValue] = useState(0);

    const handleChangeText = useCallback(
      (text, index) => {
        if (value && Array.isArray(value)) {
          let updatedData = [...value];
          updatedData[index] = text;
          onChange(updatedData);
        } else {
          onChange([text]);
        }
      },
      [onChange, value],
    );
    const counterValueUpdate = useCallback(
      (incrementOrDecrement, text) => {
        if (text) {
          setCounterValue(parseInt(text));
        }
        if (incrementOrDecrement === '+') {
          setCounterValue(counterValue + 1);
        }
        if (incrementOrDecrement === '-') {
          setCounterValue(counterValue - 1);
        }
        handleChangeText(counterValue, 0);
      },
      [counterValue, handleChangeText],
    );
    const renderFields = useCallback(() => {
      let fields = [];

      for (let index = 0; index < _count; ++index) {
        fields[index] = (
          <TextInput
            key={index}
            value={value ? value[index] : counterValue}
            onChangeText={(text) => {
              counterValueUpdate('', text);
              handleChangeText(text, index);
            }}
            style={styles.textInput}
            placeholder={placeholder}
            keyboardType="number-pad"
          />
        );
      }
      return fields;
    }, [
      _count,
      counterValue,
      counterValueUpdate,
      handleChangeText,
      placeholder,
      value,
    ]);

    useEffect(() => {
      if (count) {
        _setCount(count);
      }
    }, [count]);

    useEffect(() => {
      if (value?.length) {
        _setCount((existingCount) =>
          value.length > existingCount ? value.length : existingCount,
        );
      }
    }, [value]);

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
        <View style={[CommonStyles.flexRow, {alignItems: 'center'}]}>
          <View style={styles.container}>{renderFields()}</View>
          <TouchableOpacity
            onPress={() => {
              counterValueUpdate('+');
            }}>
            <Text style={styles.operator}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              counterValueUpdate('-');
            }}>
            <Text style={styles.operator}>-</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: '12@vs',
    marginBottom: '4@vs',
    width: '136@s',
  },
  containerWithButton: {
    marginVertical: '12@vs',
  },
  textInput: {
    marginVertical: 0,
    marginBottom: '8@vs',
  },
  operator: {
    ...Fonts.Lato15B,
    marginHorizontal: '24@s',
  },
});

Counter.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  count: PropTypes.number,
  incremental: PropTypes.bool,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

Counter.defaultProps = {
  label: '',
  error: '',
  count: 1,
  incremental: false,
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default Counter;
