import React from 'react';
import {
  Modal,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import HTML from 'react-native-render-html';

import {Container} from '@atoms';
import SideMenu from './SideMenu';
import CommonStyles from '@styles/CommonStyles';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';

const OverlayModal = ({
  isModalVisible,
  hideModal,
  helpText,
  isShowSideMenu,
}) => {
  const {width} = useWindowDimensions();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={hideModal}>
      <TouchableWithoutFeedback onPressOut={hideModal}>
        {isShowSideMenu ? (
          <SideMenu hideModal={hideModal} />
        ) : (
          <View style={styles.overlay}>
            <View style={[styles.modalView, {width: width * 0.55}]}>
              <View style={styles.iconsContainer}>
                <Image source={Images.information} style={styles.helpIcon} />
                <TouchableOpacity onPress={hideModal}>
                  <Image source={Images.closeButton} style={styles.crossIcon} />
                </TouchableOpacity>
              </View>
              <Container.ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}>
                <HTML
                  source={{html: helpText || ''}}
                  contentWidth={width * 0.55}
                  baseFontStyle={styles.modalText}
                />
              </Container.ScrollView>
            </View>
          </View>
        )}
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  overlay: {
    ...CommonStyles.flexGrow1,
    marginTop: '97@vs',
    marginBottom: '80@vs',
  },
  modalView: {
    ...CommonStyles.flexGrow1,
    alignSelf: 'flex-end',
    backgroundColor: RawColors.white,
    borderWidth: 1,
    borderColor: RawColors.silverFoil,
    borderTopLeftRadius: '24@ms',
    borderBottomWidth: 1.5,
  },
  helpIcon: {
    height: '36@ms',
    width: '36@ms',
  },
  crossIcon: {
    height: '28@ms',
    width: '28@ms',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '12@vs',
    paddingHorizontal: '16@s',
  },
  scrollView: {
    alignSelf: 'flex-start',
    width: '100%',
    paddingHorizontal: '16@s',
  },
  modalText: {
    marginBottom: '16@vs',
    textAlign: 'left',
    ...Fonts.Lato17R,
  },
});

export default OverlayModal;
