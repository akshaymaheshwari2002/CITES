import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container, Button, ImagePickerModal} from '@atoms';
import {ScaledSheet, ms, vs, s} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';

import {Fonts, RawColors} from '@styles/Themes';
import {TextInput} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {saveNotes} from '@store/slices/sessionSlice';

const InspectionNotes = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [isImagePicker, setIsImagePicker] = useState(false);
  const [notesText, setNotesText] = useState('');

  const handlePress = useCallback(() => {
    dispatch(saveNotes({notes: notesText}));
  }, [dispatch, notesText]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={styles.container}
        style={CommonStyles.flex1}>
        <View style={styles.title}>
          <Text style={styles.titleOne}>
            {formatMessage({id: 'screen.InspectionNotes.headerPartOne'})}
          </Text>
          <Text style={[styles.titleOne, styles.nogap]}>
            {formatMessage({id: 'screen.InspectionNotes.headerPartTwo'})}
          </Text>
        </View>
        <View style={styles.backColor}>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Icon name="camera" size={ms(26)} />
            </View>
            <TouchableOpacity
              style={styles.circle}
              onPress={() => setIsImagePicker(true)}>
              <Icon name="camera" size={ms(26)} />
            </TouchableOpacity>
          </View>
          <TextInput
            value={notesText}
            onChange={setNotesText}
            placeholder={formatMessage({
              id: 'button.addInspectionNotes',
            })}
            style={styles.textInput}
          />
          <Button
            buttonContent={formatMessage({
              id: 'button.saveAndGoBack',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={handlePress}
          />
        </View>
        <ImagePickerModal
          visible={isImagePicker}
          close={() => setIsImagePicker(false)}
          onImageSelection={() => {}}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: RawColors.whiteTwo,
  },
  title: {
    height: '100@s',
    backgroundColor: 'white',
  },
  textInput: {
    backgroundColor: RawColors.greyShade,
    borderStyle: 'dashed',
    marginTop: vs(29),
    marginHorizontal: s(20),
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: RawColors.dimGrey,
    textAlign: 'center',
    color: RawColors.darkGreyBlue,
  },
  titleOne: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '26@s',
    letterSpacing: '0.48@s',
    marginLeft: '15@s',
    marginTop: '25@s',
  },
  nogap: {marginTop: 0},
  backColor: {
    backgroundColor: 'white',
    marginTop: '30@s',
    flex: 1,
  },
  row: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  circle: {
    borderRadius: '52@vs',
    height: '50@s',
    width: '50@s',
    backgroundColor: RawColors.silverFoil,
    marginHorizontal: '15@s',
    marginTop: '16@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginTop: 'auto',
    backgroundColor: RawColors.eggshell,
  },
  buttonOne: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '22@vs',
    backgroundColor: RawColors.greyShade,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default InspectionNotes;
