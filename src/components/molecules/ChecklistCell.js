import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {Checkbox} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';

const ChecklistCell = ({
  content,
  value,
  onChange,
  wrapperStyle,
  checkboxContainerStyle,
}) => {
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {typeof content === 'string' ? (
        <Text style={Fonts.Lato15R}>{content}</Text>
      ) : (
        <View style={styles.content}>{content}</View>
      )}
      <View style={[styles.checkboxView, checkboxContainerStyle]}>
        <Checkbox value={value} onChange={onChange} hitSlop={scale(5)} />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: RawColors.spunPearl,
  },
  content: {
    flex: 1,
    padding: '16@ms',
  },
  checkboxView: {
    alignSelf: 'flex-start',
    padding: '16@ms',
  },
});

ChecklistCell.defaultProps = {
  content: null,
  value: null,
  onChange: () => {},
  wrapperStyle: {},
  checkboxContainerStyle: {},
};

ChecklistCell.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  value: PropTypes.bool,
  onChange: PropTypes.func,
  wrapperStyle: PropTypes.object,
  checkboxContainerStyle: PropTypes.object,
};

export default ChecklistCell;
