import React, {useCallback, useState, useRef, useMemo} from 'react';
import {View, Text, Pressable, Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms, vs} from 'react-native-size-matters';

import {RawColors, Fonts} from '@styles/Themes';

const LanguageSelectionDropdown = ({items, placeholder, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const spinValueArrow = useRef(new Animated.Value(0)).current;
  const dropDownOpacity = useRef(new Animated.Value(0)).current;
  const dropDownHeightValue = useRef(new Animated.Value(0)).current;

  const spin = useMemo(
    () =>
      spinValueArrow.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
      }),
    [spinValueArrow],
  );

  const dropDownAnimationStyle = useMemo(
    () => ({
      maxHeight: dropDownHeightValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, vs(300)],
        easing: Easing.linear,
      }),
      opacity: dropDownOpacity,
    }),
    [dropDownHeightValue, dropDownOpacity],
  );

  const animate = useCallback(
    ({toValue = 1, callbackFunc = () => {}}) => {
      Animated.timing(spinValueArrow, {
        toValue,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
      Animated.timing(dropDownHeightValue, {
        toValue,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
      Animated.timing(dropDownOpacity, {
        toValue,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(({finished}) => {
        callbackFunc();
      });
    },
    [dropDownHeightValue, dropDownOpacity, spinValueArrow],
  );

  const toggleDropdown = useMemo(
    () => (targetState = !isOpen) => {
      if (targetState) {
        setIsOpen(true);
        animate({toValue: 1});
      } else {
        animate({
          toValue: 0,
          callbackFunc: () => {
            setIsOpen(false);
          },
        });
      }
    },
    [animate, isOpen],
  );

  const ItemElement = useCallback(({value, wideColumn, onPress}) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.ItemElement,
          {
            width: wideColumn ? ms(170) : ms(120),
          },
        ]}>
        {({pressed}) => (
          <Text
            style={{
              ...Fonts.Lato15R,
              marginHorizontal: ms(20),
              color: pressed ? RawColors.brightRed : RawColors.black,
            }}>
            {value?.label}
          </Text>
        )}
      </Pressable>
    );
  }, []);

  return (
    <View style={styles.containerView}>
      <Pressable
        onPress={() => {
          toggleDropdown();
        }}
        style={[
          styles.placeholderWrapper,
          {
            borderBottomLeftRadius: isOpen ? ms(0) : ms(8),
            borderBottomRightRadius: isOpen ? ms(0) : ms(8),
          },
        ]}>
        <Text style={styles.placeholderStyle}>{placeholder}</Text>
        <Animated.View
          style={{
            transform: [{rotateZ: spin}],
          }}>
          <Icon name={'chevron-down'} size={25} />
        </Animated.View>
      </Pressable>
      {isOpen ? (
        <Animated.View
          style={[
            styles.ListWrapperParent,
            {
              ...dropDownAnimationStyle,
            },
          ]}>
          <View style={styles.ListWrapperChild}>
            {items?.slice(0, 5).map((value, index) => (
              <ItemElement
                key={`${index}`}
                value={value}
                index={index}
                onPress={() => {
                  onChange(value?.value);
                  toggleDropdown();
                }}
                wideColumn={false}
              />
            ))}
          </View>
          <View style={styles.ListWrapperChild}>
            {items?.slice(5, 10).map((value, index) => (
              <ItemElement
                key={`${index}`}
                value={value}
                index={index}
                onPress={() => {
                  onChange(value?.value);
                  toggleDropdown();
                }}
                wideColumn={true}
              />
            ))}
          </View>
        </Animated.View>
      ) : null}
    </View>
  );
};

export default LanguageSelectionDropdown;

const styles = ScaledSheet.create({
  containerView: {
    justifyContent: 'flex-start',
    width: '85%',
    marginTop: '30@s',
  },
  placeholderStyle: {...Fonts.Lato17B, color: 'black'},
  placeholderWrapper: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '12@ms',
    paddingRight: '12@ms',
    paddingLeft: '16@ms',
    borderTopRightRadius: '8@ms',
    borderTopLeftRadius: '8@ms',
    backgroundColor: RawColors.lightGrey,
  },
  ListWrapperParent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: RawColors.lightGrey,
    borderBottomLeftRadius: '8@ms',
    borderBottomRightRadius: '8@ms',
    overflow: 'hidden',
  },
  ListWrapperChild: {
    flexDirection: 'column',
  },
  ItemElement: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '40@ms',
  },
});
