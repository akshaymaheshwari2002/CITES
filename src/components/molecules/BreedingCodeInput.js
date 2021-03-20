import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const BreedingCodeInput = React.forwardRef(
  ({label, placeholder, error, value, onChange}, _) => {
    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < 8; ++index) {
        if (index !== 1 && index !== 4) {
          fields[index] = (
            <View key={index} style={styles.input}>
              <TextInput
                key={index}
                value={value?.[index]}
                onChangeText={(text) => handleChangeText(text, index)}
                style={styles.textInput}
                placeholder={placeholder}
              />
            </View>
          );
        } else {
          fields[index] = (
            <Text key={index} style={styles.dash}>
              -
            </Text>
          );
        }
      }
      return fields;
    }, [handleChangeText, placeholder, value]);

    const handleChangeText = useCallback(
      (text, index) => {
        if (text.length <= 1) {
          const __valueArray = [...value];
          __valueArray[index] = text;
          onChange(__valueArray);
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
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
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
