import React, {useRef, useCallback} from 'react';
import {Easing, Animated} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import PropTypes from 'prop-types';

const AnimatedView = ({
  children,
  startXPos,
  startYPos,
  endXPos,
  endYPos,
  elevatedXValue,
  elevatedYValue,
  easingFunction,
  duration,
}) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const xPos = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [startXPos, elevatedXValue, endXPos],
  });
  const yPos = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [startYPos, elevatedYValue, endYPos],
  });

  useFocusEffect(
    useCallback(() => {
      const ani = Animated.timing(animationValue, {
        toValue: 1,
        duration: duration,
        easing: easingFunction,
        useNativeDriver: true,
      });
      ani.start();

      return () => {
        animationValue.setValue(0);
      };
    }, [animationValue, duration, easingFunction]),
  );

  return (
    <Animated.View
      style={{
        transform: [{translateX: xPos}, {translateY: yPos}],
      }}>
      {children}
    </Animated.View>
  );
};

AnimatedView.propTypes = {
  startXPos: PropTypes.number.isRequired,
  startYPos: PropTypes.number.isRequired,
  endXPos: PropTypes.number,
  endYPos: PropTypes.number,
  elevatedXValue: PropTypes.number,
  elevatedYValue: PropTypes.number,
  duration: PropTypes.number,
};

AnimatedView.defaultProps = {
  startXPos: 0,
  startYPos: 0,
  endXPos: 0,
  endYPos: 0,
  elevatedXValue: 60,
  elevatedYValue: -20,
  easingFunction: Easing.elastic(1),
  duration: 1000,
};

export default AnimatedView;
