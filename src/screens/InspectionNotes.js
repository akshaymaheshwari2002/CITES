import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  Linking,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {ScaledSheet, ms, s} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import Torch from 'react-native-torch';

import {Container, Button, ImagePickerModal} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {saveNotes} from '@store/slices/sessionSlice';
import {Images} from '@assets/';
import {PopupNotesInput} from '@molecules';

const InspectionNotes = () => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const [isImagePicker, setIsImagePicker] = useState(false);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [notesText, setNotesText] = useState('');
  const [popUp, setPopUp] = useState(false);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(-1);
  const notes = useSelector(
    (state) => state.sessionReducer.activeInspection.notes,
  );
  const photos = useSelector(
    (state) => state.sessionReducer.activeInspection.photos,
  );

  const handleSave = useCallback(() => {
    if (selectedNoteIndex >= 0) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = {
        text: notesText,
        timeStamp: Date.now(),
      };

      dispatch(saveNotes({notes: updatedNotes}));
      setSelectedNoteIndex(-1);
    } else {
      const timeStamp = Date.now();
      const text = notesText;
      const notesTextLength = notesText.length;
      if (notesTextLength > 1) {
        dispatch(saveNotes({notes: {text, timeStamp}}));
      }
      setNotesText('');
    }
  }, [dispatch, notes, notesText, selectedNoteIndex]);

  const openGallery = useCallback(() => {
    switch (Platform.OS) {
      case 'ios':
        Linking.openURL('photos-redirect://');
        break;
      case 'android':
        Linking.openURL('content://media/internal/images/media');
        break;
      default:
        console.log('Could not open gallery app');
    }
  }, []);

  const handleTorch = useCallback(() => {
    if (isTorchOn) {
      setIsTorchOn(false);
      Torch.switchState(isTorchOn);
    } else {
      setIsTorchOn(true);
      Torch.switchState(isTorchOn);
    }
  }, [isTorchOn]);

  const handleDelete = useCallback(
    (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);

      dispatch(saveNotes({notes: updatedNotes}));
    },
    [dispatch, notes],
  );

  const renderItem = useCallback(
    ({item, index}) => {
      const timeStamp = item?.timeStamp;
      return (
        <View style={styles.row_parent}>
          <View style={styles.dateTime}>
            <Text style={styles.datetimeText}>
              {timeStamp
                ? new Date(parseInt(timeStamp, 10)).toLocaleDateString()
                : 'NA'}
            </Text>
            <Text style={styles.datetimeText}>
              {formatMessage({
                id: 'screen.InspectionNotes.contentAt',
              })}
            </Text>
            <Text style={styles.datetimeText}>
              {timeStamp
                ? new Date(parseInt(timeStamp, 10)).toLocaleTimeString()
                : 'NA'}
            </Text>
          </View>
          <Button
            buttonStyle={() => styles.buttonFlatList}
            buttonContent={
              <>
                <Text style={styles.flatlistText}>{item?.text}</Text>
              </>
            }
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={{marginHorizontal: ms(60)}}
              onPress={() => {
                setSelectedNoteIndex(index);
                setNotesText(item.text);
                setPopUp(true);
              }}>
              <Icon name="edit" size={ms(25)} iconStyle={styles.ImageStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginHorizontal: ms(65)}}
              onPress={() => handleDelete(index)}>
              <Icon name="trash" size={ms(25)} iconStyle={styles.ImageStyle} />
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [formatMessage, handleDelete],
  );

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
              <TouchableOpacity style={styles.circle} onPress={handleTorch}>
                <Image source={Images.flashLightButton} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => {
                  photos
                    ? setIsImagePicker(true)
                    : Alert.alert(
                        formatMessage({
                          id: 'popup.InspectionNotes.beginInspection',
                        }),
                      );
                }}>
                <Image source={Images.cameraButton} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={notes}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
              ListFooterComponent={
                <>
                  <Button
                    buttonStyle={() => styles.buttonStyle}
                    buttonTextStyle={() => styles.buttonTextStyle}
                    buttonContent={formatMessage({
                      id: 'button.addInspectionNotes',
                    })}
                    onPress={() => setPopUp(true)}
                  />
                  <Button
                    buttonStyle={() => styles.buttonPhotos}
                    buttonContent={
                      <>
                        <Text style={styles.photosTitle}>
                          {formatMessage({
                            id: 'screen.InspectionNotes.photosTitle',
                          })}
                        </Text>
                        <View style={styles.imageContainer}>
                          {photos?.map((item, index) => (
                            <TouchableOpacity key={index} onPress={openGallery}>
                              <Image
                                source={{uri: item.uri}}
                                style={styles.imageStyle}
                              />
                            </TouchableOpacity>
                          ))}
                        </View>
                      </>
                    }
                  />
                </>
              }
              ListFooterComponentStyle={styles.textInputContainer}
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
          onPress={handleSave}
          notesText={notesText}
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
    backgroundColor: RawColors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: '10@vs',
  },
  textInputContainer: {
    paddingHorizontal: s(15),
  },
  titleOne: {
    ...Fonts.HelveticaNeue30B,
    letterSpacing: '0.48@s',
    marginHorizontal: '15@s',
    marginTop: '25@s',
  },
  nogap: {marginTop: 0},
  content: {},
  contentText: {
    ...Fonts.Lato15R,
    color: RawColors.charcoalGrey60,
    marginVertical: '25@vs',
    marginHorizontal: '15@s',
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
    marginHorizontal: '14@s',
    marginTop: '16@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '46@vs',
    width: '29@s',
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
  row_parent: {
    minHeight: '20@vs',
    paddingVertical: '15@vs',
    paddingHorizontal: s(16),
  },
  buttonFlatList: {
    flex: 1,
    zIndex: -10,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderRadius: 0,
  },
  dateTime: {
    position: 'absolute',
    backgroundColor: RawColors.white,
    flexDirection: 'row',
    width: '120@s',
    marginLeft: '40@s',
    height: '20@vs',
    marginTop: '6@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datetimeText: {
    ...Fonts.Lato10R,
    color: RawColors.black,
  },
  buttonStyle: {
    borderStyle: 'dashed',
    borderRadius: 1,
    borderWidth: 1,
    marginTop: '10@vs',
    borderColor: RawColors.dimGrey,
  },
  buttonTextStyle: {
    ...Fonts.Lato15R,
    color: RawColors.backToolTipColor,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '8@ms',
    justifyContent: 'center',
  },
  buttonPhotos: {
    marginTop: '20@vs',
    backgroundColor: RawColors.eggshell,
    minHeight: '200@vs',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...CommonStyles.shadowEffectDarker,
  },
  imageStyle: {
    height: '40@vs',
    width: '40@s',
    marginHorizontal: '2@s',
    marginVertical: '2@vs',
  },
  photosTitle: {
    ...Fonts.HelveticaNeue18B,
  },
});

export default InspectionNotes;
