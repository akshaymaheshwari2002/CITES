import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {Button} from '@atoms';
import {navigate} from '@utils/RootNavigation';
import createIntl from '@utils/Intl';

const checklistContent = ({checkliststyles, bullet}) => {
  const {formatMessage} = createIntl();

  return [
    {
      id: 'inspectionCompleted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepThree.inspectionCompleted_1',
            })}
          </Text>
          <Pressable onPress={() => {}} style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.stepThree.inspectionCompleted_2',
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
              id: 'screen.stepThree.formFourCompleted.text',
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
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
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
              id: 'screen.stepThree.productionCapacityCalculated.text',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'button.stepThree.productionCapacityCalculated',
            })}
            buttonStyle={(pressed) => [
              checkliststyles.button,
              checkliststyles.buttonLarge,
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
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id:
                'screen.stepThree.requirementCheckedForAdditionalInspectiond.bullet_head',
            })}
            :
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.stepThree.requirementCheckedForAdditionalInspectiond.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.stepThree.requirementCheckedForAdditionalInspectiond.bullet_2',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id:
                  'screen.stepThree.requirementCheckedForAdditionalInspectiond.bullet_3',
              })}
            </Text>
          </View>
        </View>
      ),
    },
  ];
};

export default checklistContent;
