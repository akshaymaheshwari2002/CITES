import React, {useCallback, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {ms} from 'react-native-size-matters';

import {ChecklistCell} from '@molecules';
import {Images} from '@assets';
import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';

const ChoiceList = React.forwardRef(
  (
    {mode, label, items, showHelpIcon, error, onChange, onHelpIconPress, value},
    _,
  ) => {
    const handleChange = useCallback(
      (checkBoxValue, name) => {
        if (typeof checkBoxValue === 'boolean') {
          mode === 'check-box'
            ? onChange({...value, [name]: checkBoxValue})
            : onChange({[name]: checkBoxValue});
        }
      },
      [mode, onChange, value],
    );

    useEffect(() => {
      if (value) {
        let noValueSelected = true;
        Object.keys(value).map((name) => {
          if (typeof value[name] === 'boolean' && value[name]) {
            noValueSelected = false;
          }
        });

        if (noValueSelected) {
          onChange('');
        }
      }
    }, [onChange, value]);

    return (
      <View style={CommonStyles.flexRow}>
        <View style={CommonStyles.flex1}>
          {label ? (
            <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
          ) : null}
          <View style={styles.cellListContainer}>
            {items.map((itemProps, index) => (
              <ChecklistCell
                key={index}
                id={index.toString()}
                onChange={(checkBoxValue) =>
                  handleChange(checkBoxValue, itemProps.name)
                }
                value={value?.[itemProps.name]}
                wrapperStyle={styles.cellWrapper}
                checkboxContainerStyle={styles.checkboxContainer}
                {...itemProps}
              />
            ))}
          </View>
          {error ? (
            <Text style={[{color: RawColors.error}, Fonts.Lato15R]}>
              {error}
            </Text>
          ) : null}
        </View>
        {showHelpIcon ? (
          <TouchableOpacity onPress={onHelpIconPress}>
            <Image source={Images.information} style={styles.helpIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  cellListContainer: {marginTop: 12},
  cellWrapper: {
    borderBottomWidth: 0,
    marginBottom: 12,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  checkboxContainer: {padding: 0, marginRight: 16},
  helpIcon: {height: ms(40), width: ms(40), marginHorizontal: ms(8)},
});

ChoiceList.propTypes = {
  mode: PropTypes.oneOf(['radio-button', 'check-box']),
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  showHelpIcon: PropTypes.bool,
  onHelpIconPress: PropTypes.func,
};

ChoiceList.defaultProps = {
  mode: 'check-box',
  label: '',
  error: '',
  onChange: () => {},
  style: {},
  showHelpIcon: false,
  onHelpIconPress: () => {},
};

export default ChoiceList;
