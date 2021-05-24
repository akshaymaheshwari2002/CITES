import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {vs} from 'react-native-size-matters';

import {Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';
import {getIntl} from '@utils/Intl';

const checklistContent = ({checkliststyles, bullet}) => {
  const {formatMessage} = getIntl();

  return [
    {
      id: 'inspectionCompleted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepThree.inspectionCompleted_1',
            })}
          </Text>
          <Pressable
            onPress={() => {
              navigate('ExampleDialogueStep3');
            }}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.StepThree.inspectionCompleted_2',
              })}
            </Text>
          </Pressable>
        </View>
      ),
    },
    {
      id: 'formFourCompleted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepThree.formFourCompleted.text',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.stepThree.formFourCompleted',
            })}
            buttonStyle={(pressed) => [
              checkliststyles.button,
              checkliststyles.buttonLarge,
            ]}
            buttonTextStyle={(pressed) => [
              checkliststyles.buttonTextStyle,
              {paddingHorizontal: vs(16)},
            ]}
            onPress={() => {
              navigate('FormFour');
            }}
          />
        </View>
      ),
    },
    {
      id: 'productionCapacityCalculated',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepThree.productionCapacityCalculated.text',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.stepThree.productionCapacityCalculated',
            })}
            buttonStyle={(pressed) => [
              checkliststyles.button,
              checkliststyles.productionCalculatorCell,
            ]}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
            onPress={() => {
              navigate('ProductionCapacityCalculator');
            }}
          />
        </View>
      ),
    },
    {
      id: 'requirementCheckedForAdditionalInspection',
      content: (
        <View>
          <Text style={[checkliststyles.textGeneral, {marginRight: 10}]}>
            {formatMessage({
              id:
                'screen.StepThree.requirementCheckedForAdditionalInspectiond.bullet_head',
            })}
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.StepThree.requirementCheckedForAdditionalInspectiond.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.StepThree.requirementCheckedForAdditionalInspectiond.bullet_2',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.StepThree.requirementCheckedForAdditionalInspectiond.bullet_3',
              })}
            </Text>
          </View>
        </View>
      ),
    },
  ];
};

export default checklistContent;
