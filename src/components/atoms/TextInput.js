import React, {useCallback} from 'react';
import {
  TextInput as Input,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';

import {Images} from '@assets';
import PropTypes from 'prop-types';
import {RawColors, Fonts} from '@styles/Themes';

const TextInput = React.forwardRef(
  (
    {
      value,
      label,
      error,
      onChange,
      style,
      labelStyle,
      showHelpIcon,
      labelBottom,
      labelRight,
      labelRightStyle,
      onHelpIconPress,
      multiline,
      numberOfLines,
      ...restProps
    },
    ref,
  ) => {
    const getValue = useCallback(() => {
      if (
        !(typeof value === 'undefined' || value === null || Number.isNaN(value))
      ) {
        return typeof value === 'string' ? value : value.toString();
      } else {
        return '';
      }
    }, [value]);

    return (
      <>
        {label ? (
          <Text style={[Fonts.Lato15B, labelStyle]}>{label}</Text>
        ) : null}
        <View style={styles.row}>
          <Input
            ref={ref}
            onChangeText={onChange}
            style={[styles.inputContainer, Fonts.Lato15R, style]}
            value={getValue()}
            multiline={multiline}
            numberOfLines={numberOfLines}
            {...restProps}
            placeholderTextColor={RawColors.grey}
          />
          {labelRight ? (
            typeof labelRight === 'string' ? (
              <Text style={[Fonts.Lato15B, labelRightStyle]}>{labelRight}</Text>
            ) : (
              labelRight
            )
          ) : null}
          {showHelpIcon ? (
            <TouchableOpacity onPress={onHelpIconPress}>
              <Image source={Images.information} style={styles.helpIcon} />
            </TouchableOpacity>
          ) : null}
        </View>
        {labelBottom ? (
          <Text style={[{color: RawColors.black}, Fonts.Italic13R]}>
            {labelBottom}
          </Text>
        ) : null}
        {error ? (
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
        ) : null}
      </>
    );
  },
);

TextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
  labelBottom: PropTypes.string,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  labelRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelRightStyle: PropTypes.object,
};

TextInput.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
  style: {},
  showHelpIcon: false,
  multiline: false,
  numberOfLines: 1,
  onHelpIconPress: () => {},
  labelBottom: '',
  labelRight: '',
  labelRightStyle: {},
};

const styles = ScaledSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  inputContainer: {
    flex: 1,
    marginVertical: '12@vs',
    height: '46@vs',
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
    paddingHorizontal: '8@s',
    backgroundColor: RawColors.lightGrey,
  },
  fieldHelpIcon: {
    flexShrink: 0,
    marginHorizontal: '4@ms',
  },
  helpIcon: {height: ms(40), width: ms(40), marginHorizontal: ms(8)},
});

export default TextInput;
