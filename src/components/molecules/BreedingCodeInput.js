import React, {createRef, useCallback, useRef} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const BreedingCodeInput = React.forwardRef(
  ({label, placeholder, error, value, onChange}, _) => {
    const inputRefs = useRef([
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
    ]);

    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < 8; ++index) {
        if (index !== 1 && index !== 4) {
          fields[index] = (
            <View key={index} style={styles.input}>
              <TextInput
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                key={index}
                value={value?.[index]}
                onChangeText={(text) => handleChangeText(text, index)}
                style={styles.textInput}
                placeholder={placeholder}
                maxLength={1}
              />
            </View>
          );
        } else {
          fields[index] = (
            <Text
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              key={index}
              style={styles.dash}>
              -
            </Text>
          );
        }
      }
      return fields;
    }, [handleChangeText, placeholder, value]);

    const handleChangeText = useCallback(
      (text, index) => {
        let __valueArray = [...value];
        if (text.length === 1) {
          __valueArray[index] = text;

          if (index < 7) {
            if (index === 0 || index === 3) {
              inputRefs.current[index + 2].focus();
            } else {
              inputRefs.current[index + 1].focus();
            }
          }
          onChange(__valueArray);
        } else {
          __valueArray[index] = text;
          if (index > -1) {
            if (index === 2 || index === 5) {
              inputRefs.current[index - 2].focus();
            } else {
              console.log(__valueArray);
              if (index > 0) {
                inputRefs.current[index - 1].focus();
              }
            }
            onChange(__valueArray);
          }
        }
      },
      [onChange, value],
    );

    return (
      <>
        {label ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
        ) : null}
        <View style={styles.container}>{renderFields()}</View>
        {error ? (
          <Text
            style={[
              {color: RawColors.error},
              Fonts.Lato15R,
              {marginTop: ms(12)},
            ]}>
            {error}
          </Text>
        ) : null}
      </>
    );
  },
);

const styles = ScaledSheet.create({
  container: {
    marginTop: '12@vs',
    marginBottom: '4@vs',
    flexDirection: 'row',
  },
  input: {
    width: '40@ms',
    height: '40@ms',
  },
  textInput: {
    flex: 1,
    marginVertical: 0,
    marginBottom: '8@vs',
    textAlign: 'center',
    borderWidth: 5,
    backgroundColor: RawColors.lightGrey,
    ...CommonStyles.shadowEffectDarker,
  },
  dash: {
    ...Fonts.HelveticaNeue25B,
    textAlignVertical: 'center',
  },
});

BreedingCodeInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  incremental: PropTypes.bool,
  onChange: PropTypes.func,
};

BreedingCodeInput.defaultProps = {
  label: '',
  error: '',
  count: 1,
  incremental: false,
  onChange: () => {},
};

export default BreedingCodeInput;
