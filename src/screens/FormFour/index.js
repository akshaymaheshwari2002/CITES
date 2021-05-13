import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {Text, View, BackHandler, Pressable} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {getHelpTexts} from '@utils/CommonFunctions';
import {store} from '@store';
import {Button, Container} from '@atoms';
import {saveInspection} from '@store/slices/sessionSlice';
import {Fonts, RawColors} from '@styles/Themes';
import {setHelpText} from '@store/slices/sessionSlice';
import CommonStyles from '@styles/CommonStyles';
import form4Questions from './Questions';

const FormFour = ({navigation: {navigate, goBack, setOptions}}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState({});

  const onBackPress = useCallback(() => {
    if (questionNumber > 0) {
      setScore((state) => ({
        ...state,
        [form4Questions[questionNumber].name]: null,
      }));
      setQuestionNumber((state) => state - 1);
      return true;
    } else {
      return false;
    }
  }, [questionNumber]);

  const updateScore = useCallback(
    (isYes) => {
      const response = isYes ? 'yes' : 'no';
      const _score = {
        ...score,
        [form4Questions[questionNumber].name]:
          form4Questions[questionNumber][response],
      };
      setScore(_score);
      if (questionNumber < form4Questions.length - 1) {
        setQuestionNumber((state) => state + 1);
      }
      if (form4Questions[questionNumber].name === 'haveIdentificationMark') {
        const boolScore = {..._score};

        const totalScore = Object.keys(_score).reduce(
          (a, b) => a + _score[b],
          0,
        );
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
              formFourCompleted: true,
            },
          }),
        );
        navigate('TabNavigator', {
          screen: 'FacilityScore',
          params: {scoreTotal: totalScore},
        });
      }
    },

    [dispatch, navigate, questionNumber, score],
  );
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <Pressable
          hitSlop={10}
          onPress={() => {
            if (questionNumber === 0) {
              goBack();
            } else {
              setScore((state) => ({
                ...state,
                [form4Questions[questionNumber].name]: null,
              }));
              setQuestionNumber((state) => state - 1);
            }
          }}>
          <Icon name="chevron-left" size={ms(22)} />
        </Pressable>
      ),
    });
  }, [goBack, questionNumber, setOptions]);

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [onBackPress]),
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
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
          <Text style={styles.contentM}>
            {formatMessage({id: 'screen.FormFour.contentThree'})}
          </Text>
        </Text>
        <View style={styles.contentThree}>
          <Text style={styles._content}>
            {formatMessage({id: 'screen.FormFour.contentFour'})}
          </Text>
          <Text style={styles._content1}>
            {formatMessage({id: form4Questions[questionNumber].for})}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>
            {formatMessage({id: form4Questions[questionNumber].content})}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
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
              return styles.infobutton;
            }}
            onPress={() => {
              store.dispatch(
                setHelpText(
                  getHelpTexts()[
                    form4Questions[questionNumber].moreInfo.helpTextKey
                  ],
                ),
              );
            }}
          />
        </View>
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
    textAlign: 'left',
  },
  content: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
    textAlign: 'left',
  },
  contentM: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
    textAlign: 'left',
  },
  word: {
    color: RawColors.black,
    ...Fonts.Lato15R,
  },
  question: {
    ...Fonts.Lato15R,
    color: RawColors.black,
  },
  questionContainer: {
    marginTop: '10@s',
    padding: '16@ms',
    height: '80@vs',
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
  _content1: {
    ...Fonts.HelveticaNeue17B,
  },
  buttonContainer: {
    height: '200@vs',
    justifyContent: 'space-evenly',
  },
  button: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '10@vs',
    backgroundColor: RawColors.lightGrey,
  },
  infobutton: {
    height: '46@vs',
    width: '290@s',
    alignSelf: 'center',
    marginVertical: '10@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
});

export default FormFour;
