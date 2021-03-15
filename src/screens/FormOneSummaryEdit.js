import React, {useEffect, useState} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import {WebView as RNWebView} from 'react-native-webview';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {renderToString} from 'react-dom/server';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Header} from '@atoms';
import {FormOneTemplate, FormOneHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';

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

const FormOneSummary = ({navigation}) => {
  const {formatMessage} = useIntl();
  const [isShowSave, setIsShowSave] = useState(false);
  const [isShowDiscard, setIsShowDiscard] = useState(false);
  const [facilityDataModified, setfacilityDataModified] = useState({});

  const formData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne || {},
    shallowEqual,
  );
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection.registeredSpecies || [],
    shallowEqual,
  );

  useEffect(() => {
    setfacilityDataModified(formData);
  }, [formData]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        }
      />
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
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_1'})}
        </Text>
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_2'})}
        </Text>
        <Text style={[Fonts.Lato13R, styles.subHeadingText]}>
          {formatMessage({id: 'screen.FormOneSummary.subHeading_3'})}
        </Text>
      </View>
      <RNWebView
        startInLoadingState={true}
        source={{
          html: getHtmlStringFromJsx(
            <>
              <FormOneHeader
                facilityData={facilityDataModified}
                editable={true}
              />
              <FormOneTemplate
                speciesData={registeredSpecies}
                editable={true}
              />
            </>,
          ),
        }}
        onMessage={(ev) => {
          const data = JSON.parse(ev.nativeEvent.data);
          if (
            facilityDataModified[data.name] !== undefined &&
            facilityDataModified[data.name] !== data.value
          ) {
            setfacilityDataModified((state) => ({
              ...state,
              [data.name]: data.value,
            }));
          } else if (
            data.name ??
            data.name.split('.')[0] === 'registeredSpecies'
          ) {
            setfacilityDataModified((state) => {
              const changedSpeciesIndex = parseInt(data.name.split('.')[1], 10);
              const changedPropertyKey = data.name.split('.')[2];
              state.registeredSpecies[changedSpeciesIndex][changedPropertyKey] =
                data.value;
              return {...state};
            });
          }
        }}
      />
      <View style={styles.slideBtnContainerStep}>
        <TouchableOpacity
          style={styles.slideBtn}
          onPress={() => {
            if (isShowSave) {
              // navigation.navigate('');
              Alert.alert('Work in progress');
            } else {
              setIsShowSave((state) => !state);
            }
          }}>
          <View style={styles.row}>
            {isShowSave ? (
              <View style={[styles.padding16, styles.marginDimension]}>
                <Text style={styles.text}>
                  {formatMessage({id: 'general.save'})}
                </Text>
                <Text style={styles.text}>
                  {formatMessage({id: 'general.changes'})}
                </Text>
              </View>
            ) : null}
            <View style={styles.justifyContent}>
              <Icon name="chevron-right" size={ms(26)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slideBtnContainerEdit}>
        <TouchableOpacity
          style={[styles.slideBtn, styles.borderStyle]}
          onPress={() => {
            if (isShowDiscard) {
              setIsShowSave(false);
              navigation.goBack();
            } else {
              setIsShowDiscard((state) => !state);
            }
          }}>
          <View style={styles.row}>
            {isShowDiscard ? (
              <View style={styles.padding16}>
                <Text style={styles.text}>
                  {formatMessage({id: 'general.discard'})}
                </Text>
                <Text style={styles.text}>
                  {formatMessage({id: 'general.changes'})}
                </Text>
              </View>
            ) : null}
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
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '15@vs',
  },
  subHeadingText: {
    color: RawColors.charcoalGrey60,
  },
  slideBtnContainerStep: {
    position: 'absolute',
    top: '105@vs',
    right: 0,
    paddingLeft: '5@s',
  },
  slideBtnContainerEdit: {
    position: 'absolute',
    top: '185@vs',
    right: 0,
    paddingLeft: '5@s',
  },
  slideBtn: {
    height: '65@vs',
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

export default FormOneSummary;
