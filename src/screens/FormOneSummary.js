import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';
import Pdf from 'react-native-pdf';

import {Container, Button} from '@atoms';
import {FormOneTemplate, FormOneHeader} from '@molecules';
import {Fonts, RawColors} from '@styles/Themes';
import {Images} from '@assets/';
import {generatePdf} from '@utils/CommonFunctions';
import moment from 'moment';

const FormOneSummary = ({navigation, route}) => {
  const {formatMessage} = useIntl();
  const [fileUri, setFileUri] = useState(undefined);
  const formData = route.params?.data;
  const speciesData = formData?.registeredSpeciesData;
  useEffect(() => {
    handelpress();
  }, [handelpress]);

  const handelpress = useCallback(async () => {
    const file = await generatePdf({
      templates: [
        <FormOneHeader
          facilityData={{
            ...formData,
            dateOfInspection: moment(Number(formData?.dateOfInspection)).format(
              'DD/MM/YYYY',
            ),
            facilityEshtablishmentDate: moment(
              Number(formData?.facilityEshtablishmentDate),
            ).format('DD/MM/YYYY'),
            typeOfInspection: formData.typeOfInspection[0]?.replace('_', ' '),
          }}
        />,
        <FormOneTemplate speciesData={speciesData} />,
      ],
    });
    setFileUri({uri: file?.filePath});
  }, [formData, speciesData]);

  return (
    <Container>
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
      {fileUri ? <Pdf source={fileUri} style={styles.pdf} /> : null}
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
    flex: 1,
    backgroundColor: 'white',
  },
});

export default FormOneSummary;
