import React, {useRef, useEffect} from 'react';
import {Easing, Dimensions, Animated} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AnimatedView = ({
  children,
  startXPos = windowWidth,
  startYPos = windowHeight / 2,
  endXPos = 0,
  endYPos = 0,
  elevatedXValue = 60,
  elevatedYValue = -20,
  easingFunction = Easing.elastic(1),
  duration = 1000,
}) => {
  const isFocused = useIsFocused();
  const animationValue = useRef(new Animated.Value(0)).current;
  const xPos = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [startXPos, elevatedXValue, endXPos],
  });
  const yPos = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [startYPos, elevatedYValue, endYPos],
  });

  useEffect(() => {
    if (isFocused) {
      const ani = Animated.timing(animationValue, {
        toValue: 1,
        duration: duration,
        easing: easingFunction,
        useNativeDriver: true,
      });
      ani.start();
    } else {
      animationValue.setValue(0);
    }
  }, [animationValue, duration, easingFunction, isFocused]);

  return (
    <Animated.View
      style={{
        transform: [{translateX: xPos}, {translateY: yPos}],
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
