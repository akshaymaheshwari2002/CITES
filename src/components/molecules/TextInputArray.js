import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
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

    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < _count; ++index) {
        fields[index] = (
          <View style={styles.textInputContainer}>
            <View style={styles.SectionStyle}>
              <TextInput
                key={index}
                value={value?.[index]}
                onChangeText={(text) => handleChangeText(text, index)}
                style={styles.textInput}
                placeholder={placeholder}
              />
              <Icon
                name="trash"
                size={moderateScale(25)}
                iconStyle={styles.ImageStyle}
                onPress={() => _setCount((state) => state - 1)}
              />
            </View>
          </View>
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
    //marginVertical: 0,
    //marginBottom: '8@vs',
    flex: 1,
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '12@vs',
    marginHorizontal: '18@s',
    backgroundColor: RawColors.lightGrey,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RawColors.lightGrey,
    height: '50@vs',
    // borderColor: RawColors.dimGrey,
    // borderWidth: 0.25,
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
