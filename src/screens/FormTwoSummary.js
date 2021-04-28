import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useFocusEffect} from '@react-navigation/native';
import {format} from 'date-fns';
import {shallowEqual, useSelector} from 'react-redux';

import {Container} from '@atoms';
import {FormTwoTemplate, FormOneHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {generatePdf} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';
import {
  formText,
  formTitle,
  facilitySchema,
  formTwoLabels,
} from '@utils/TranslationMapping';

const FormTwoSummary = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const [fileUri, setFileUri] = useState(undefined);
  const formTwoData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo?.formTwo,
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

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const file = await generatePdf({
          templates: [
            <FormOneHeader
              facilityData={facilityData}
              form={'two'}
              formText={formTextLabel}
              formTitle={formTitleLabels}
              facilitySchema={facilitySchemaLabels}
            />,
            <FormTwoTemplate
              formTwoData={formTwoData}
              formTwoLabels={labels}
            />,
          ],
        });
        setFileUri({uri: file?.filePath});
      })();
    }, [
      facilityData,
      facilitySchemaLabels,
      formTextLabel,
      formTitleLabels,
      formTwoData,
      labels,
    ]),
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={styles.ScrollViewStyle}
        style={CommonStyles.flex1}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormTwoSummary.title_1'}) + ':'}
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
            navigation.navigate('FormTwoSummaryEdit');
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
              <Icon name="plus" size={ms(18)} />
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
    width: '190@s',
    ...Fonts.HelveticaNeue25B,
  },
  subHeading: {
    paddingHorizontal: '16@s',
    marginTop: '3@vs',
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

export default FormTwoSummary;
