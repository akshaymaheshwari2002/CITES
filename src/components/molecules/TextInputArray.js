import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {moderateScale, ScaledSheet, s} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';

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
    const handleDelete = useCallback(
      (index) => {
        if (_count > 1) {
          const _value = value ?? [];
          _value.splice(index, 1);
          onChange([..._value]);
          _setCount((state) => state - 1);
        }
      },
      [_count, onChange, value],
    );

    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < _count; ++index) {
        fields[index] = (
          <View style={styles.SectionStyle} key={index}>
            <View style={CommonStyles.flex1}>
              <TextInput
                key={index}
                value={value?.[index]}
                onChangeText={(text) => handleChangeText(text, index)}
                style={styles.textInput}
                placeholder={placeholder}
              />
            </View>
            {index > 0 ? (
              <View style={{marginHorizontal: s(8)}}>
                <Icon
                  name="trash"
                  size={moderateScale(25)}
                  iconStyle={styles.ImageStyle}
                  onPress={() => handleDelete(index)}
                />
              </View>
            ) : null}
          </View>
        );
      }
      return fields;
    }, [_count, handleChangeText, handleDelete, placeholder, value]);

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
        {label ? (
          typeof label === 'string' ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
          ) : (
            label
          )
        ) : null}
        <View
          style={buttonText ? styles.containerWithButton : styles.container}>
          {renderFields()}
          {buttonText ? (
            <Button
              buttonStyle={() => ({
                borderStyle: 'dashed',
                borderRadius: 1,
                borderWidth: 2,
                borderColor: RawColors.dimGrey,
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
    flex: 1,
    marginVertical: '12@vs',
  },
  textInput: {
    marginVertical: 0,
    flex: 1,
    marginHorizontal: '5@s',
    borderWidth: 0,
  },
  SectionStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '12@vs',
    flexDirection: 'row',
    height: '50@vs',
    borderColor: RawColors.dimGrey,
    borderWidth: 1,
    marginBottom: '8@vs',
    backgroundColor: RawColors.lightGrey,
  },
  ImageStyle: {
    height: '25@s',
    width: '25@s',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});

TextInputArray.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  error: PropTypes.string,
  count: PropTypes.number,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

TextInputArray.defaultProps = {
  label: '',
  error: '',
  count: 1,
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default TextInputArray;
