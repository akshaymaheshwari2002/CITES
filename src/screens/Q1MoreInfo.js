import React from 'react';
import {View, Text} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import Config from '@config';
import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const Q1MoreInfo = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.margin}>
          <View style={styles.title}>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.q1MoreInfo.title'})}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={() =>
                navigation.navigate('WebView', {
                  sourceUri: Config.URL_Q1_MORE_INFO_ONE,
                })
              }
              buttonStyle={() => styles.button}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.content}>
                    {formatMessage({
                      id: 'screen.q1MoreInfo.contentOnePartOne',
                    })}
                  </Text>
                  <View style={styles.secondText}>
                    <Text style={styles.content}>
                      {formatMessage({
                        id: 'screen.q1MoreInfo.contentOnePartTwo',
                      })}
                    </Text>
                  </View>
                </>
              }
            />
            <Button
              onPress={() =>
                navigation.navigate('WebView', {
                  sourceUri: Config.URL_Q1_MORE_INFO_TWO,
                })
              }
              buttonStyle={() => styles.button}
              buttonTextStyle={() => ({color: RawColors.black})}
              buttonContent={
                <>
                  <Text style={styles.content}>
                    {formatMessage({
                      id: 'screen.q1MoreInfo.contentOnePartOne',
                    })}
                  </Text>
                  <View style={styles.secondText}>
                    <Text style={styles.content}>
                      {formatMessage({
                        id: 'screen.q1MoreInfo.contentTwoPartTwo',
                      })}
                    </Text>
                  </View>
                </>
              }
            />
            <Button
              onPress={() =>
                navigation.navigate('WebView', {
                  sourceUri: Config.URL_Q1_MORE_INFO_THREE,
                })
              }
              buttonStyle={() => styles.button}
              buttonContent={
                <>
                  <Text style={styles.content}>
                    {formatMessage({
                      id: 'screen.q1MoreInfo.contentThreePartOne',
                    })}
                  </Text>
                  <View style={styles.secondText}>
                    <Text style={styles.contentTwo}>
                      {formatMessage({
                        id: 'screen.q1MoreInfo.contentThreePartTwo',
                      })}
                    </Text>
                  </View>
                </>
              }
            />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

export default Q1MoreInfo;

const styles = ScaledSheet.create({
  margin: {
    marginHorizontal: '16@s',
    alignItems: 'flex-start',
  },
  title: {
    marginTop: '40@vs',
  },
  titleContent: {
    ...Fonts.HelveticaNeue20B,
    marginHorizontal: '10@s',
    lineHeight: '23@s',
    letterSpacing: '0.32@s',
  },
  button: {
    height: '80@ms',
    marginTop: '35@s',
    backgroundColor: RawColors.lightGrey,
  },
  buttonWrapper: {
    marginTop: 'auto',
  },
  content: {
    color: RawColors.black,
    textAlign: 'center',
    ...Fonts.Regular15R,
    lineHeight: '20@s',
  },
  contentTwo: {
    minWidth: '130@ms',
    color: RawColors.black,
    textAlign: 'center',
    ...Fonts.Regular15R,
    lineHeight: '20@s',
  },
  footer: {
    width: '100%',
    height: '15@s',
  },
});
