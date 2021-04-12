import React, {useMemo, useCallback, useState, useEffect} from 'react';
import {renderToString} from 'react-dom/server';
import {WebView as RNWebView} from 'react-native-webview';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {format} from 'date-fns';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';

import {Container} from '@atoms';
import {FormThreeTemplate, FormThreeHeader} from '@molecules';
import {saveRegisteredSpecies} from '@store/slices/sessionSlice';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import Constants from '@utils/Constants';

const getHtmlStringFromJsx = (element) => {
  return `
    <!DOCTYPE html>
    <html>
      <script>
        function shipData(name, value) {
          var data = JSON.stringify({name, value});
          window.ReactNativeWebView.postMessage(data);
        }
      </script>
      <head>
        <title>Example</title>
      </head>
      <body>
        ${element ? renderToString(element) : ''}
      </body>
    </html>
    `;
};

const formatFormThreeDataToDisplay = (data) => ({
  ...data,
  dateFirstSpeciesAcquired: data?.dateFirstSpeciesAcquired
    ? format(Number(data?.dateFirstSpeciesAcquired), 'yyyy-MM-dd')
    : '',
  whenDidYouBreedThisSpecies: data?.whenDidYouBreedThisSpecies
    ? format(Number(data?.whenDidYouBreedThisSpecies), 'yyyy-MM-dd')
    : '',
});

const FormThreeSummaryEdit = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [registeredSpeciesModified, setRegisteredSpeciesModified] = useState(
    [],
  );
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection.registeredSpecies,
    shallowEqual,
  );
  const formData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne,
    shallowEqual,
  );

  useEffect(() => {
    setRegisteredSpeciesModified(registeredSpecies);
  }, [registeredSpecies]);

  const facilityData = useMemo(
    () => ({
      ...formData,
      facilityOwnerPhone_callingCode:
        formData?.facilityOwnerPhone?.callingCode ?? '',
      facilityOwnerPhone_contactNumber:
        formData?.facilityOwnerPhone?.contactNumber ?? '',
      dateOfInspection: formData?.dateOfInspection
        ? format(Number(formData?.dateOfInspection), 'MM/dd/yyyy')
        : '',
      facilityEstablishmentDate: formData?.facilityEstablishmentDate
        ? format(Number(formData?.facilityEstablishmentDate), 'MM/dd/yyyy')
        : '',
      typeOfInspection: formData?.typeOfInspection
        ? formData?.typeOfInspection[0]?.replace('_', ' ')
        : '',
    }),
    [formData],
  );

  const html = useMemo(
    () =>
      getHtmlStringFromJsx(
        <>
          {Array.isArray(registeredSpecies)
            ? registeredSpecies.map((speciesData, index) => (
                <React.Fragment key={`${index}`}>
                  <FormThreeHeader
                    facilityData={{
                      ...facilityData,
                      speciesName: speciesData?.name,
                    }}
                    form={'three'}
                    editable={false}
                  />
                  <FormThreeTemplate
                    speciesData={formatFormThreeDataToDisplay(speciesData)}
                    speciesIndex={index}
                    editable={true}
                  />
                  <div style={{breakAfter: 'page'}} />
                </React.Fragment>
              ))
            : null}
        </>,
      ),
    [facilityData, registeredSpecies],
  );

  const handleMessage = useCallback(
    (ev) => {
      const data = JSON.parse(ev.nativeEvent.data);

      setRegisteredSpeciesModified(() => {
        const _state = [...registeredSpeciesModified];
        const changedSpeciesIndex = parseInt(data.name.split('.')[1], 10);
        const changedPropertyKey = data.name.split('.')[2];
        if (
          changedPropertyKey === 'dateFirstSpeciesAcquired' ||
          changedPropertyKey === 'whenDidYouBreedThisSpecies'
        ) {
          _state[changedSpeciesIndex] = {
            ...registeredSpeciesModified[changedSpeciesIndex],
            [changedPropertyKey]: String(Date.parse(data.value) ?? ''),
          };
        } else if (
          changedPropertyKey === 'foodFedToAdults' ||
          changedPropertyKey === 'foodFedToRearingAndJuveniles'
        ) {
          _state[changedSpeciesIndex] = {
            ...registeredSpeciesModified[changedSpeciesIndex],
            [changedPropertyKey]: Array.isArray(
              data.value?.split(',')?.map((value) => value?.trim() ?? ''),
            )
              ? data.value?.split(',')?.map((value) => value?.trim() ?? '')
              : [],
          };
        } else if (
          changedPropertyKey === 'doYouBreedThisSpecies' ||
          changedPropertyKey === 'doYouRanchThisSpecies'
        ) {
          _state[changedSpeciesIndex] = {
            ...registeredSpeciesModified[changedSpeciesIndex],
            [changedPropertyKey]: data.value ? [data.value] : [Constants.NO],
          };
        } else if (
          changedPropertyKey === 'cmOrGramOfSizeOrMassAtSexualMaturity' ||
          changedPropertyKey === 'cmOrGramOfSizeOrMassAtSaleOrExport'
        ) {
          _state[changedSpeciesIndex] = {
            ...registeredSpeciesModified[changedSpeciesIndex],
            [changedPropertyKey]:
              data.value === 'cm' ? true : data.value === 'g' ? false : true,
          };
        } else {
          _state[changedSpeciesIndex] = {
            ...registeredSpeciesModified[changedSpeciesIndex],
            [changedPropertyKey]: data.value,
          };
        }
        return _state;
      });
    },
    [registeredSpeciesModified],
  );

  const handleSubmit = useCallback(() => {
    dispatch(
      saveRegisteredSpecies(
        Array.isArray(registeredSpeciesModified)
          ? [...registeredSpeciesModified]
          : [],
      ),
    );
    navigation.goBack();
  }, [dispatch, navigation, registeredSpeciesModified]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={styles.ScrollViewStyle}
        style={CommonStyles.flex1}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormThreeSummary.title_1'}) + ':'}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormOneSummary.title_2'})}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormOneSummary.edit'})}
          </Text>
        </View>
        <View style={styles.subHeading}>
          <Text style={[Fonts.Lato15R, styles.subHeadingText]}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_1'})}
          </Text>
          <Text style={[Fonts.Lato15R, styles.subHeadingText]}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_2'})}
          </Text>
          <Text style={[Fonts.Lato15R, styles.subHeadingText]}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_3'})}
          </Text>
        </View>
        <RNWebView
          startInLoadingState={true}
          source={{html}}
          onMessage={handleMessage}
        />
      </Container.ScrollView>
      <View style={styles.slideBtnContainerStep}>
        <TouchableOpacity style={styles.slideBtn} onPress={handleSubmit}>
          <View style={styles.row}>
            <View style={[styles.padding16, styles.marginDimension]}>
              <Text style={styles.text}>
                {formatMessage({id: 'general.save'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'general.changes'})}
              </Text>
            </View>
            <View style={styles.justifyContent}>
              <Icon name="chevron-right" size={ms(22)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slideBtnContainerEdit}>
        <TouchableOpacity
          style={[styles.slideBtn, styles.borderStyle]}
          onPress={() => navigation.goBack()}>
          <View style={styles.row}>
            <View style={styles.padding16}>
              <Text style={styles.text}>
                {formatMessage({id: 'general.discard'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'general.changes'})}
              </Text>
            </View>
            <View style={styles.justifyContent}>
              <Icon name="x" size={ms(26)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
  ScrollViewStyle: {flexGrow: 1, backgroundColor: RawColors.white},
  title: {
    lineHeight: '35@ms',
    textTransform: 'uppercase',
    ...Fonts.HelveticaNeue30B,
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '25@vs',
  },
  subHeadingText: {
    color: RawColors.charcoalGrey60,
  },
  slideBtnContainerStep: {
    position: 'absolute',
    top: '16@vs',
    right: 0,
    paddingLeft: '5@s',
  },
  slideBtnContainerEdit: {
    position: 'absolute',
    top: '85@vs',
    right: 0,
    paddingLeft: '5@s',
  },
  slideBtn: {
    height: '50@vs',
    width: '160@s',
    backgroundColor: RawColors.beige,
    justifyContent: 'center',
    borderTopLeftRadius: '8@ms',
    borderBottomLeftRadius: '8@ms',
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    ...Fonts.Lato15B,
    alignSelf: 'flex-end',
    textTransform: 'uppercase',
  },
  padding16: {
    padding: '16@ms',
  },
  justifyContent: {
    justifyContent: 'center',
  },
  borderStyle: {
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
  },
  marginDimension: {
    marginLeft: '6@ms',
  },
});

export default FormThreeSummaryEdit;
