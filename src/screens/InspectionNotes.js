import React, {useCallback, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {ScaledSheet, vs, s} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';

import {Container, Button, ImagePickerModal} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {saveNotes} from '@store/slices/sessionSlice';
import {Images} from '@assets/';
import {PopupNotesInput} from '@molecules';

const InspectionNotes = ({navigation: {navigate, goBack, route}}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [isImagePicker, setIsImagePicker] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [notesTitle, setNotesTitle] = useState('');
  const [notesText, setNotesText] = useState('');
  const notes = useSelector(
    (state) => state.sessionReducer.activeInspection.notes,
  );

  const handlePress = useCallback(() => {
    console.log(notes, '12345679');
    const timeStamp = Date.now();
    const title = notesTitle;
    const text = notesText;
    const notesTextLength = notesText.length;
    const notesTitleLength = notesTitle.length;
    if (notesTextLength > 1 && notesTitleLength > 1) {
      dispatch(saveNotes({notes: {title, text, timeStamp}}));
    }
    setNotesText('');
    setNotesTitle('');
    setPopUp(false);
  }, [dispatch, notes, notesText, notesTitle]);

  const renderItem = useCallback(({item}) => {
    const timeStamp = item?.timeStamp;
    return (
      <View style={styles.row_parent}>
        <Button
          buttonStyle={() => styles.buttonFlatList}
          buttonContent={
            <>
              <Text style={styles.date}>
                {timeStamp
                  ? new Date(parseInt(timeStamp, 10)).toLocaleDateString()
                  : 'NA'}
              </Text>
              <Text style={styles.time}>
                {timeStamp
                  ? new Date(parseInt(timeStamp, 10)).toLocaleTimeString()
                  : 'NA'}
              </Text>
              <Text style={styles.flatlistTitle}>{item?.title}</Text>
              <Text style={styles.flatlistText}>{item?.text}</Text>
            </>
          }
        />
      </View>
    );
  }, []);

  return (
    <>
      <Container safeAreaViewProps={{edges: ['right', 'left']}}>
        <View
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
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {formatMessage({id: 'screen.InspectionNotes.contentOne'})}
            </Text>
          </View>
          <View style={styles.backColor}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.circle} onPress={() => {}}>
                <Image source={Images.flashLightButton} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => setIsImagePicker(true)}>
                <Image source={Images.cameraButton} />
              </TouchableOpacity>
            </View>
            <View style={styles.textInputContainer}>
              <Button
                buttonStyle={() => ({
                  borderStyle: 'dashed',
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: RawColors.dimGrey,
                })}
                buttonTextStyle={() => styles.buttonTextStyle}
                buttonContent={formatMessage({
                  id: 'button.addInspectionNotes',
                })}
                onPress={() => {
                  setPopUp(true);
                }}
              />
            </View>
            <FlatList
              data={notes}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
          <ImagePickerModal
            visible={isImagePicker}
            close={() => setIsImagePicker(false)}
            onImageSelection={() => {}}
          />
        </View>
      </Container>
      {notes ? (
        <PopupNotesInput
          isShowPopupNotesInput={popUp}
          onPress={handlePress}
          notesTitle={notesTitle}
          notesText={notesText}
          setNotesTitle={setNotesTitle}
          setNotesText={setNotesText}
          setPopUp={setPopUp}
        />
      ) : (
        <>
          {Alert.alert(
            formatMessage({
              id: 'popup.InspectionNotes.beginInspection',
            }),
          )}
        </>
      )}
    </>
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
  textInputContainer: {
    marginTop: vs(20),
    paddingHorizontal: s(15),
  },
  textInput: {
    backgroundColor: RawColors.greyShade,
    borderStyle: 'dashed',
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
  content: {
    height: '45@vs',
  },
  contentText: {
    ...Fonts.Lato15R,
    color: RawColors.charcoalGrey60,
    marginVertical: '15@vs',
    marginHorizontal: '20@s',
  },
  backColor: {
    backgroundColor: RawColors.white,
    flex: 1,
  },
  row: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  circle: {
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
  footer: {
    width: '100%',
    height: '15@s',
  },
  row_parent: {
    zIndex: -1,
    width: '100%',
    minHeight: '120@s',
    paddingVertical: '15@s',
    paddingHorizontal: s(15),
  },
  buttonFlatList: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: RawColors.eggshell,
    padding: '16@s',
    width: '358@s',
    elevation: '5@s',
    ...CommonStyles.shadowEffectDarker,
  },
  date: {
    ...Fonts.Lato15B,
    color: RawColors.brightRed,
  },
  time: {
    ...Fonts.Lato14R,
    color: RawColors.brightRed,
  },
  flatlistTitle: {
    marginTop: '12@vs',
    ...Fonts.Lato15B,
  },
  flatlistText: {
    marginTop: '8@vs',
    ...Fonts.Lato14R,
  },
  buttonTextStyle: {
    ...Fonts.Lato15R,
    color: RawColors.backToolTipColor,
  },
});

export default InspectionNotes;
