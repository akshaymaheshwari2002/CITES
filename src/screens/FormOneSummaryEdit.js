import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {WebView as RNWebView} from 'react-native-webview';
import {View, Text, TouchableOpacity} from 'react-native';
import {renderToString} from 'react-dom/server';
import {useIntl} from 'react-intl';
import {format} from 'date-fns';
import {
  saveInspection,
  saveRegisteredSpecies,
} from '@store/slices/sessionSlice';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from '@atoms';
import {FormOneTemplate, FormOneHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {
  formText,
  formTitle,
  facilitySchema,
  formOneLabels,
} from '@utils/TranslationMapping';

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

const formatFormDataToDisplay = (data) => ({
  ...data,
  facilityOwnerPhone_callingCode: data?.facilityOwnerPhone?.callingCode ?? '',
  facilityOwnerPhone_contactNumber:
    data?.facilityOwnerPhone?.contactNumber ?? '',
  dateOfInspection: data?.dateOfInspection
    ? format(Number(data?.dateOfInspection), 'MM/dd/yyyy')
    : '',
  facilityEstablishmentDate: data?.facilityEstablishmentDate
    ? format(Number(data?.facilityEstablishmentDate), 'MM/dd/yyyy')
    : '',
  typeOfInspection: data?.typeOfInspection
    ? data?.typeOfInspection[0]?.replace('_', ' ')
    : '',
});

const FormOneSummaryEdit = ({navigation}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [facilityDataModified, setfacilityDataModified] = useState({});
  const [registeredSpeciesModified, setRegisteredSpeciesModified] = useState(
    [],
  );

  const formData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne || {},
    shallowEqual,
  );
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection.registeredSpecies || [],
    shallowEqual,
  );

  const formTextLabel = useMemo(() => {
    let translatedFormText = {};
    Object.keys(formText ?? {}).forEach((id, index) => {
      translatedFormText = {
        ...translatedFormText,
        [id]: formatMessage({
          id: formText[id],
        }),
      };
    });
    return translatedFormText;
  }, [formatMessage]);

  const formTitleLabels = useMemo(() => {
    let translatedFormTitle = {};
    Object.keys(formTitle ?? {}).forEach((id, index) => {
      translatedFormTitle = {
        ...translatedFormTitle,
        [id]: formatMessage({
          id: formTitle[id],
        }),
      };
    });
    return translatedFormTitle;
  }, [formatMessage]);

  const facilitySchemaLabels = useMemo(() => {
    let translatedfacilitySchema = {};
    Object.keys(facilitySchema ?? {}).forEach((id, index) => {
      translatedfacilitySchema = {
        ...translatedfacilitySchema,
        [id]: formatMessage({
          id: facilitySchema[id],
        }),
      };
    });
    return translatedfacilitySchema;
  }, [formatMessage]);

  const labels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(formOneLabels ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: formOneLabels[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);

  const html = useMemo(
    () =>
      getHtmlStringFromJsx(
        <>
          <FormOneHeader
            facilityData={formatFormDataToDisplay(formData)}
            editable={true}
            formText={formTextLabel}
            formTitle={formTitleLabels}
            facilitySchema={facilitySchemaLabels}
          />
          <FormOneTemplate
            speciesData={registeredSpecies}
            editable={true}
            formOneLabels={labels}
          />
        </>,
      ),
    [
      facilitySchemaLabels,
      formData,
      formTextLabel,
      formTitleLabels,
      labels,
      registeredSpecies,
    ],
  );

  const handleSubmit = useCallback(() => {
    const __facilityDataModified = {...facilityDataModified};
    delete __facilityDataModified._id;
    __facilityDataModified.facilityOwnerPhone = {
      callingCode: __facilityDataModified?.facilityOwnerPhone_callingCode ?? '',
      contactNumber:
        __facilityDataModified?.facilityOwnerPhone_contactNumber ?? '',
    };
    delete __facilityDataModified.facilityOwnerPhone_callingCode;
    delete __facilityDataModified.facilityOwnerPhone_contactNumber ?? '';

    dispatch(
      saveInspection({
        stepOne: {
          formOne: {
            ...__facilityDataModified,
            dateOfInspection: formData.dateOfInspection,
            facilityEstablishmentDate: formData.facilityEstablishmentDate,
            typeOfInspection: formData.typeOfInspection,
          },
        },
      }),
    );
    dispatch(saveRegisteredSpecies(registeredSpeciesModified));
    navigation.goBack();
  }, [
    dispatch,
    facilityDataModified,
    formData.dateOfInspection,
    formData.facilityEstablishmentDate,
    formData.typeOfInspection,
    navigation,
    registeredSpeciesModified,
  ]);

  const handleMessage = useCallback(
    (ev) => {
      const data = JSON.parse(ev.nativeEvent.data);
      if (
        facilityDataModified[data.name] !== undefined &&
        facilityDataModified[data.name] !== data.value
      ) {
        setfacilityDataModified((state) => ({
          ...state,
          [data.name]: data.value,
        }));
      } else if (data.name ?? data.name.split('.')[0] === 'registeredSpecies') {
        setRegisteredSpeciesModified((state) => {
          const _state = [...state];
          const changedSpeciesIndex = parseInt(data.name.split('.')[1], 10);
          const changedPropertyKey = data.name.split('.')[2];
          _state[changedSpeciesIndex] = {
            ...state[changedSpeciesIndex],
            [changedPropertyKey]: data.value,
          };
          return _state;
        });
      }
    },
    [facilityDataModified],
  );

  useEffect(() => {
    if (Object.keys(formData).length) {
      setfacilityDataModified(formatFormDataToDisplay(formData));
    }
  }, [formData]);

  useEffect(() => {
    setRegisteredSpeciesModified(registeredSpecies);
  }, [registeredSpecies]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormOneSummary.title_1'}) + ':'}
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
  titleView: {
    paddingHorizontal: '16@s',
    paddingTop: '16@vs',
    backgroundColor: RawColors.white,
  },
  title: {
    lineHeight: '35@ms',
    textTransform: 'uppercase',
    ...Fonts.HelveticaNeue30B,
    width: '170@s',
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '15@vs',
    width: '200@s',
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
  borderStyle: {
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
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
  marginDimension: {
    marginLeft: '6@ms',
  },
});

export default FormOneSummaryEdit;
