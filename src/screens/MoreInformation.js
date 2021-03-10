import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import Config from '@config';
import {Container, Button, Header} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';

const MoreInformation = ({navigation: {navigate, goBack}}) => {
  const {formatMessage} = useIntl();
  const dummyInspectionData = [
    {
      id: 'dummy1235',
      contentOne: 'CITES Source Codes',
      contentTwo: 'Learn more about the ten current source codes',
    },
    {
      id: 'dummy1234',
      contentOne: 'Permits and Certificates  Article VI',
      contentTwo: 'http://www.cites.org/eng/disc/text.php#VI',
      url: Config.URL_MORE_INFO_ONE,
    },
    {
      id: 'dummy1236',
      contentOne:
        'Exemptions and Other Special Provisions Relating to Trade - Article VII',
      contentTwo: 'http://www.cites.org/eng/disc/text.php#VII',
      url: Config.URL_MORE_INFO_TWO,
    },
    {
      id: 'dummy1237',
      contentOne: 'Permits and Certificates Resolution Conf. 12.3 (Rev. CoP18)',
      contentTwo:
        'https://cites.org/sites/default/files/document/E-Res-12-03-R18.pdf',
      url: Config.URL_MORE_INFO_THREE,
    },
  ];
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
      />
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
                      <Text style={styles.letter}>{item.contentOne}</Text>
                      <Text style={styles.letterDescription}>
                        {item.contentTwo}
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
    lineHeight: '35@ms',
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
    height: '148@vs',
    backgroundColor: '#F7FAF0',
    ...CommonStyles.shadowEffect,
  },

  letter: {
    minWidth: '130@ms',
    color: RawColors.black,
    ...Fonts.Lato20B,
    textAlign: 'center',
    lineHeight: '21@s',
    alignSelf: 'center',
    //marginHorizontal: '20@s',
  },
  letterDescription: {
    minWidth: '130@ms',
    color: RawColors.black,
    textAlign: 'center',
    ...Fonts.Lato15R,
    lineHeight: '30@s',
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
