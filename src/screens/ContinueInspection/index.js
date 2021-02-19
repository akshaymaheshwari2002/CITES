import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';

const ContinueInspection = () => {
  const {formatMessage} = useIntl();

  const dummyInspectionData = [
    {
      inpection_id: 'dummy1235',
      facilityName: 'Reptile Farm Limited',
      dateOfInspection: '12/02/2021',
    },
    {
      inpection_id: 'dummy1234',
      facilityName: 'Priam Australia Pty',
      dateOfInspection: '12/02/2021',
    },
    {
      inpection_id: 'dummy1236',
      facilityName:
        'Priam Australia Pty Priam Australia Pty Priam Australia Pty Priam Australia Pty ',
      dateOfInspection: '11/01/2021',
    },
    {
      inpection_id: 'dummy1237',
      facilityName: 'Priam Australia Pty',
      dateOfInspection: '10/01/2021',
    },
  ];

  return (
    <Container>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.ContinueInspection.title_1'})}
        </Text>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.ContinueInspection.title_2'})}
        </Text>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.ContinueInspection.title_3'})}
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
                  // action
                }}
                buttonStyle={() => styles.button}
                buttonContent={
                  <>
                    <View style={styles.infoLine}>
                      <Text style={[styles.label, Fonts.Lato15B]}>
                        {formatMessage({
                          id: 'screen.ContinueInspection.label.facilityName',
                        })}
                        {': '}
                      </Text>
                      <Text style={[styles.flex, Fonts.Lato15B]}>
                        {item.facilityName}
                      </Text>
                    </View>
                    <View style={styles.infoLine}>
                      <Text style={styles.label}>
                        {formatMessage({
                          id:
                            'screen.ContinueInspection.label.dateOfInspection',
                        })}
                        {': '}
                      </Text>
                      <Text style={[styles.flex, Fonts.Lato14R]}>
                        {item.dateOfInspection}
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
        keyExtractor={(item) => item.inpection_id}
      />
    </Container>
  );
};

export default ContinueInspection;

const styles = ScaledSheet.create({
  titleView: {
    paddingHorizontal: '16@s',
    paddingVertical: '16@vs',
    backgroundColor: RawColors.white,
  },
  title: {
    lineHeight: '35@ms',
    textTransform: 'uppercase',
    ...Fonts.HelveticaNeue30B,
  },
  row_parent: {
    width: '100%',
    minHeight: '120@s',
    paddingVertical: '15@s',
    paddingLeft: '12%',
  },
  button: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: '#F6F9EF',
    padding: '16@s',
    elevation: '5@s',
    shadowColor: RawColors.softRed,
    shadowRadius: '6@s',
    shadowOffset: {height: 0, width: '3@s'},
  },
  infoLine: {
    flexDirection: 'row',
  },
  label: {
    minWidth: '130@ms',
    color: RawColors.brightRed,
    ...Fonts.Lato14R,
  },
  flex: {flex: 1},
  footer: {
    width: '100%',
    height: '15@s',
  },
});
