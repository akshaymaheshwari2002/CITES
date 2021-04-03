import React, {useCallback} from 'react';
import {
  Text,
  TouchableOpacity,
  Modal,
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useIntl} from 'react-intl';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';
import {Images} from '@assets';
import {saveNotes} from '@store/slices/sessionSlice';
import {RawColors, Fonts} from '@styles/Themes';
//import ScreenWrapper from './ScreenWrapper';
const options = {
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const ImagePickerModal = ({
  visible = false,
  close = () => {},
  onImageSelection = () => {},
}) => {
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const isTablet = useSelector((state) => state.persistedReducer.isTablet);

  const isImageSizeValid = useCallback((size) => {
    var totalSizeMB = size / Math.pow(1024, 2);
    if (totalSizeMB <= 5) {
      return true;
    } else {
      Toast.show('File size sould be smaller than 5mb', Toast.LONG);
      return false;
    }
  }, []);

  const requestCameraPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  }, []);

  const launchGallery = useCallback(() => {
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        if (isImageSizeValid(response.fileSize)) {
          onImageSelection(response);
          close();
        } else {
          close();
        }
      }
    });
  }, [close, isImageSizeValid, onImageSelection]);

  const launchCameraApp = useCallback(async () => {
    const permissionGranted = await requestCameraPermission();
    if (permissionGranted) {
      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          if (isImageSizeValid(response.fileSize)) {
            onImageSelection(response);
            const result = dispatch(saveNotes({photos: response}));
            console.log(result, '123456');
            close();
          } else {
            close();
          }
        }
      });
    }
  }, [
    close,
    dispatch,
    isImageSizeValid,
    onImageSelection,
    requestCameraPermission,
  ]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={close}>
      {/* <ScreenWrapper
        isModal={true}
        containerStyle={{
          backgroundColor: RawColors.black60,
        }}> */}
      <TouchableOpacity style={[styles.modal]} onPress={close}>
        <View style={styles.modal}>
          <View style={[styles.container]}>
            <TouchableOpacity onPress={close} style={styles.dismiss}>
              <Image
                resizeMode="contain"
                source={Images.closeButton}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={launchGallery}>
              <View
                style={[
                  styles.imageBackground,
                  {backgroundColor: RawColors.lightGold12},
                ]}>
                <Image
                  source={Images.image}
                  resizeMode="contain"
                  style={isTablet ? styles.image : styles.icon}
                />
              </View>
              <Text style={[styles.btnText, Fonts.fontRoboto16R]}>
                {formatMessage({id: 'uploadButton.screen.chooseFromGallery'})}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={launchCameraApp}>
              <View style={styles.imageBackground}>
                <Image
                  source={Images.camera}
                  resizeMode="contain"
                  style={isTablet ? styles.image : styles.icon}
                />
              </View>
              <Text style={[styles.btnText, Fonts.fontRoboto16R]}>
                {formatMessage({id: 'uploadButton.screen.takePhoto'})}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      {/* </ScreenWrapper> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: RawColors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
    alignItems: 'center',
  },
  btnText: {
    paddingLeft: 20,
    paddingVertical: 9,
    fontSize: 14,
    fontFamily: '',
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  imageBackground: {
    backgroundColor: RawColors.aquaBlue20,
    padding: 10,
    borderRadius: 25,
  },
  dismiss: {marginVertical: 10, alignItems: 'flex-end'},
});

export default ImagePickerModal;
