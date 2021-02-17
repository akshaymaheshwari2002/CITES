import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {Button} from '@atoms';

const checklistContent = ({
  checkliststyles,
  bullet,
  formatMessage,
  navigate,
}) => {
  return [
    {
      id: 'researchConducted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.researchConducted_1',
            })}
          </Text>
          <Pressable
            onPress={() =>
              navigate('webView', {
                sourceUri: 'https://www.iucnredlist.org/',
              })
            }
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.stepOne.researchConducted_2',
              })}
            </Text>
          </Pressable>
        </View>
      ),
    },
    {
      id: 'existingRecordsExamined',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.existingRecordsExamined_1',
            })}
          </Text>
          <Text style={checkliststyles.textLink}>
            {formatMessage({
              id: 'screen.stepOne.existingRecordsExamined_2',
            })}
          </Text>
        </View>
      ),
    },
    {
      id: 'outstandingInfringementInvestigations',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.outstandingInfringementInvestigations_1',
            })}
          </Text>
          <Text style={checkliststyles.textLink}>
            {formatMessage({
              id: 'screen.stepOne.outstandingInfringementInvestigations_2',
            })}
          </Text>
        </View>
      ),
    },
    {
      id: 'formOneCompleted',
      content: (
        <View style={checkliststyles.formOneCell}>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.formOneCompleted.complete',
            })}
            &nbsp;
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'screen.stepOne.formOneCompleted.FormOne',
            })}
            buttonStyle={(pressed) => checkliststyles.button}
            buttonTextStyle={(pressed) => checkliststyles.buttonTextStyle}
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
              id: 'screen.stepOne.productionCapacityCalculated.description',
            })}
          </Text>
          <Button
            buttonContent={formatMessage({
              id: 'screen.ProductionCapacityCalculator.titleText',
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
      id: 'toolsEnsured',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.toolsEnsured.ensure',
            })}
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.toolsEnsured.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.toolsEnsured.bullet_2',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.toolsEnsured.bullet_3',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.toolsEnsured.bullet_4_1',
              })}
              &nbsp;
              <Text style={checkliststyles.textLink}>
                {formatMessage({
                  id: 'screen.stepOne.toolsEnsured.bullet_4_2',
                })}
              </Text>
            </Text>
          </View>
        </View>
      ),
    },
    {
      id: 'twoOfficialsArranged',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.twoOfficialsArranged',
            })}
          </Text>
        </View>
      ),
    },
    {
      id: 'inspectionConcides',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.inspectionConcides.arrange',
            })}
            :
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.inspectionConcides.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.stepOne.inspectionConcides.bullet_2',
              })}
            </Text>
          </View>
        </View>
      ),
    },
    {
      id: 'facilityOwnerPresent',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.stepOne.facilityOwnerPresent',
            })}
          </Text>
        </View>
      ),
    },
  ];
};
export default checklistContent;
