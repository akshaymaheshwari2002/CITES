import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';
import Icon from 'react-native-vector-icons/Feather';
import {useIsFocused} from '@react-navigation/native';
import {format} from 'date-fns';

import {Container, Header} from '@atoms';
import {FormOneTemplate, FormOneHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {generatePdf} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';

const FormOneSummary = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const isFocused = useIsFocused();
  const [isShowStep1, setShowStep1] = useState(false);
  const [isShowEdit, setShowEdit] = useState(false);
  const [fileUri, setFileUri] = useState(undefined);
  const formData = route.params?.data;
  const speciesData = formData?.registeredSpeciesData;

  useEffect(() => {
    if (isFocused) {
      handelpress();
    }
  }, [handelpress, isFocused]);

  const handelpress = useCallback(async () => {
    const file = await generatePdf({
      templates: [
        <FormOneHeader
          facilityData={{
            ...formData,
            dateOfInspection: format(
              Number(formData?.dateOfInspection),
              'MM/dd/yyyy',
            ),
            facilityOwner: formData?.facilityOwner?.join(' '),
            facilityEshtablishmentDate: format(
              Number(formData?.facilityEshtablishmentDate),
              'MM/dd/yyyy',
            ),
            typeOfInspection: formData.typeOfInspection[0]?.replace('_', ' '),
          }}
        />,
        <FormOneTemplate speciesData={speciesData} />,
      ],
    });
    setFileUri({uri: file?.filePath});
  }, [formData, speciesData]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        }
      />
      <Container.ScrollView
        contentContainerStyle={styles.ScrollViewStyle}
        style={CommonStyles.flex1}>
        <View style={styles.titleView}>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormOneSummary.title_1'}) + ':'}
          </Text>
          <Text style={styles.title}>
            {formatMessage({id: 'screen.FormOneSummary.title_2'})}
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
        {fileUri ? (
          <Pdf source={fileUri} scale={1.5} style={styles.pdf} />
        ) : null}
      </Container.ScrollView>
      <View style={styles.slideBtnContainerStep}>
        <TouchableOpacity
          style={styles.slideBtn}
          onPress={() => {
            if (isShowStep1) {
              navigation.navigate('StepOne');
              setShowEdit(false);
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
      <View style={styles.slideBtnContainerEdit}>
        <TouchableOpacity
          style={[styles.slideBtn, styles.borderStyle]}
          onPress={() => {
            if (isShowEdit) {
              navigation.navigate('FormOne');
              setShowStep1(false);
            }
            setShowEdit((state) => !state);
          }}>
          <View style={styles.row}>
            {isShowEdit ? (
              <View style={styles.padding16}>
                <Text style={styles.text}>
                  {formatMessage({id: 'screen.FormOneSummary.edit'})}
                </Text>
                <Text style={styles.text}>
                  {formatMessage({id: 'screen.FormOneSummary.information'})}
                </Text>
              </View>
            ) : null}
            <View style={styles.justifyContent}>
              <Icon name="plus" size={ms(26)} />
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
  pdf: {
    marginTop: '5@vs',
    flex: 1,
    backgroundColor: 'white',
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
    borderWidth: 0.5,
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

export default FormOneSummary;
