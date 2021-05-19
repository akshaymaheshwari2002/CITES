import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';

const BreedingCodeInput = React.forwardRef(({label}, _) => {
  const [value, setValue] = useState('');
  const CELL_COUNT = 8;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
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
          <>
            {index !== 1 && index !== 4 ? (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            ) : (
              <Text key={index} style={styles.dash}>
                -
              </Text>
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
});

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
  dash: {
    ...Fonts.HelveticaNeue25B,
    textAlignVertical: 'center',
  },
});

BreedingCodeInput.propTypes = {
  label: PropTypes.string,
};

BreedingCodeInput.defaultProps = {
  label: '',
};

export default BreedingCodeInput;
