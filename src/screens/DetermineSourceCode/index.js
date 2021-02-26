import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';
import sourceCodeQuestions from './sourceCodeQuestions';
import sourceCodeQuestionRelations from './sourceCodeQuestionRelations';

const DetermineSourceCode = ({navigation: {navigate, goBack}}) => {
  const [interactedQuestionStack, setInteractedQuestionStack] = useState([1]);
  const isCurrentScreenFocused = useIsFocused();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onbackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onbackPress);
    };
  }, [onbackPress, interactedQuestionStack, isCurrentScreenFocused]);

  const onbackPress = useCallback(() => {
    if (!isCurrentScreenFocused || interactedQuestionStack.length === 1) {
      return false;
    } else {
      setInteractedQuestionStack([...interactedQuestionStack.slice(0, -1)]);
      return true;
    }
  }, [isCurrentScreenFocused, interactedQuestionStack]);

  const onRespondAction = ({optionChoosen}) => {
    const resultAction =
      sourceCodeQuestionRelations[
        interactedQuestionStack[interactedQuestionStack.length - 1]
      ][optionChoosen];
    if (typeof resultAction === 'number') {
      setInteractedQuestionStack([...interactedQuestionStack, resultAction]);
    } else if (resultAction === 'exportShouldNotProceed') {
      // navigate to NoExport screen
    } else {
      navigate('SourceCode', {selectedSourceCode: resultAction});
    }
  };

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
        rightContent={
          <IconAntDesign name="pluscircle" size={ms(26)} onPress={() => {}} />
        }
      />
      <Container.ScrollView
        style={[CommonStyles.screenContainer, CommonStyles.flex1]}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.questionContainer}>
          <Text style={styles.label}>Question</Text>
          {sourceCodeQuestions[
            `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
          ].content.map((value, index) => {
            return (
              <Text style={styles.text} key={`${index}`}>
                {value}
              </Text>
            );
          })}
        </View>
        <View style={styles.buttonsWrapper}>
          {sourceCodeQuestions[
            `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
          ].options.map((value, index) => {
            return (
              <Button
                key={`${index}`}
                buttonContent={value}
                buttonStyle={() => [styles.button]}
                buttonTextStyle={() => [styles.buttonText]}
                onPress={() => {
                  onRespondAction({optionChoosen: value});
                }}
              />
            );
          })}
          <Button
            buttonContent={'more Information'}
            buttonStyle={() => [styles.button, styles.buttonMoreInformation]}
            buttonTextStyle={() => [
              styles.buttonText,
              styles.buttonMoreInformationText,
            ]}
            onPress={() => {
              const moreInfo =
                sourceCodeQuestions[
                  `${
                    interactedQuestionStack[interactedQuestionStack.length - 1]
                  }`
                ].moreInfo;
              if (moreInfo) {
                if (moreInfo.isWebResource && moreInfo.target) {
                  navigate('WebView', {
                    sourceUri: moreInfo.target,
                  });
                }
              }
            }}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

export default DetermineSourceCode;

const styles = ScaledSheet.create({
  scrollView: {
    alignItems: 'center',
  },
  questionContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...CommonStyles.flex1,
  },
  label: {
    paddingVertical: '15@vs',
    ...Fonts.HelveticaNeue30B,
  },
  text: {
    ...Fonts.Lato20R,
  },
  buttonsWrapper: {
    width: '85%',
  },
  button: {
    height: '46@vs',
    width: '100%',
    marginVertical: '15@vs',
    backgroundColor: RawColors.lightGrey,
  },
  buttonText: {
    ...Fonts.Lato15R,
  },
  buttonMoreInformation: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
  },
  buttonMoreInformationText: {
    textTransform: 'uppercase',
  },
});
