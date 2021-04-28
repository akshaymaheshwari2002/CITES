import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect} from '@react-navigation/native';
import {format} from 'date-fns';
import {shallowEqual, useSelector} from 'react-redux';

import {Container} from '@atoms';
import {FormThreeTemplate, FormThreeHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {generatePdf} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';
import {
  formText,
  formTitle,
  facilitySchemaThree,
  formThreeSchema,
} from '@utils/TranslationMapping';

const formatFormThreeDataToDisplay = (data) => ({
  ...data,
  dateFirstSpeciesAcquired: data?.dateFirstSpeciesAcquired
    ? format(Number(data?.dateFirstSpeciesAcquired), 'yyyy/MM/dd')
    : '',
  whenDidYouBreedThisSpecies: data?.whenDidYouBreedThisSpecies
    ? format(Number(data?.whenDidYouBreedThisSpecies), 'yyyy/MM/dd')
    : '',
});

const FormThreeSummary = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const [fileUri, setFileUri] = useState(undefined);
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection.registeredSpecies,
    shallowEqual,
  );
  const formData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne,
    shallowEqual,
  );
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
    Object.keys(facilitySchemaThree ?? {}).forEach((id, index) => {
      translatedfacilitySchema = {
        ...translatedfacilitySchema,
        [id]: formatMessage({
          id: facilitySchemaThree[id],
        }),
      };
    });
    return translatedfacilitySchema;
  }, [formatMessage]);

  const labels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(formThreeSchema ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: formThreeSchema[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const file = await generatePdf({
          templates: [
            ...(Array.isArray(registeredSpecies)
              ? registeredSpecies.map((speciesData, index) => (
                  <>
                    <FormThreeHeader
                      facilityData={{
                        ...facilityData,
                        speciesName: speciesData?.name,
                      }}
                      form={'three'}
                      formText={formTextLabel}
                      formTitle={formTitleLabels}
                      facilitySchema={facilitySchemaLabels}
                    />
                    <FormThreeTemplate
                      speciesData={formatFormThreeDataToDisplay(speciesData)}
                      form={'three'}
                      formThreeSchema={labels}
                    />
                    <div style={{breakAfter: 'page'}} />
                  </>
                ))
              : []),
          ],
        });
        setFileUri({uri: file?.filePath});
      })();
    }, [
      facilityData,
      facilitySchemaLabels,
      formTextLabel,
      formTitleLabels,
      labels,
      registeredSpecies,
    ]),
  );

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
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.subHeadingText}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_1'})}
          </Text>
          <Text style={styles.subHeadingText}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_2'})}
          </Text>
          <Text style={styles.subHeadingText}>
            {formatMessage({id: 'screen.FormOneSummary.subHeading_3'})}
          </Text>
        </View>
        {fileUri ? (
          <Pdf source={fileUri} scale={1.5} style={styles.pdf} />
        ) : null}
      </Container.ScrollView>
      <View style={styles.slideBtnContainerStep}>
        <TouchableOpacity
          style={styles.slideBtn}
          onPress={() => {
            navigation.navigate('StepTwo');
          }}>
          <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceEvenly]}>
            <View>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.continueTo'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.stepTwo'})}
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
          onPress={() => {
            navigation.navigate('FormThreeSummaryEdit');
          }}>
          <View style={[CommonStyles.flexRow, CommonStyles.justifySpaceEvenly]}>
            <View>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.edit'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.information'})}
              </Text>
            </View>
            <View style={CommonStyles.centerContent}>
              <FeatherIcon name="plus" size={ms(18)} />
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
    paddingTop: '16@vs',
    backgroundColor: RawColors.white,
  },
  ScrollViewStyle: {flexGrow: 1, backgroundColor: RawColors.white},
  title: {
    lineHeight: '35@ms',
    textTransform: 'uppercase',
    ...Fonts.HelveticaNeue25B,
    width: '190@s',
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '10@vs',
    width: '200@s',
  },
  subHeadingText: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  pdf: {
    marginTop: '5@vs',
    flex: 1,
    backgroundColor: 'white',
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

export default FormThreeSummary;
