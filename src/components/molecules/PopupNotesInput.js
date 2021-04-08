import React from 'react';
import {View} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet, s, vs} from 'react-native-size-matters';

import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {Button, TextInput} from '@atoms';

const PopupNotesInput = ({
  isShowPopupNotesInput = false,
  onPress = () => {},
  notesTitle = '',
  notesText = '',
  setNotesTitle = () => {},
  setNotesText = () => {},
  setPopUp = () => {},
}) => {
  const {formatMessage} = useIntl();

  return isShowPopupNotesInput ? (
    <View style={styles.containerOne}>
      <View style={styles.containerTwo}>
        <View style={{height: vs(300)}}>
          <TextInput
            value={notesTitle}
            onChange={setNotesTitle}
            placeholder={formatMessage({
              id: 'screen.InspectionNotes.notesTitle',
            })}
            style={{width: s(190), marginHorizontal: s(15)}}
          />
          <TextInput
            value={notesText}
            onChange={setNotesText}
            placeholder={formatMessage({
              id: 'screen.InspectionNotes.notesText',
            })}
            style={{width: s(190), marginHorizontal: s(15)}}
          />
          <Button
            buttonStyle={() => styles.buttonStyle}
            buttonTextStyle={() => styles.buttonTextStyle}
            buttonContent={formatMessage({
              id: 'general.save',
            })}
            onPress={onPress}
          />
          <Button
            buttonStyle={() => styles.buttonStyle}
            buttonTextStyle={() => styles.buttonTextStyle}
            buttonContent={formatMessage({
              id: 'general.cancel',
            })}
            onPress={() => {
              setPopUp(false);
            }}
          />
        </View>
      </View>
    </View>
  ) : null;
};

export default PopupNotesInput;

const styles = ScaledSheet.create({
  containerOne: {
    position: 'absolute',
    zIndex: 200,
    backgroundColor: RawColors.transparent,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    width: '78.4%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: '32@vs',
    paddingHorizontal: '16@vs',
    borderRadius: '8@vs',
    backgroundColor: RawColors.white,
    ...CommonStyles.shadowEffectDarker,
  },
  question: {
    ...Fonts.Lato20R,
    textTransform: 'capitalize',
  },
  buttonStyle: {
    marginTop: '32@vs',
  },
  buttonTextStyle: {
    ...Fonts.Lato15R,
    textTransform: 'uppercase',
  },
});
