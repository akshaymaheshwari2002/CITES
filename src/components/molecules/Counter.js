import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {TextInput} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import Constants from '@utils/Constants';

const Counter = React.forwardRef(
  ({label, placeholder, error, value, onChange}, _) => {
    const handleChange = useCallback(
      ({action, text}) => {
        if (action === Constants.PLUS) {
          onChange(Number(value) + 1);
        } else if (action === Constants.MINUS) {
          onChange(Number(value) - 1);
        } else {
          onChange(Number(text));
        }
      },
      [onChange, value],
    );

    return (
      <>
        {label ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15R]}>{label}</Text>
        ) : null}
        <View style={[CommonStyles.flexRow, styles.alignCenter]}>
          <View style={styles.container}>
            <TextInput
              value={value}
              onChange={(text) => {
                handleChange({text});
              }}
              style={styles.textInput}
              placeholder={placeholder}
              keyboardType="number-pad"
            />
          </View>
          <FeatherIcon
            name="plus"
            color={RawColors.black}
            size={moderateScale(16)}
            onPress={(text) => {
              handleChange({action: Constants.PLUS});
            }}
            style={styles.operator}
          />
          <FeatherIcon
            name="minus"
            color={RawColors.black}
            size={moderateScale(16)}
            onPress={() => {
              handleChange({action: Constants.MINUS});
            }}
            style={styles.operator}
          />
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
    width: '136@s',
  },
  containerWithButton: {
    marginVertical: '12@vs',
  },
  textInput: {
    marginVertical: 0,
    marginBottom: '8@vs',
  },
  operator: {
    padding: '8@s',
    marginLeft: '15@s',
  },
  alignCenter: {
    alignItems: 'center',
  },
});

Counter.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

Counter.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
};

export default Counter;
