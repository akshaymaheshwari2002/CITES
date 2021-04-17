import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ScaledSheet, ms, s, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useIntl} from 'react-intl';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {Container, Button, Tooltip} from '@atoms';
import {setTooltipProps} from '@store/slices/sessionSlice';
import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';
import sourceCodeQuestions from './sourceCodeQuestions';
import sourceCodeQuestionRelations from './sourceCodeQuestionRelations';
import Constants from '@utils/Constants';

const {width: screenWidth} = Dimensions.get('window');

const DetermineSourceCode = ({
  navigation: {navigate, goBack, setParams, setOptions},
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

  const onRespondAction = useCallback(
    ({optionChoosen}) => {
      const resultAction =
        sourceCodeQuestionRelations[
          interactedQuestionStack[interactedQuestionStack.length - 1]
        ][optionChoosen];
      if (
        typeof resultAction === 'number' ||
        resultAction === Constants.APPENDIXI ||
        resultAction === Constants.APPENDIXII ||
        resultAction === Constants.APPENDIXIII
      ) {
        setInteractedQuestionStack([...interactedQuestionStack, resultAction]);
      } else if (resultAction === 'exportShouldNotProceed') {
        navigate('NoExport');
      } else {
        navigate('SourceCode', {selectedSourceCode: resultAction});
      }
    },
    [interactedQuestionStack, navigate],
  );

  const handleHeaderTooltipClose = useCallback(() => {
    setParams({showToolTip: false});
    setTimeout(() => {
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
    }, 100);
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

  const renderMoreInfoButton = useCallback(() => {
    return sourceCodeQuestions[
      `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
    ].moreInfo ? (
      <Tooltip
        placement="top"
        isVisible={tooltipProps?.consumerName === 'moreInfoButton'}
        content={formatMessage({
          id: 'screen.Onboarding4A5.WalkThroughContentOne',
        })}
        onClose={handleLeftButtonTooltipClose}
        focusedStyle={{
          height: vs(64),
          width: screenWidth * 0.85 + s(18),
        }}>
        <Button
          buttonContent={formatMessage({id: 'button.moreInformation'})}
          buttonStyle={() => [styles.button, styles.buttonMoreInformation]}
          buttonTextStyle={() => [
            Fonts.Lato15R,
            styles.buttonMoreInformationText,
          ]}
          onPress={() => {
            const moreInfo =
              sourceCodeQuestions[
                `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
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
    ) : null;
  }, [
    formatMessage,
    handleLeftButtonTooltipClose,
    interactedQuestionStack,
    navigate,
    tooltipProps,
  ]);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <Pressable
          hitSlop={10}
          onPress={() => {
            if (interactedQuestionStack.length === 1) {
              goBack();
            } else {
              setInteractedQuestionStack([
                ...interactedQuestionStack.slice(0, -1),
              ]);
            }
          }}>
          <Tooltip
            placement="bottom"
            isVisible={route.params.showToolTip}
            content={formatMessage({
              id: 'screen.StepOne.WalkThroughContentOne',
            })}
            focusedStyle={styles.headerLeftTooltip}
            onClose={handleHeaderTooltipClose}>
            <Icon name="chevron-left" size={ms(22)} />
          </Tooltip>
        </Pressable>
      ),
      headerRight: () => (
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
      ),
    });
  }, [
    formatMessage,
    goBack,
    handleHeaderTooltipClose,
    handleRightButtonTooltipClose,
    interactedQuestionStack,
    navigate,
    route.params.showToolTip,
    setOptions,
    tooltipProps,
  ]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        style={[CommonStyles.screenContainer, CommonStyles.flex1]}
        contentContainerStyle={CommonStyles.alignCenter}>
        <View style={styles.questionContainer}>
          <Text style={Fonts.HelveticaNeue30B}>
            {formatMessage({
              id: 'title.question',
            })}
          </Text>
          {sourceCodeQuestions[
            `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
          ].content.map((value, index) => {
            return value.isLink ? (
              <TouchableOpacity
                key={index.toString()}
                onPress={() => {
                  if (value.isLink && value.isLink.target) {
                    if (value.isLink.isWebSource) {
                      navigate('WebView', {
                        sourceUri: value.isLink.target,
                      });
                    } else {
                      navigate(value.isLink.target);
                    }
                  }
                }}>
                <Text style={styles.link} key={`${index}`}>
                  {formatMessage({
                    id: value.text,
                  })}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={[styles.text, value?.textStyle ?? {}]}
                key={index.toString()}>
                {formatMessage({id: value.text})}
              </Text>
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          {sourceCodeQuestions[
            `${interactedQuestionStack[interactedQuestionStack.length - 1]}`
          ].options.map((value, index) => {
            return (
              <Button
                key={`${index}`}
                buttonContent={
                  value === 'AppendixI'
                    ? formatMessage({id: value})
                    : value === 'AppendixII'
                    ? formatMessage({id: value})
                    : value === 'AppendixIII'
                    ? formatMessage({id: value})
                    : value
                }
                buttonStyle={() => styles.button}
                buttonTextStyle={() => Fonts.Lato15R}
                onPress={() => {
                  onRespondAction({optionChoosen: value});
                }}
              />
            );
          })}
          {renderMoreInfoButton()}
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  questionContainer: {
    ...CommonStyles.alignCenter,
    flex: 1,
    alignItems: 'center',
    paddingTop: '30@vs',
    width: '100%',
  },
  link: {
    ...Fonts.Lato20B,
    marginTop: 0,
    lineHeight: '22@s',
    letterSpacing: 0.48,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingHorizontal: '10@s',
  },
  text: {
    ...Fonts.Lato20R,
    marginTop: '15@vs',
    textAlign: 'center',
    paddingHorizontal: '10@s',
  },
  buttonContainer: {
    height: '200@vs',
    justifyContent: 'space-evenly',
  },
  button: {
    width: screenWidth * 0.85,
    backgroundColor: RawColors.lightGrey,
  },
  buttonMoreInformation: {
    backgroundColor: RawColors.sugarCane,
    borderColor: RawColors.prussianBlue,
  },
  buttonMoreInformationText: {
    textTransform: 'uppercase',
  },
  headerLeftTooltip: {marginLeft: '16@s'},
});

export default DetermineSourceCode;
