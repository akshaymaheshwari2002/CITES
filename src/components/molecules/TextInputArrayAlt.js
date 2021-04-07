import React, {useCallback} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';

const TextInputArrayAlt = React.forwardRef(
  (
    {label, placeholder, error, value, showHelpIcon, onHelpIconPress, onChange},
    _,
  ) => {
    const handleChangeText = useCallback(
      (text, index) => {
        if (value && Array.isArray(value)) {
          let updatedData = [...value];
          updatedData[index] = {...updatedData[index], data: text};
          onChange(updatedData);
        } else {
          onChange([{data: text}]);
        }
      },
      [onChange, value],
    );

    const renderFields = useCallback(() => {
      let fields = [];
      for (let index = 0; index < value?.length; ++index) {
        fields[index] = (
          <View key={index} style={styles.containerAlt}>
            <Text style={styles.labelLeft}>{value[index].identifier}</Text>
            <View style={styles.textInputAlt}>
              <TextInput
                value={value[index]?.data}
                onChangeText={(text) => handleChangeText(text, index)}
                style={styles.textInput}
                placeholder={placeholder}
              />
            </View>
          </View>
        );
      }
      return fields;
    }, [handleChangeText, placeholder, value]);

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
        <View style={styles.container}>{renderFields()}</View>
        {error ? (
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
        ) : null}
      </>
    );
  },
);

const styles = ScaledSheet.create({
  labelContainer: {flexDirection: 'row', alignItems: 'center'},
  labelLeft: {
    ...Fonts.Lato15B,
    flex: 5,
    marginLeft: '20@ms',
  },
  container: {
    marginTop: '12@vs',
    marginBottom: '4@vs',
  },
  textInput: {
    marginVertical: 0,
    marginBottom: '8@vs',
  },
  textInputAlt: {flex: 3, marginRight: '30@ms'},
  containerAlt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

TextInputArrayAlt.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

TextInputArrayAlt.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default TextInputArrayAlt;
