import React, {forwardRef, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import CountryPickerModal from 'react-native-country-picker-modal';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {RawColors, Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const CountryPicker = forwardRef(
  ({error, placeholder, label, style, labelStyle, onChange, value}, _) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onSelect = useCallback(
      ({name}) => {
        onChange(name);
        setModalVisible(false);
      },
      [onChange],
    );

    return (
      <>
        {label ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15R, labelStyle]}>
            {label}
          </Text>
        ) : null}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[CommonStyles.flexRow, styles.container, style]}>
          <CountryPickerModal
            theme={{onBackgroundTextColor: RawColors.black}}
            closeButton={<Icon name="chevron-left" size={ms(26)} />}
            filterProps={{style: styles.filter}}
            flatListProps={{style: styles.flatList}}
            renderFlagButton={() => null}
            modalProps={{
              animationType: 'fade',
              transparent: true,
              visible: modalVisible,
            }}
            onSelect={onSelect}
            withFilter={true}
            onClose={() => setModalVisible(false)}
          />
          <Text
            numberOfLines={1}
            style={[
              styles.countryName,
              {color: value ? RawColors.black : RawColors.grey},
            ]}>
            {value || placeholder}
          </Text>
        </TouchableOpacity>
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
  countryName: {
    ...CommonStyles.flex1,
    ...Fonts.Lato15R,
  },
});

CountryPicker.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CountryPicker.defaultProps = {
  error: '',
  label: '',
  style: {},
  labelStyle: {},
};

export default CountryPicker;
