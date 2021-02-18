import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StatusBar, Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {ScaledSheet, scale, verticalScale} from 'react-native-size-matters';
import Tooltip from 'react-native-walkthrough-tooltip';

import {Container, Button} from '@atoms';
import {StepHeader, ChecklistCell} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const Notes = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const [toolTip, setTooltipIndex] = useState(route.params.toolTip ? 1 : 0);

  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => {
        return (
          <Tooltip
            topAdjustment={
              Platform.OS === 'android' ? -StatusBar.currentHeight : 0
            }
            isVisible={toolTip}
            content={
              <Text style={styles.toolTipContent}>
                {formatMessage({
                  id: 'screen.StepOne.WalkThroughContentFour',
                })}
              </Text>
            }
            backgroundColor={RawColors.backToolTipColor}
            arrowStyle={styles.arrowStyle}
            tooltipStyle={styles.toolTipStyle}
            placement="top"
            contentStyle={styles.toolTipContentStyle}
            arrowSize={styles.arrowSize}
            childContentSpacing={0}
            onClose={() => {
              setTooltipIndex(0);
              navigation.navigate('DrawerMenu', {toolTip: true});
            }}>
            <View style={toolTip ? styles.icon : {}}>
              <Feather
                name={'edit-3'}
                size={verticalScale(35)}
                color={RawColors.grey75}
              />
            </View>
          </Tooltip>
        );
      },
    });
  }, [formatMessage, navigation, toolTip]);

  return (
    <Container>
      <Container.ScrollView style={CommonStyles.screenContainer}>
        <View>
          <Text>Hello</Text>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  arrowSize: {height: 10, width: 10},
  arrowStyle: {margin: 2},
  toolTipStyle: {marginHorizontal: 10},
  toolTipContent: {
    ...Fonts.Lato17B,
  },
  toolTipContentStyle: {height: 100, width: 202, borderRadius: 10},
  icon: {
    borderRadius: 13,
    borderColor: RawColors.softRed,
    borderWidth: 3,
    backgroundColor: RawColors.white,
  },
});

export default Notes;
