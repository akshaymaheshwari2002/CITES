import React, {useState, useCallback, useEffect} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {ScaledSheet, moderateScale, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {RawColors, Fonts} from '@styles/Themes';
import {Images} from '@assets';

const OverlayModal = ({isModalVisible, hideModal, helpText}) => {
  const [modalWidth, setModalWidth] = useState('55%'); // width to be set dynamically according to the content
  const [modalViewHeight, setModalViewHeight] = useState(0);
  const [contentContainerHeight, setContentContainerHeight] = useState(0);

  useEffect(() => {
    setModalWidth('55%'); // reset modal width when help text changes
  }, [helpText]);

  useEffect(() => {
    if (
      modalViewHeight &&
      contentContainerHeight &&
      modalViewHeight < contentContainerHeight
    ) {
      increaseWidth();
    }
  }, [modalViewHeight, contentContainerHeight, increaseWidth]);

  const increaseWidth = useCallback(() => {
    if (modalWidth === '50%') {
      setModalWidth('75%');
    } else if (modalWidth === '75%') {
      setModalWidth('100%');
    } else {
    }
  }, [modalWidth]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={hideModal}>
      <TouchableWithoutFeedback onPressOut={hideModal}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View
              style={[styles.modalView, {width: modalWidth}]}
              onLayout={(ev) => {
                const height = ev.nativeEvent.layout.height;
                if (Math.round(height) !== modalViewHeight) {
                  setModalViewHeight(Math.round(height));
                }
              }}>
              <Image source={Images.information} style={styles.helpIcon} />
              <Container.ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollView}>
                <View
                  style={styles.contentContainer}
                  onLayout={(ev) => {
                    const height = ev.nativeEvent.layout.height;
                    if (Math.round(height) !== contentContainerHeight) {
                      setContentContainerHeight(Math.round(height));
                    }
                  }}>
                  {helpText
                    ? helpText.map((value, index) => {
                        return (
                          <Text
                            key={`text_key_${index}`}
                            style={
                              value.isBold
                                ? styles.modalTextBold
                                : styles.modalText
                            }>
                            {value.text}
                            {value.subText && value.subText.length > 0
                              ? value.subText.map((value_1, index_1) => {
                                  return (
                                    <Text
                                      key={`sub_text_key_${index_1}`}
                                      style={
                                        value_1.isSubBold
                                          ? {...Fonts.Lato17B}
                                          : null
                                      }>
                                      {value_1.val}
                                    </Text>
                                  );
                                })
                              : null}
                          </Text>
                        );
                      })
                    : null}
                </View>
              </Container.ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  overlay: {
    ...CommonStyles.flex1,
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '97@vs',
    marginBottom: '80@vs',
  },
  modalView: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    backgroundColor: RawColors.white,
    borderWidth: 1,
    borderColor: RawColors.silverFoil,
    borderTopLeftRadius: '20@vs',
    alignItems: 'center',
  },
  helpIcon: {
    marginVertical: '10@vs',
    marginHorizontal: '10@s',
    alignSelf: 'flex-start',
  },
  scrollView: {
    alignSelf: 'flex-start',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: '15@vs',
    paddingHorizontal: '15@ms',
  },
  modalTextBold: {
    marginBottom: '15@vs',
    textAlign: 'left',
    ...Fonts.Lato17B,
  },

  modalText: {
    marginBottom: '15@vs',
    textAlign: 'left',
    ...Fonts.Lato17R,
  },
});

export default OverlayModal;
