import React from 'react';
import {View, Text} from 'react-native';
import {useIntl} from 'react-intl';
import {ScaledSheet} from 'react-native-size-matters';

import {Fonts} from '@styles/Themes';
import {Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';

const PopupFormEditMenu = ({
  formNumber = 1,
  isShowFormEditMenu = false,
  setIsShowFormEditMenu = () => {},
}) => {
  const {formatMessage} = useIntl();
  return isShowFormEditMenu ? (
    <View style={styles.containerOne}>
      <View style={styles.containerTwo}>
        <Text style={{...Fonts.Lato20R}}>
          {formNumber === 1
            ? formatMessage({
                id: 'formEditMenu.formOne.question',
              })
            : formNumber === 2
            ? formatMessage({
                id: 'formEditMenu.formTwo.question',
              })
            : formNumber === 3
            ? formatMessage({
                id: 'formEditMenu.formThree.question',
              })
            : formNumber === 4
            ? formatMessage({
                id: 'formEditMenu.formFour.question',
              })
            : ''}
        </Text>
        <Button
          onPress={() => {
            setIsShowFormEditMenu(false);
            switch (formNumber) {
              case 1:
                navigate('FormOne');
                break;
              case 2:
                navigate('FormTwo');
                break;
              case 3:
                navigate('FormThree');
                break;
              case 4:
                navigate('FormFour');
                break;
              default:
                break;
            }
          }}
          buttonContent={
            formNumber === 1
              ? formatMessage({
                  id: 'button.formEditMenu.formOne.EditInForm',
                })
              : formNumber === 2
              ? formatMessage({
                  id: 'button.formEditMenu.formTwo.EditInForm',
                })
              : formNumber === 3
              ? formatMessage({
                  id: 'button.formEditMenu.formThree.EditInForm',
                })
              : formNumber === 4
              ? formatMessage({
                  id: 'button.formEditMenu.formFour.EditInForm',
                })
              : ''
          }
          buttonStyle={() => styles.buttonStyle}
          buttonTextStyle={() => styles.buttonTextStyle}
        />
        <Button
          onPress={() => {
            setIsShowFormEditMenu(false);
            switch (formNumber) {
              case 1:
                navigate('FormOneSummaryEdit');
                break;
              case 2:
                navigate('FormTwoSummaryEdit');
                break;
              case 3:
                navigate('FormThreeSummaryEdit');
                break;
              case 4:
                navigate('FormFourSummaryEdit');
                break;
              default:
                break;
            }
          }}
          buttonContent={
            formNumber === 1
              ? formatMessage({
                  id: 'button.formEditMenu.formOne.EditInSummary',
                })
              : formNumber === 2
              ? formatMessage({
                  id: 'button.formEditMenu.formTwo.EditInSummary',
                })
              : formNumber === 3
              ? formatMessage({
                  id: 'button.formEditMenu.formThree.EditInSummary',
                })
              : formNumber === 4
              ? formatMessage({
                  id: 'button.formEditMenu.formFour.EditInSummary',
                })
              : ''
          }
          buttonStyle={() => styles.buttonStyle}
          buttonTextStyle={() => styles.buttonTextStyle}
        />
        <Button
          onPress={() => {
            setIsShowFormEditMenu(false);
          }}
          buttonContent={formatMessage({id: 'general.cancel'})}
          buttonStyle={() => styles.buttonStyle}
          buttonTextStyle={() => styles.buttonTextStyle}
        />
      </View>
    </View>
  ) : null;
};

export default PopupFormEditMenu;

const styles = ScaledSheet.create({
  containerOne: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTwo: {
    width: '78.4%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: '32@vs',
    paddingBottom: '16@vs',
  },
  buttonStyle: {
    marginTop: '32@vs',
  },
  buttonTextStyle: {
    ...Fonts.Lato15R,
    textTransform: 'uppercase',
  },
});
