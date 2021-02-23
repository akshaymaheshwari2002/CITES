import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {Button} from '@atoms';
import Config from '@config';
import {navigate} from '@utils/RootNavigation';
import createIntl from '@utils/Intl';

const checklistContent = ({checkliststyles, bullet}) => {
  const {formatMessage} = createIntl();

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
              navigate('WebView', {sourceUri: Config.URL_IUCN_RED_LIST})
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
          <Pressable
            onPress={() => navigate('FacilityRegistered')}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.stepOne.existingRecordsExamined_2',
              })}
            </Text>
          </Pressable>
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
          <Pressable
            onPress={() => navigate('FacilityInfringement')}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.stepOne.outstandingInfringementInvestigations_2',
              })}
            </Text>
          </Pressable>
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
            onPress={() => navigate('FormOne')}
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
