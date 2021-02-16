import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet, scale} from 'react-native-size-matters';

import {Checkbox} from '@atoms';
import {RawColors} from '@styles/Themes';

const ChecklistCell = ({id, content, onToggle}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onToggle({checked, id});
  }, [checked, onToggle, id]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>{content}</View>
      <View style={styles.checkboxView}>
        <Checkbox
          checked={checked}
          onPress={() => {
            setChecked(!checked);
          }}
          hitSlop={scale(5)}
        />
      </View>
    </View>
  );
};

export default ChecklistCell;

ChecklistCell.defaultProps = {
  content: <View />,
  onToggle: () => {},
};

ChecklistCell.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.element,
  onToggle: PropTypes.func,
};

const styles = ScaledSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: '1@s',
    borderBottomColor: RawColors.spunPearl,
  },
  content: {
    flex: 1,
    padding: '15@s',
  },
  checkboxView: {
    alignSelf: 'flex-start',
    padding: '15@s',
  },
});
