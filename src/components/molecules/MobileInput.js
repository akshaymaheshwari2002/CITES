import React, {forwardRef, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import CountryPicker, {getCallingCode} from 'react-native-country-picker-modal';
import {ms, s, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {TextInput} from '@atoms';
import {RawColors, Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import Config from '@config';

const MobileNumber = forwardRef(
  ({error, label, style, labelStyle, onChange, value, ...restProps}, ref) => {
    const onSelect = useCallback(
      ({callingCode, cca2}) => {
        onChange({...value, callingCode: callingCode[0], cca2});
      },
      [onChange, value],
    );

    const _onChange = useCallback(
      (contactNumber) => {
        onChange({...value, contactNumber});
      },
      [onChange, value],
    );

    useEffect(() => {
      if (!value?.callingCode) {
        getCallingCode(value?.cca2 || Config.DEFAULT_COUNTRY).then(
          (callingCode) => {
            onChange({...value, callingCode});
          },
        );
      }
    }, [onChange, value]);

    return (
      <>
        {label ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15R, labelStyle]}>
            {label}
          </Text>
        ) : null}
        <View style={[CommonStyles.flexRow, styles.container, style]}>
          <CountryPicker
            theme={{onBackgroundTextColor: RawColors.black}}
            closeButton={<Icon name="chevron-left" size={ms(26)} />}
            filterProps={{style: styles.filter}}
            flatListProps={{style: styles.flatList}}
            modalProps={{animationType: 'fade', transparent: true}}
            {...{
              countryCode: value.cca2 || Config.DEFAULT_COUNTRY,
              withFlag: true,
              withFilter: true,
              onSelect,
            }}
          />
          {value.callingCode ? (
            <Text style={[{marginLeft: s(8)}, Fonts.Lato15R]}>
              +{value.callingCode}
            </Text>
          ) : null}
          <View style={CommonStyles.flex1}>
            <TextInput
              ref={ref}
              style={styles.mobileInput}
              onChange={_onChange}
              value={value.contactNumber}
              {...restProps}
            />
          </View>
        </View>
        {error ? (
          <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>{error}</Text>
        ) : null}
      </>
    );
  },
);

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    height: '46@vs',
    alignItems: 'center',
    borderColor: RawColors.dimGrey,
    paddingHorizontal: '8@s',
  },
  filter: {
    flex: 1,
    height: '46@vs',
    ...Fonts.Lato15R,
  },
  flatList: {
    marginHorizontal: '16@s',
  },
  mobileInput: {borderWidth: 0},
});

MobileNumber.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MobileNumber.defaultProps = {
  error: '',
  label: '',
  style: {},
  labelStyle: {},
};

export default MobileNumber;
