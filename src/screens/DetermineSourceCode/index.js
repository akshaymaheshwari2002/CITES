import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet, ms, scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {Container, Button, Header, Tooltip} from '@atoms';
import {setTooltipProps} from '@store/slices/sessionSlice';
import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';
import sourceCodeQuestions from './sourceCodeQuestions';
import sourceCodeQuestionRelations from './sourceCodeQuestionRelations';

const DetermineSourceCode = ({
  navigation: {navigate, goBack, setParams},
  route,
}) => {
  const [interactedQuestionStack, setInteractedQuestionStack] = useState([1]);
  const isCurrentScreenFocused = useIsFocused();
  const {formatMessage} = useIntl();
  const dispatch = useDispatch();
  const tooltipProps = useSelector(
    (state) => state.sessionReducer.tooltipProps,
    shallowEqual,
  );

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
    if (
      typeof resultAction === 'number' ||
      resultAction === 'appendixI' ||
      resultAction === 'appendixII' ||
      resultAction === 'appendixIII'
    ) {
      setInteractedQuestionStack([...interactedQuestionStack, resultAction]);
    } else if (resultAction === 'exportShouldNotProceed') {
      navigate('NoExport');
    } else {
      navigate('SourceCode', {selectedSourceCode: resultAction});
    }
  };

  const handleHeaderTooltipClose = useCallback(() => {
    setParams({showToolTip: false});
    dispatch(
      setTooltipProps({
        consumerName: 'home',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentTwo',
        }),
        sourceCodeOnboarding: true,
      }),
    );
  }, [dispatch, formatMessage, setParams]);

  const handleLeftButtonTooltipClose = useCallback(() => {
    setParams({showToolTip: false});
    dispatch(
      setTooltipProps({
        consumerName: 'headerRightButton',
        isVisible: true,
        content: formatMessage({
          id: 'screen.StepOne.WalkThroughContentTwo',
        }),
      }),
    );
  }, [dispatch, formatMessage, setParams]);

  const handleRightButtonTooltipClose = useCallback(() => {
    setParams({showToolTip: false});
    dispatch(setTooltipProps(null));
  }, [dispatch, setParams]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Tooltip
            placement="bottom"
            isVisible={route.params.showToolTip}
            content={formatMessage({
              id: 'screen.StepOne.WalkThroughContentOne',
            })}
            onClose={handleHeaderTooltipClose}>
            <Icon
              name="chevron-left"
              size={ms(26)}
              onPress={() => {
                if (interactedQuestionStack.length === 1) {
                  goBack();
                } else {
                  setInteractedQuestionStack([
                    ...interactedQuestionStack.slice(0, -1),
                  ]);
                }
              }}
            />
          </Tooltip>
        }
        rightContent={
          <Tooltip
            placement="bottom"
            isVisible={
              tooltipProps?.consumerName === 'headerRightButton' ? true : false
            }
            content={formatMessage({
              id: 'screen.Onboarding4A5.WalkThroughContentRightHeader',
            })}
            onClose={handleRightButtonTooltipClose}>
            <IconAntDesign
              name="pluscircle"
              size={ms(26)}
              onPress={() => navigate('MoreInformation')}
            />
          </Tooltip>
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
          {sourceCodeQuestions[
            `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
          ].moreInfo ? (
            <Tooltip
              placement="top"
              isVisible={
                tooltipProps?.consumerName === 'moreInfoButton' ? true : false
              }
              content={formatMessage({
                id: 'screen.Onboarding4A5.WalkThroughContentOne',
              })}
              onClose={handleLeftButtonTooltipClose}
              focusedStyle={{
                height: scale(68),
                width: scale(350),
              }}>
              <Button
                buttonContent={'more Information'}
                buttonStyle={() => [
                  styles.button,
                  styles.buttonMoreInformation,
                ]}
                buttonTextStyle={() => [
                  styles.buttonText,
                  styles.buttonMoreInformationText,
                ]}
                onPress={() => {
                  const moreInfo =
                    sourceCodeQuestions[
                      `${
                        interactedQuestionStack[
                          interactedQuestionStack.length - 1
                        ]
                      }`
                    ].moreInfo;
                  if (moreInfo && moreInfo.target) {
                    if (moreInfo.isWebResource) {
                      navigate('WebView', {
                        sourceUri: moreInfo.target,
                      });
                    } else {
                      navigate(moreInfo.target);
                    }
                  }
                }}
              />
            </Tooltip>
          ) : null}
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
