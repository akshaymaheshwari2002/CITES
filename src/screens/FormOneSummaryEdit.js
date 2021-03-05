import React, {useEffect, useState} from 'react';
import {WebView as RNWebView} from 'react-native-webview';
import {View, Text, TouchableOpacity} from 'react-native';
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

const FormOneSummary = ({
  navigation,
  route: {
    params: {facilityData},
  },
}) => {
  const {formatMessage} = useIntl();
  const [isShowStep1, setShowStep1] = useState(false);
  const [facilityDataModified, setfacilityDataModified] = useState({});

  useEffect(() => {
    setfacilityDataModified(facilityData);
  }, [facilityData]);

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
              <FormOneHeader facilityData={facilityData} editable={true} />
              <FormOneTemplate
                speciesData={facilityData.registeredSpecies}
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
            if (isShowStep1) {
              navigation.navigate('StepOne');
            }
            setShowStep1((state) => !state);
          }}>
          <View style={styles.row}>
            {isShowStep1 ? (
              <View style={[styles.padding16, styles.marginDimension]}>
                <Text style={styles.text}>
                  {formatMessage({id: 'screen.FormOneSummary.continueTo'})}
                </Text>
                <Text style={styles.text}>
                  {formatMessage({id: 'screen.FormOneSummary.stepOne'})}
                </Text>
              </View>
            ) : null}
            <View style={styles.justifyContent}>
              <Icon name="chevron-right" size={ms(26)} />
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
  slideBtn: {
    height: '65@vs',
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
  marginDimension: {
    marginLeft: '6@ms',
  },
});

export default FormOneSummary;
