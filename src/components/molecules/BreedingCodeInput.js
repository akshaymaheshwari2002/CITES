import React, {useState, useEffect, Fragment} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';

const CELL_COUNT = 6;
const BreedingCodeInput = React.forwardRef(
  ({label, error, onChange, value: _value}, _) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });

    useEffect(() => {
      onChange(value);
    }, [onChange, value]);

    useEffect(() => {
      setValue(_value);
    }, [_value]);

    return (
      <View style={styles.root}>
        {label ? (
          <Text style={[CommonStyles.flex1, Fonts.Lato15B]}>{label}</Text>
        ) : null}
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Fragment key={index}>
              <Text
                key={`value-${index}`}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
              {index === 0 || index === 2 ? (
                <View key={`separator-${index}`} style={styles.separator} />
              ) : null}
            </Fragment>
          )}
        />
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
      </View>
    );
  },
);

const styles = ScaledSheet.create({
  root: {flex: 1},
  codeFieldRoot: {marginTop: '20@vs'},
  cell: {
    width: '40@s',
    height: '40@s',
    lineHeight: 38,
    ...Fonts.Lato20R,
    borderWidth: 2,
    borderColor: RawColors.dimGrey,
    backgroundColor: RawColors.lightGrey,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: RawColors.black,
  },
  separator: {
    height: '2@vs',
    width: '10@s',
    backgroundColor: RawColors.black,
    alignSelf: 'center',
  },
});

BreedingCodeInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

BreedingCodeInput.defaultProps = {
  label: '',
  error: '',
  onChange: () => {},
};

export default BreedingCodeInput;
