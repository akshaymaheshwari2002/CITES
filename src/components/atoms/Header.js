import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ms, ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {Fonts} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const Header = ({
  containerStyle,
  contentContainerStyle,
  content,
  headerTextStyle,
  leftContent,
  rightContent,
}) => (
  <View style={[styles.headerContainer, containerStyle]}>
    {leftContent}
    <View style={[styles.contentContainerStyle, contentContainerStyle]}>
      {typeof content === 'string' ? (
        <Text style={[Fonts.Lato15R, headerTextStyle]}>{content}</Text>
      ) : (
        content
      )}
    </View>
    {rightContent}
  </View>
);

const styles = ScaledSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: '16@s',
    ...CommonStyles.navigationHeader,
  },
  contentContainerStyle: {
    flex: 1,
  },
});

Header.propTypes = {
  containerStyle: PropTypes.object,
  contentContainerStyle: PropTypes.object,
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  headerTextStyle: PropTypes.object,
  leftContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  rightContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Header.defaultProps = {
  containerStyle: {},
  contentContainerStyle: {},
  content: null,
  headerTextStyle: {},
  leftContent: <Icon name="chevron-left" size={ms(22)} />,
  rightContent: null,
};

export default Header;
