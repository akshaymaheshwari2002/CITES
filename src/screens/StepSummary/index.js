import React, {useEffect, useRef, useMemo, useCallback, useState} from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIsFocused} from '@react-navigation/native';
import {useIntl} from 'react-intl';
import {generatePdf} from '@utils/CommonFunctions';
import Pdf from 'react-native-pdf';
import {useFocusEffect} from '@react-navigation/native';
import Share from 'react-native-share';
import RNPrint from 'react-native-print';
import {format} from 'date-fns';
import {shallowEqual, useSelector} from 'react-redux';

import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Images} from '@assets/';
import {
  FormOneTemplate,
  FormOneHeader,
  FormTwoTemplate,
  FormThreeTemplate,
  FormThreeHeader,
  FormFourTemplate,
  InspectionNotesTemplate,
} from '@molecules';

const StepSummary = ({navigation: {navigate}}) => {
  const AnimatedImage = Animated.createAnimatedComponent(ImageBackground);
  const {formatMessage} = useIntl();
  const isFocused = useIsFocused();
  const animationValue = useRef(new Animated.Value(0)).current;
  const starScaleX = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 1.5, 1],
  });
  const starScaleY = animationValue.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0.5, 2, 1],
  });
  const circleOpacity = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 0],
  });
  const circleScaleX = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 2],
  });
  const circleScaleY = animationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: [1, 2],
  });

  useEffect(() => {
    if (isFocused) {
      const ani = Animated.timing(animationValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      });
      ani.start();
    } else {
      animationValue.setValue(0);
    }
  }, [animationValue, isFocused]);
  const starsStyle = {
    position: 'absolute',
    //justifyContent: 'center',
    height: ms(170),
    width: ms(150),
    //backgroundColor: 'red',
    transform: [{scaleX: starScaleX}, {scaleY: starScaleY}],
  };

  const circleStyle = {
    position: 'absolute',
    justifyContent: 'center',
    height: ms(150),
    width: ms(150),
    opacity: circleOpacity,
    transform: [{scaleX: circleScaleX}, {scaleY: circleScaleY}],
  };

  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection.registeredSpecies,
    shallowEqual,
  );
  const formData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne,
    shallowEqual,
  );

  const formTwoData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo?.formTwo,
    shallowEqual,
  );
  const formFourData = useSelector(
    (state) => state.sessionReducer.activeInspection.stepThree?.formFour,
    shallowEqual,
  );
  const notes = useSelector(
    (state) => state.sessionReducer.activeInspection.notes,
    shallowEqual,
  );

  const formatFormThreeDataToDisplay = (data) => ({
    ...data,
    dateFirstSpeciesAcquired: data?.dateFirstSpeciesAcquired
      ? format(Number(data?.dateFirstSpeciesAcquired), 'yyyy/MM/dd')
      : '',
    whenDidYouBreedThisSpecies: data?.whenDidYouBreedThisSpecies
      ? format(Number(data?.whenDidYouBreedThisSpecies), 'yyyy/MM/dd')
      : '',
  });
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
  const handleFormsPreview = useCallback(() => {
    (async () => {
      const file = await generatePdf({
        templates: [
          <FormOneHeader facilityData={facilityData} />,
          <FormOneTemplate speciesData={registeredSpecies} />,
          <div style={{breakAfter: 'page'}} />,
          <FormOneHeader facilityData={facilityData} form={'two'} />,
          <FormTwoTemplate formTwoData={formTwoData} />,
          <div style={{breakAfter: 'page'}} />,
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
          <FormOneHeader facilityData={facilityData} form={'four'} />,
          <FormFourTemplate
            facilityData={facilityData}
            response={formFourData}
          />,
          <div style={{breakAfter: 'page'}} />,
          <FormOneHeader facilityData={facilityData} form={'notes'} />,
          <InspectionNotesTemplate notesData={notes} />,
        ],
      });
      RNPrint.print({filePath: file?.filePath});
    })();
  }, [facilityData, formFourData, formTwoData, notes, registeredSpecies]);

  const options = {
    message: 'Share form pdf ',
    title: 'Share',
    url:
      'file:/data/user/0/com.rnboilerplate/cache/PDF_ca1720f2-2165-4a63-8abe-17caa6e82a963617777987712499348.pdf',
  };

  return (
    <Container>
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.topContainer}>
          <View style={styles.title}>
            <Text style={styles.titleOne}>
              {formatMessage({id: 'screen.StepSummary.headerPartOne'})}
            </Text>
            <Text style={styles.titleTwo}>
              {formatMessage({id: 'screen.StepSummary.headerPartTwo'})}
            </Text>
          </View>
          <View style={styles.img}>
            <AnimatedImage
              source={Images.stars}
              resizeMode="contain"
              style={starsStyle}
            />
            <AnimatedImage
              source={Images.star}
              resizeMode="contain"
              style={circleStyle}
            />
            <Image source={Images.stepSummaryOne} style={styles.image} />
          </View>
        </View>

        <View style={styles.backColor}>
          <View style={styles.margin}>
            <Text style={styles.contentOne}>
              {formatMessage({id: 'screen.StepSummary.contentOne'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentTwo'})}
            </Text>
            <Text style={styles.content}>
              {formatMessage({id: 'screen.StepSummary.contentThree'})}
            </Text>

            <Button
              buttonContent={formatMessage({
                id: 'button.printForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return [styles.button, {marginTop: ms(25)}];
              }}
              onPress={handleFormsPreview}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.shareForms',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => Share.open(options)}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.beginNewInspection',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('InspectionFlow')}
            />
            <Button
              buttonContent={formatMessage({
                id: 'button.exit',
              })}
              buttonTextStyle={() => {
                return styles.buttonText;
              }}
              buttonStyle={() => {
                return styles.button;
              }}
              onPress={() => navigate('LanguageSelection')}
            />
          </View>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.snow,
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: '20@vs',
    zIndex: 10,
    backgroundColor: RawColors.white,
  },
  margin: {
    marginHorizontal: '30@s',
    alignItems: 'center',
  },
  title: {
    backgroundColor: RawColors.white,
    height: '100@vs',
  },
  titleOne: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    marginLeft: '15@s',
    marginTop: '20@s',
  },
  titleTwo: {
    ...Fonts.Lato15R,
    color: RawColors.charcoalGrey60,
    lineHeight: '18@s',
    marginTop: '10@s',
    marginLeft: '15@s',
    letterSpacing: '0.09@s',
  },
  image: {
    height: '80@ms',
    width: '80@ms',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '20@s',
    zIndex: 10,
  },
  img: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backColor: {
    backgroundColor: RawColors.white,
    marginTop: '30@vs',
  },
  contentOne: {
    width: '100%',
    ...Fonts.Lato20SB,
    marginTop: '20@vs',
    color: RawColors.black,
  },
  content: {
    width: '100%',
    ...Fonts.Lato17R,
    lineHeight: 22,
    letterSpacing: 0.41,
    marginTop: '18@s',
    color: RawColors.black,
  },
  button: {
    height: '46@vs',
    width: '100%',
    alignSelf: 'center',
    marginVertical: '10@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.marine,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepSummary;
