import React, {useCallback} from 'react';
import {TextInput as Input, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {ms, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RawColors, Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

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
      onHelpIconPress,
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
          <Text style={[CommonStyles.flex1, Fonts.Lato15R, labelStyle]}>
            {label}
          </Text>
        ) : null}
        <View style={styles.row}>
          <Input
            ref={ref}
            onChangeText={onChange}
            style={[styles.inputContainer, Fonts.Lato15R, style]}
            value={getValue()}
            {...restProps}
          />
          {showHelpIcon ? (
            <Icon
              style={styles.fieldHelpIcon}
              name="information-outline"
              color={RawColors.darkSalmon}
              size={ms(40)}
              onPress={onHelpIconPress}
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

TextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

TextInput.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
  style: {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

const styles = ScaledSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  inputContainer: {
    flex: 1,
    flexGrow: 1,
    marginVertical: '12@vs',
    height: '46@vs',
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
    paddingHorizontal: '8@s',
  },
  fieldHelpIcon: {
    flexShrink: 0,
    marginHorizontal: '4@ms',
  },
});

export default TextInput;
