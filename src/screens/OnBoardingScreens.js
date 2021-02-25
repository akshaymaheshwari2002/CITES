import React, {useRef, useCallback, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/Feather';
import {ScaledSheet, ms} from 'react-native-size-matters';

import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import OnboardingOne from './OnboardingOne';
import OnboardingTwo from './OnboardingTwo';
import OnboardingThree from './OnboardingThree';
import OnboardingFour from './OnboardingFour';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnBoardingScreens = ({navigation}) => {
  const flatListRef = useRef(undefined);
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [OnboardingOne, OnboardingTwo, OnboardingThree, OnboardingFour];

  const handelBackPress = useCallback(
    (index) => {
      if (index === 0) {
        navigation.goBack();
      } else {
        scrollToActiveIndex(index - 1);
      }
    },
    [navigation, scrollToActiveIndex],
  );

  const handelFordwardPress = useCallback(
    (index) => {
      if (index === data?.length - 1) {
        navigation.navigate('TabNavigator', {
          screen: 'StepOne',
          params: {showToolTip: true},
        });
      } else {
        scrollToActiveIndex(index + 1);
      }
    },
    [data, navigation, scrollToActiveIndex],
  );
  const scrollToActiveIndex = useCallback((index) => {
    setActiveIndex(index);
    flatListRef?.current?.scrollToOffset({
      offset: index * windowWidth,
      animated: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={false}
        data={data}
        // onMomentumScrollEnd={(e) => {
        //   scrollToActiveIndex(
        //     Math.floor(e?.nativeEvent?.contentOffset?.x / windowWidth),
        //   );
        // }}
        // ItemSeparatorComponent={() => {
        //   return <View style={styles.separator} />;
        // }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item: Item, index}) => {
          return (
            <View style={[styles.contentContainer, CommonStyles.shadowEffect]}>
              {
                <Item
                  onBackPress={() => handelBackPress(index)}
                  onFordwardPress={() => handelFordwardPress(index)}
                />
              }
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: RawColors.transparent,
  },
  contentContainer: {
    flex: 1,
    width: windowWidth,
  },
  separator: {
    flex: 1,
    width: 0.5,
    backgroundColor: 'black',
  },
});

export default OnBoardingScreens;
