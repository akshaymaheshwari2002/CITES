import React from 'react';
import {Text, Pressable} from 'react-native';
import PropTypes from 'prop-types';
import {ScaledSheet} from 'react-native-size-matters';

// Common button component
const Button = ({
  title = '', // for text in button
  style = {}, // style for button
  stylePressed = {}, // style applied when pressed
  titleStyle = {}, // text style
  titleStylePressed = {}, // text style applied when pressed
  ...restProps
}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, style, pressed ? stylePressed : {}]}
      android_ripple={{
        color: '#fcfcfc',
      }}
      {...restProps}>
      {({pressed}) => {
        return (
          <Text
            style={[
              styles.buttonText,
              titleStyle,
              pressed ? titleStylePressed : {},
            ]}>
            {title}
          </Text>
        );
      }}
    </Pressable>
  );
};

const styles = ScaledSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: '14@s',
    padding: '10@s',
    marginVertical: '12@s',
    borderWidth: 1,
    borderColor: '#707070',
  },
  buttonText: {
    fontSize: 16,
    color: 'rgb(112,112,112)',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  stylePressed: PropTypes.object,
  titleStyle: PropTypes.object,
  titleStylePressed: PropTypes.object,
};

Button.defaultProps = {
  title: '',
  style: {},
  stylePressed: {},
  titleStyle: {},
  titleStylePressed: {},
};

export default Button;
