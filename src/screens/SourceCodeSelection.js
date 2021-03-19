import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import SourceCodeData from './SourceCode/SourceCodeData';
import CommonStyles from '@styles/CommonStyles';

const SourceData = ['W', 'R', 'F', 'C', 'A', 'D', 'X', 'U', 'I', 'O'];

const SourceCodeSelection = ({navigation}) => {
  const {formatMessage} = useIntl();

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.SourceCodeSelection.title'})}
        </Text>
      </View>
      <FlatList
        data={SourceData}
        style={styles.flex}
        renderItem={({index, item}) => {
          return (
            <View style={styles.row_parent}>
              <Button
                onPress={() => {
                  navigation.navigate('SourceCode', {selectedSourceCode: item});
                }}
                buttonStyle={() => styles.button}
                buttonContent={
                  <>
                    <View style={styles.bottomMargin10}>
                      <Text style={styles.letter}>
                        {SourceCodeData[item].code}
                      </Text>
                      <Text style={styles.letterDescription}>
                        {formatMessage({
                          id: SourceCodeData[item].letterDescription,
                        })}
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
        keyExtractor={(code) => code}
      />
    </Container>
  );
};

export default SourceCodeSelection;

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
  infoline: {},
  button: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 0,
    width: '273@s',
    height: '148@vs',
    backgroundColor: '#F7FAF0',
    elevation: '5@s',
    ...CommonStyles.shadowEffect,
  },

  letter: {
    minWidth: '130@ms',
    color: RawColors.redShade,
    ...Fonts.Didot56B,
    textAlign: 'center',
  },
  letterDescription: {
    minWidth: '130@ms',
    color: RawColors.black,
    lineHeight: '25@s',
    textAlign: 'center',
    ...Fonts.Lato15R,
  },
  flex: {flex: 1},
  footer: {
    width: '100%',
    height: '15@s',
  },
  bottomMargin10: {
    marginBottom: '10@vs',
  },
});
