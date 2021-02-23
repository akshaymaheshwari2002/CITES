import React from 'react';
import {TextInput as Input, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RawColors, Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const TextInput = React.forwardRef(
  (
    {
      label,
      error,
      onChange,
      style,
      showHelpIcon,
      onHelpIconPress,
      ...restProps
    },
    ref,
  ) => {
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
        <Input
          ref={ref}
          onChangeText={onChange}
          style={[styles.inputContainer, Fonts.Lato15R, style]}
          {...restProps}
        />
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
  labelContainer: {flexDirection: 'row', alignItems: 'center'},
  inputContainer: {
    height: '46@vs',
    marginVertical: '12@vs',
    borderWidth: 1,
    borderColor: RawColors.dimGrey,
    backgroundColor: RawColors.whiteTwo,
  },
});

export default TextInput;
