import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';

import {Container, Tooltip} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';

const Notes = ({navigation, route}) => {
  const {formatMessage} = useIntl();

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => {
        return (
          <Tooltip
            isVisible={route.params?.toolTip}
            content={
              <Text style={Fonts.Lato17B}>
                {formatMessage({
                  id: 'screen.StepOne.WalkThroughContentThree',
                })}
              </Text>
            }
            placement="top"
            onClose={() => {
              navigation.setParams({toolTip: false});
              navigation.navigate('DrawerMenu', {toolTip: true});
            }}>
            <Feather
              name="edit-3"
              size={verticalScale(35)}
              color={RawColors.grey75}
            />
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, route.params]);

  return (
    <Container statusBarProps={{backgroundColor: RawColors.darkSalmon}}>
      <Container.ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[Fonts.Lato20R, {color: RawColors.snow}]}>
          WORK IN PROGRESS
        </Text>
      </Container.ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: RawColors.darkSalmon,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Notes;
