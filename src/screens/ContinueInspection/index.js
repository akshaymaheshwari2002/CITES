import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';

import {Container, Button} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets/';
import {getInstance} from '@utils/RealmHelper';
import {setActiveInspection} from '@store/slices/persistedSlice';

const ContinueInspection = ({navigation}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [activeInspections, setActiveInspections] = useState([]);

  const handleItemPress = useCallback(
    (item) => {
      dispatch(
        setActiveInspection({
          id: item._id,
          activeStepOneId: item.stepOne?._id,
          activeFormOneId: item.stepOne?.formOne?._id,
        }),
      );
      navigation.navigate('StepOne');
    },
    [dispatch, navigation],
  );

  useEffect(() => {
    (async () => {
      const realm = await getInstance();
      let inspectionObjects = realm.objects('Inspection');
      inspectionObjects = JSON.parse(JSON.stringify(inspectionObjects));

      setActiveInspections(inspectionObjects);
    })();
  }, []);

  const renderItem = useCallback(
    ({item}) => {
      const facilityName = item.stepOne.formOne?.facilityName;
      const dateOfInspection = item.stepOne.formOne?.dateOfInspection;

      return (
        <View style={styles.row_parent}>
          <Button
            onPress={() => handleItemPress(item)}
            buttonStyle={() => styles.button}
            buttonContent={
              <>
                <View>
                  <Image
                    source={Images.continueCircleIcon}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={[styles.bottomMargin10, styles.infoLine]}>
                  <Text style={[styles.label, Fonts.Lato15B]}>
                    {formatMessage({
                      id: 'screen.ContinueInspection.label.facilityName',
                    })}
                    {': '}
                  </Text>
                  <Text style={[styles.flex, Fonts.Lato15B]}>
                    {facilityName || 'NA'}
                  </Text>
                </View>
                <View style={styles.infoLine}>
                  <Text style={styles.label}>
                    {formatMessage({
                      id: 'screen.ContinueInspection.label.dateOfInspection',
                    })}
                    {': '}
                  </Text>
                  <Text style={[styles.flex, Fonts.Lato14R]}>
                    {dateOfInspection
                      ? new Date(
                          parseInt(dateOfInspection, 10),
                        ).toLocaleDateString()
                      : 'NA'}
                  </Text>
                </View>
              </>
            }
          />
        </View>
      );
    },
    [formatMessage, handleItemPress],
  );

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
        data={activeInspections}
        style={styles.flex}
        contentContainerStyle={styles.flexGrow}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.flexContainer}>
            <Text style={[styles.emptyListText, Fonts.Lato17R]}>
              {formatMessage({id: 'screen.ContinueInspection.emptyList'})}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.goBackButton}
                onPress={() => navigation.goBack()}>
                <Text style={[styles.buttonText, Fonts.Lato17R]}>
                  {formatMessage({id: 'screen.ContinueInspection.goBack'})}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        ListFooterComponent={<View />}
        ListFooterComponentStyle={styles.footer}
        keyExtractor={(item) => item._id}
      />
    </Container>
  );
};

const styles = ScaledSheet.create({
  flexGrow: {flexGrow: 1},
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
  icon: {
    height: '35@ms',
    width: '35@ms',
    marginBottom: '16@vs',
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
  bottomMargin10: {
    marginBottom: '10@vs',
  },
  goBackButton: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: RawColors.eggshell,
    borderRadius: '8@ms',
    paddingVertical: '10@vs',
  },
  buttonText: {
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  flexContainer: {flex: 1, flexGrow: 1},
  emptyListText: {
    marginHorizontal: '16@s',
  },
});

export default ContinueInspection;
