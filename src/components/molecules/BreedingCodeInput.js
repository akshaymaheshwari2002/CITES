import React, {createRef, useCallback, useRef} from 'react';
import {KeyboardAvoidingView, Text, View, Platform} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const BreedingCodeInput = React.forwardRef(
  ({label, labelBottom, placeholder, error, value, onChange}, _) => {
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
              <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
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
                  autoCapitalize="characters"
                />
              </KeyboardAvoidingView>
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
        {labelBottom ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15R, styles.labelBottom]}>
            {labelBottom}
          </Text>
        ) : null}
        <View style={styles.container}>{renderFields()}</View>
        {error ? (
          <Text
            style={[
              {color: RawColors.error},
              Fonts.Lato15R,
              {marginTop: ms(20)},
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
    height: '46@vs',
    flexDirection: 'row',
  },
  input: {
    width: '45@ms',
    marginRight: '6@vs',
  },
  textInput: {
    flex: 1,
    marginVertical: 0,
    marginBottom: '8@vs',
    textAlign: 'center',
    aspectRatio: 1,
    backgroundColor: RawColors.lightGrey,
  },
  labelBottom: {
    paddingRight: '35@ms',
    marginRight: '35@ms',
  },
  dash: {
    ...Fonts.HelveticaNeue25B,
    textAlignVertical: 'center',
    marginRight: '7@vs',
    marginTop: '7@vs',
  },
});

BreedingCodeInput.propTypes = {
  label: PropTypes.string,
  labelBottom: PropTypes.string,
  error: PropTypes.string,
  incremental: PropTypes.bool,
  onChange: PropTypes.func,
};

BreedingCodeInput.defaultProps = {
  label: '',
  labelBottom: '',
  error: '',
  count: 1,
  incremental: false,
  onChange: () => {},
};

export default BreedingCodeInput;
