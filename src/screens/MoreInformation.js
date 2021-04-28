import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import Config from '@config';
import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const MoreInformation = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  const dummyInspectionData = [
    {
      id: 'dummy1235',
      contentOne: 'screen.moreInfoButtonOneContentOne',
      subContentOne: 'screen.moreInfoButtonSubContentTwo',
      contentTwo: 'screen.moreInfoButtonOneContentTwo',
    },
    {
      id: 'dummy1234',
      contentOne: 'screen.moreInfoButtonTwoContentOne',
      contentTwo: 'screen.moreInfoButtonTwoContentTwo',
      url: Config.URL_MORE_INFO_ONE,
    },
    {
      id: 'dummy1236',
      contentOne: 'screen.moreInfoButtonThreeContentOne',
      contentTwo: 'screen.moreInfoButtonThreeContentTwo',
      url: Config.URL_MORE_INFO_TWO,
    },
    {
      id: 'dummy1237',
      contentOne: 'screen.moreInfoButtonFourContentOne',
      subContentOne: 'screen.moreInfoButtonFourSubContentTwo',
      contentTwo: 'screen.moreInfoButtonFourContentTwo',
      url: Config.URL_MORE_INFO_THREE,
    },
  ];
  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.MoreInformation.title'})}
        </Text>
      </View>
      <FlatList
        data={dummyInspectionData}
        style={styles.flex}
        renderItem={({index, item}) => {
          return (
            <View style={styles.row_parent}>
              <Button
                onPress={() => {
                  if (item.url) {
                    navigate('WebView', {
                      sourceUri: item.url,
                    });
                  } else {
                    navigate('SourceCodeSelection');
                  }
                }}
                buttonStyle={() => styles.button}
                buttonContent={
                  <>
                    <View style={styles.bottomMargin10}>
                      <Text style={styles.letter}>
                        {formatMessage({id: item.contentOne})}
                      </Text>
                      {item.subContentOne ? (
                        <Text style={styles.letter}>
                          {formatMessage({id: item.subContentOne})}
                        </Text>
                      ) : null}
                      <Text style={styles.letterDescription}>
                        {formatMessage({id: item.contentTwo})}
                      </Text>
                    </View>
                  </>
                }
              />
            </View>
          );
        }}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default MoreInformation;

const styles = ScaledSheet.create({
  titleView: {
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    backgroundColor: RawColors.white,
  },
  title: {
    //lineHeight: '35@ms',
    alignSelf: 'center',
    ...Fonts.HelveticaNeue30B,
  },
  row_parent: {
    minHeight: '120@s',
    paddingVertical: '15@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 0,
    width: '273@s',
    padding: '20@s',
    backgroundColor: '#F7FAF0',
    ...CommonStyles.shadowEffect,
    textAlign: 'center',
  },

  letter: {
    width: '220@s',
    color: RawColors.black,
    ...Fonts.Lato20B,
    textAlign: 'center',
    alignSelf: 'center',
  },
  letterDescription: {
    width: '200@s',
    color: RawColors.black,
    marginTop: '7@vs',
    textAlign: 'center',
    alignSelf: 'center',
    ...Fonts.Lato15R,
    lineHeight: '20@ms',
  },
  flex: {flex: 1},
  footer: {
    width: '100%',
    height: '15@s',
  },
  bottomMargin10: {
    //marginBottom: '10@vs',
  },
});
