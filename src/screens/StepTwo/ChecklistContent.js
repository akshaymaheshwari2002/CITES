import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';
import {getIntl} from '@utils/Intl';
import {setContinueToStepTwo} from '@store/slices/sessionSlice';
import {store} from '@store';

const checklistContent = ({checkliststyles, bullet}) => {
  const {formatMessage} = getIntl();
  const {dispatch} = store;

  return [
    {
      id: 'purposeDisclosedToOwner',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.purposeDisclosedToOwner_1',
            })}
          </Text>
          <Pressable
            onPress={() => {
              navigate('ExampleDialogueStep2');
            }}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.stepTwo.purposeDisclosedToOwner_2',
              })}
            </Text>
          </Pressable>
        </View>
      ),
    },
    {
      id: 'confirmFormOneContent',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.confirmFormOneContent.text',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.stepTwo.confirmFormOneContent',
            })}
            buttonStyle={(pressed) => [checkliststyles.button]}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
            onPress={() => {
              navigate('FormOneSummary', {formSummaryStepTwo: true});
            }}
          />
        </View>
      ),
    },
    {
      id: 'informationRecorded',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.informationRecorded.bullet_head',
            })}
            :
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepTwo.informationRecorded.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepTwo.informationRecorded.bullet_2',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepTwo.informationRecorded.bullet_3',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepTwo.informationRecorded.bullet_4',
              })}
            </Text>
          </View>
        </View>
      ),
    },
    {
      id: 'formTwoCompleted',
      content: (
        <View style={checkliststyles.formCell}>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.formTwoCompleted.complete',
            })}
            &nbsp;
          </Text>
          <Button
            onPress={() => navigate('FormTwo')}
            buttonContent={formatMessage({
              id: 'screen.stepTwo.formTwoCompleted.FormTwo',
            })}
            buttonStyle={(pressed) => checkliststyles.button}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
          />
        </View>
      ),
    },
    {
      id: 'formThreeCompleted',
      content: (
        <View style={checkliststyles.formCell}>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.formThreeCompleted.complete',
            })}
            &nbsp;
          </Text>
          <Button
            onPress={() => navigate('FormThree')}
            buttonContent={formatMessage({
              id: 'screen.stepTwo.formThreeCompleted.FormThree',
            })}
            buttonStyle={(pressed) => checkliststyles.button}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
          />
        </View>
      ),
    },
    {
      id: 'sourceDetermined',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.sourceDetermined.text',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.stepTwo.sourceDetermined',
            })}
            buttonStyle={(pressed) => [checkliststyles.button]}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
            onPress={() => {
              dispatch(setContinueToStepTwo(true));
              navigate('SourceFlow');
            }}
          />
        </View>
      ),
    },
    {
      id: 'recordsExaminedForStock',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepTwo.recordsExaminedForStock',
            })}
          </Text>
        </View>
      ),
    },
  ];
};

export default checklistContent;
