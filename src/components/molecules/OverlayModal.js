import React, {useState, useCallback, useEffect} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {RawColors, Fonts} from '@styles/Themes';

const OverlayModal = ({isModalVisible, hideModal, helpText}) => {
  const [modalWidth, setModalWidth] = useState('50%'); // width to be set dynamically according to the content
  const [modalViewHeight, setModalViewHeight] = useState(0);
  const [contentContainerHeight, setContentContainerHeight] = useState(0);

  useEffect(() => {
    setModalWidth('50%'); // reset modal width when help text changes
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
      onRequestClose={() => {
        hideModal();
      }}>
      <Pressable onPress={() => hideModal()} style={styles.overlay}>
        <Pressable
          onPress={() => {
            hideModal();
          }}
          style={[styles.modalView, {width: modalWidth}]}
          onLayout={(ev) => {
            const height = ev.nativeEvent.layout.height;
            if (Math.round(height) !== modalViewHeight) {
              setModalViewHeight(Math.round(height));
            }
          }}>
          <Icon
            name="information-outline"
            color={RawColors.darkSalmon}
            style={styles.helpIcon}
            size={moderateScale(40)}
          />
          <Container.ScrollView style={styles.scrollView}>
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
                          value.isBold ? styles.modalTextBold : styles.modalText
                        }>
                        {value.text}
                      </Text>
                    );
                  })
                : null}
            </View>
          </Container.ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  overlay: {
    ...CommonStyles.flex1,
    justifyContent: 'flex-end',
    paddingBottom: '54@vs',
  },
  modalView: {
    alignSelf: 'flex-end',
    height: '80%',
    backgroundColor: RawColors.white,
    borderWidth: 1,
    borderColor: RawColors.silverFoil,
    borderTopLeftRadius: '20@vs',
    alignItems: 'center',
    ...CommonStyles.shadowEffect,
  },
  helpIcon: {
    padding: '12@vs',
    alignSelf: 'flex-start',
  },
  scrollView: {alignSelf: 'flex-start', width: '100%'},
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
