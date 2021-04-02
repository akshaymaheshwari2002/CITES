import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/Feather';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {format} from 'date-fns';
import {shallowEqual, useSelector} from 'react-redux';

import {Container} from '@atoms';
import {
  FormThreeTemplate,
  FormThreeHeader,
  PopupFormEditMenu,
} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {generatePdf} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';

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
  const [isShowFormEditMenu, setIsShowFormEditMenu] = useState(false);
  const isCurrentScreenFocused = useIsFocused();
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
                    />
                    <FormThreeTemplate
                      speciesData={formatFormThreeDataToDisplay(speciesData)}
                      form={'three'}
                    />
                    <div style={{breakAfter: 'page'}} />
                  </>
                ))
              : []),
          ],
        });
        setFileUri({uri: file?.filePath});
      })();
    }, [facilityData, registeredSpecies]),
  );

  const handleBackPress = useCallback(() => {
    if (isShowFormEditMenu) {
      setIsShowFormEditMenu(false);
    } else {
      navigation.goBack();
    }
  }, [isShowFormEditMenu, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (navigationProps) => (
        <Icon
          name="chevron-left"
          size={ms(18)}
          {...navigationProps}
          onPress={handleBackPress}
        />
      ),
    });
  }, [handleBackPress, navigation]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onbackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onbackPress);
    };
  }, [onbackPress, isShowFormEditMenu, isCurrentScreenFocused]);

  const onbackPress = useCallback(() => {
    if (isCurrentScreenFocused && isShowFormEditMenu) {
      setIsShowFormEditMenu(false);
      return true;
    } else {
      return false;
    }
  }, [isCurrentScreenFocused, isShowFormEditMenu]);

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
          <View style={styles.row}>
            <View style={[styles.padding16, styles.marginDimension]}>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.continueTo'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.stepTwo'})}
              </Text>
            </View>
            <View style={styles.justifyContent}>
              <Icon name="chevron-right" size={ms(18)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.slideBtnContainerEdit}>
        <TouchableOpacity
          style={[styles.slideBtn, styles.borderStyle]}
          onPress={() => {
            setIsShowFormEditMenu(true);
          }}>
          <View style={styles.row}>
            <View style={styles.padding16}>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.edit'})}
              </Text>
              <Text style={styles.text}>
                {formatMessage({id: 'screen.FormOneSummary.information'})}
              </Text>
            </View>

            <View style={styles.justifyContent}>
              <Icon name="plus" size={ms(26)} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <PopupFormEditMenu
        formNumber={3}
        isShowFormEditMenu={isShowFormEditMenu}
        setIsShowFormEditMenu={setIsShowFormEditMenu}
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
  pdf: {
    marginTop: '5@vs',
    flex: 1,
    backgroundColor: 'white',
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

export default FormThreeSummary;
