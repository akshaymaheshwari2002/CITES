import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {WebView as RNWebView} from 'react-native-webview';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Pressable,
} from 'react-native';
import {renderToString} from 'react-dom/server';
import {useIntl} from 'react-intl';
import {format} from 'date-fns';
import {saveInspection} from '@store/slices/sessionSlice';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect} from '@react-navigation/core';

import {Container} from '@atoms';
import {FormOneHeader, FormTwoTemplate} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {
  formText,
  formTitle,
  facilitySchema,
  formTwoLabels,
} from '@utils/TranslationMapping';
import CommonStyles from '@styles/CommonStyles';

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

const FormTwoSummaryEdit = ({navigation}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [formTwoDataModified, setformTwoDataModified] = useState({});

  const facilityData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne,
    shallowEqual,
  );
  const formTwoData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo?.formTwo,
    shallowEqual,
  );

  const formTextLabel = useMemo(() => {
    let translatedLabels = {};
    Object.keys(formText ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: formText[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);
  const formTitleLabels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(formTitle ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: formTitle[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);
  const facilitySchemaLabels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(facilitySchema ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: facilitySchema[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);
  const labels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(formTwoLabels ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: formTwoLabels[id],
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
            facilityData={formatFormDataToDisplay(facilityData)}
            form={'two'}
            editable={false}
            formText={formTextLabel}
            formTitle={formTitleLabels}
            facilitySchema={facilitySchemaLabels}
          />
          <FormTwoTemplate
            formTwoData={formTwoData}
            editable={true}
            formTwoLabels={labels}
          />
        </>,
      ),
    [
      facilityData,
      facilitySchemaLabels,
      formTextLabel,
      formTitleLabels,
      formTwoData,
      labels,
    ],
  );

  const handleSubmit = useCallback(() => {
    const __formTwoDataModified = {...formTwoDataModified};
    dispatch(
      saveInspection({
        stepTwo: {
          formTwo: {
            ...__formTwoDataModified,
          },
        },
      }),
    );

    navigation.goBack();
  }, [dispatch, formTwoDataModified, navigation]);

  const handleMessage = useCallback(
    (ev) => {
      const data = JSON.parse(ev.nativeEvent.data);
      if (
        data?.name &&
        data.name &&
        data.name.split('.') &&
        data.name.split('.')[0] === 'formTwo'
      ) {
        if (data.name.split('.')[1] === 'staffHours') {
          if (
            formTwoDataModified?.staffHours[data.name.split('.')[2]] !==
            data.value
          ) {
            setformTwoDataModified((state) => ({
              ...state,
              staffHours: {
                ...state.staffHours,
                [data.name.split('.')[2]]: data.value,
              },
            }));
          }
        } else if (data.name.split('.')[1] === 'addressOfOtherAnimals') {
          if (
            formTwoDataModified?.addressOfOtherAnimals[
              data.name.split('.')[2]
            ] !== data.value
          ) {
            setformTwoDataModified((state) => {
              const __addressOfOtherAnimals = [
                ...(formTwoDataModified?.addressOfOtherAnimals ?? []),
              ];
              __addressOfOtherAnimals[data.name.split('.')[2]] = data.value;
              return {
                ...state,
                addressOfOtherAnimals: __addressOfOtherAnimals,
              };
            });
          }
        } else if (
          data.name.split('.')[1] === 'accessToVeterinaryServices' ||
          data.name.split('.')[1] === 'animalKeptAtOtherLocation'
        ) {
          if (
            formTwoDataModified?.[data.name.split('.')[1]]?.[0] !== data?.value
          ) {
            setformTwoDataModified((state) => ({
              ...state,
              [data.name.split('.')[1]]: [data.value],
            }));
          }
        } else {
          if (formTwoDataModified?.[data.name.split('.')[1]] !== data?.value) {
            setformTwoDataModified((state) => ({
              ...state,
              [data.name.split('.')[1]]: data?.value,
            }));
          }
        }
      }
    },
    [formTwoDataModified],
  );

  const handleBackPress = useCallback(() => {
    navigation.replace('FormTwoSummary');
    return true;
  }, [navigation]);

  useEffect(() => {
    setformTwoDataModified(formTwoData);
  }, [formTwoData]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable hitSlop={10} onPress={handleBackPress}>
          <FontAwesomeIcon name="chevron-left" size={ms(22)} />
        </Pressable>
      ),
    });
  }, [handleBackPress, navigation]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [handleBackPress]),
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.titleView}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormTwoSummary.title_1'}) + ':'}
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
          <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceEvenly]}>
            <View>
              <Text style={styles.text}>
                {formatMessage({id: 'general.save'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'general.changes'})}
              </Text>
            </View>
            <View style={CommonStyles.centerContent}>
              <Icon name="chevron-right" size={ms(22)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slideBtnContainerEdit}>
        <TouchableOpacity
          style={[styles.slideBtn, styles.borderStyle]}
          onPress={() => navigation.goBack()}>
          <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceEvenly]}>
            <View>
              <Text style={styles.text}>
                {formatMessage({id: 'general.discard'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'general.changes'})}
              </Text>
            </View>
            <View style={CommonStyles.centerContent}>
              <Icon name="x" size={ms(18)} />
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
    ...Fonts.HelveticaNeue25B,
    width: '190@s',
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '16@vs',
    width: '200@s',
  },
  subHeadingText: {
    color: RawColors.charcoalGrey60,
  },
  slideBtnContainerStep: {
    position: 'absolute',
    top: '16@vs',
    right: 0,
  },
  slideBtnContainerEdit: {
    position: 'absolute',
    top: '85@vs',
    right: 0,
  },
  slideBtn: {
    height: '50@vs',
    width: '140@s',
    backgroundColor: RawColors.beige,
    justifyContent: 'center',
    borderTopLeftRadius: '8@ms',
    borderBottomLeftRadius: '8@ms',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    ...Fonts.Lato15B,
    alignSelf: 'flex-end',
    textTransform: 'uppercase',
  },
  borderStyle: {
    borderStyle: 'dashed',
    borderTopLeftRadius: '8@ms',
    borderBottomLeftRadius: '8@ms',
    borderWidth: 1,
  },
});

export default FormTwoSummaryEdit;
