import React, {useCallback, useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Text, View, BackHandler} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';

import HelpText from '@utils/HelpTexts';
import {Button, Container} from '@atoms';
import {saveInspection} from '@store/slices/sessionSlice';
import {Fonts, RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import CommonStyles from '@styles/CommonStyles';
import form4Questions from './Questions';

const FormFour = ({navigation: {navigate, goBack}}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState({});
  const isCurrentScreenFocused = useIsFocused();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [onBackPress, isCurrentScreenFocused]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [onBackPress, isCurrentScreenFocused]);

  const onBackPress = useCallback(() => {
    if (isCurrentScreenFocused && questionNumber > 0) {
      setScore((state) => ({
        ...state,
        [form4Questions[questionNumber].name]: null,
      }));
      setQuestionNumber((state) => state - 1);
      return true;
    } else {
      return false;
    }
  }, [isCurrentScreenFocused, questionNumber]);

  const updateScore = useCallback(
    (isYes) => {
      const response = isYes ? 'yes' : 'no';

      setScore((state) => ({
        ...state,
        [form4Questions[questionNumber].name]:
          form4Questions[questionNumber][response],
      }));

      if (questionNumber < form4Questions.length - 1) {
        setQuestionNumber((state) => state + 1);
      }
    },
    [questionNumber],
  );

  useEffect(() => {
    if (score.haveIdentificationMark) {
      const boolScore = {...score};
      const totalScore = Object.keys(score).reduce((a, b) => a + score[b], 0);

      Object.keys(boolScore).forEach((name) => {
        const question = form4Questions.find((ques) => ques.name === name);
        boolScore[name] = boolScore[name] === question.yes;
      });

      dispatch(
        saveInspection({
          stepThree: {
            formFour: {
              ...boolScore,
              totalScore,
            },
          },
        }),
      );
      navigate('TabNavigator', {
        screen: 'FacilityScore',
      });
    }
  }, [dispatch, navigate, score]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
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
      <Container.ScrollView style={CommonStyles.flex1}>
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
          onPress={() => updateScore(true)}
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
          onPress={() => updateScore(false)}
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
