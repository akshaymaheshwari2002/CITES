import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {TextInput, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const TextInputArray = React.forwardRef(
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

    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < _count; ++index) {
        fields[index] = (
          <TextInput
            key={index}
            value={value?.[index]}
            onChangeText={(text) => handleChangeText(text, index)}
            style={styles.textInput}
            placeholder={placeholder}
          />
        );
      }
      return fields;
    }, [_count, handleChangeText, placeholder, value]);

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
        <View
          style={buttonText ? styles.containerWithButton : styles.container}>
          {renderFields()}
          {buttonText ? (
            <Button
              buttonStyle={() => ({
                borderStyle: 'dashed',
                borderRadius: 1,
                borderWidth: 2,
              })}
              buttonContent={buttonText}
              onPress={() => _setCount((state) => state + 1)}
            />
          ) : null}
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
  },
  containerWithButton: {
    marginVertical: '12@vs',
  },
  textInput: {
    marginVertical: 0,
    marginBottom: '8@vs',
  },
});

TextInputArray.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  count: PropTypes.number,
  incremental: PropTypes.bool,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

TextInputArray.defaultProps = {
  label: '',
  error: '',
  count: 1,
  incremental: false,
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default TextInputArray;
