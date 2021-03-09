import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {Text, View, BackHandler} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch} from 'react-redux';

import HelpText from '@utils/HelpTexts';
import {Button, Container, Header} from '@atoms';
import {Fonts, RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import CommonStyles from '@styles/CommonStyles';
import form4Questions from './Questions';
import scoreRelation from './ScoreRelation';

const FormFour = ({navigation: {navigate, goBack}}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const scrollViewRef = useRef();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState([]);
  const isCurrentScreenFocused = useIsFocused();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onbackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onbackPress);
    };
  }, [onbackPress, isCurrentScreenFocused]);

  const onbackPress = useCallback(() => {
    console.log(score);
    if (!isCurrentScreenFocused || questionNumber < 1) {
      return false;
    } else {
      setQuestionNumber(questionNumber - 1);
      setScore((state) => {
        state.pop();
        return state;
      });
      return true;
    }
  }, [isCurrentScreenFocused, questionNumber, score]);
  useEffect(() => {
    console.log(score);
  }, [score]);
  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon
            name="chevron-left"
            size={ms(26)}
            onPress={() => {
              onbackPress() ? () => {} : goBack();
            }}
          />
        }
      />
      <Text style={styles.title}>
        {formatMessage({id: 'screen.FormFour.title'})}
      </Text>
      <Text style={styles.contentOne}>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormFour.contentOne'})}
        </Text>
        <Text style={styles.word}>
          {formatMessage({id: 'screen.FormFour.contentTwo'})}
        </Text>
      </Text>
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <Text style={styles.contentTwo}>
          <Text style={styles.content}>
            {formatMessage({id: 'screen.FormFour.contentThree'})}
          </Text>
        </Text>
        <View style={styles.contentThree}>
          <Text style={styles._content}>
            {formatMessage({id: 'screen.FormFour.contentFour'})}
          </Text>
          <Text style={styles._content}>
            {formatMessage({id: form4Questions[questionNumber].for})}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {formatMessage({id: form4Questions[questionNumber].content})}
          </Text>
        </View>
        <Button
          buttonContent={formatMessage({
            id: 'button.yes',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => {
            setQuestionNumber(questionNumber + 1);
            setScore((state) => {
              state.push(scoreRelation[questionNumber].yes);
              return [...state];
            });
          }}
        />
        <Button
          buttonContent={formatMessage({
            id: 'button.no',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => {
            setQuestionNumber(questionNumber + 1);
            setScore((state) => {
              state.push(scoreRelation[questionNumber].no);
              return [...state];
            });
          }}
        />
        <Button
          buttonContent={formatMessage({
            id: 'button.moreInfo',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => {
            console.log(questionNumber);
            dispatch(
              setHelpText(
                HelpText[form4Questions[questionNumber].moreInfo.helpTextKey],
              ),
            );
          }}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginHorizontal: '16@s',
    marginVertical: '16@vs',
    ...Fonts.HelveticaNeue30B,
  },
  contentOne: {
    marginHorizontal: '16@s',
    marginBottom: '16@vs',
  },
  content: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  word: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15B,
  },
  question: {
    ...Fonts.Lato15R,
    color: RawColors.black,
  },
  questionContainer: {
    marginTop: '20@s',
    padding: '16@ms',
  },
  contentTwo: {
    marginBottom: '16@vs',
    padding: '16@ms',
    backgroundColor: RawColors.whiteTwo,
  },
  contentThree: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  _content: {
    ...Fonts.HelveticaNeue20B,
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '15@vs',
    backgroundColor: RawColors.lightGrey,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
});

export default FormFour;
