import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {vs} from 'react-native-size-matters';

import {Button} from '@atoms';
import Config from '@config';
import {navigate} from '@utils/RootNavigation';
import {getIntl} from '@utils/Intl';
import {store} from '@store';

const checklistContent = ({checkliststyles = {}, bullet = null}) => {
  const {formatMessage} = getIntl();
  const formOneCompleted = store.getState().sessionReducer.activeInspection
    .stepOne?.formOneCompleted;

  return [
    {
      id: 'researchConducted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepOne.researchConducted_1',
            })}
          </Text>
          <Pressable
            onPress={() =>
              navigate('WebView', {sourceUri: Config.URL_IUCN_RED_LIST})
            }
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.StepOne.researchConducted_2',
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
              id: 'screen.StepOne.existingRecordsExamined_1',
            })}
          </Text>
          <Pressable
            onPress={() => navigate('FacilityRegistered')}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.StepOne.existingRecordsExamined_2',
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
              id: 'screen.StepOne.outstandingInfringementInvestigations_1',
            })}
          </Text>
          <Pressable
            onPress={() => navigate('FacilityInfringement')}
            style={checklistContent.textLink}>
            <Text style={checkliststyles.textLink}>
              {formatMessage({
                id: 'screen.StepOne.outstandingInfringementInvestigations_2',
              })}
            </Text>
          </Pressable>
        </View>
      ),
    },
    {
      id: 'formOneCompleted',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepOne.formOneCompleted.complete',
            })}
            &nbsp;
          </Text>
          <Button
            onPress={() =>
              navigate(formOneCompleted ? 'FormOneSummary' : 'FormOne')
            }
            buttonContent={formatMessage({
              id: 'screen.StepOne.formOneCompleted.FormOne',
            })}
            buttonStyle={(pressed) => checkliststyles.button}
            buttonTextStyle={(pressed) => [
              checkliststyles.buttonTextStyle,
              {paddingHorizontal: vs(16)},
            ]}
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
              id: 'screen.StepOne.productionCapacityCalculated.description',
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
              id: 'screen.StepOne.toolsEnsured.ensure',
            })}
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.StepOne.toolsEnsured.bullet_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.StepOne.toolsEnsured.bullet_2',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.StepOne.toolsEnsured.bullet_3',
              })}
            </Text>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.StepOne.toolsEnsured.bullet_4_1',
              })}
            </Text>
          </View>
          <View style={checkliststyles.hiddenBullet}>
            <Pressable
              onPress={() => {
                navigate('ExampleDialogueConsentFormStep2');
              }}>
              <Text style={[checkliststyles.textLink]}>
                {formatMessage({
                  id: 'screen.StepOne.toolsEnsured.bullet_4_2',
                })}
              </Text>
            </Pressable>
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
              id: 'screen.StepOne.twoOfficialsArranged',
            })}
          </Text>
        </View>
      ),
    },
    {
      id: 'inspectionCoincides',
      content: (
        <View>
          <Text style={checkliststyles.textGeneral}>
            {formatMessage({
              id: 'screen.StepOne.inspectionCoincides.arrange',
            })}
          </Text>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <>
              <Text style={[checkliststyles.textGeneral]}>
                {formatMessage({
                  id: 'screen.StepOne.inspectionCoincides.bullet_1',
                })}
                <Text style={checkliststyles.textBold}>
                  {formatMessage({
                    id: 'screen.StepOne.inspectionCoincides.bullet_1_Part1',
                  })}
                  {formatMessage({
                    id: 'screen.StepOne.inspectionCoincides.bullet_1_Part2',
                  })}
                </Text>
              </Text>
            </>
          </View>
          <View style={checkliststyles.bulletList}>
            {bullet}
            <Text style={checkliststyles.textGeneral}>
              {formatMessage({
                id: 'screen.StepOne.inspectionCoincides.bullet_2',
              })}
              <Text style={checkliststyles.textBold}>
                {formatMessage({
                  id: 'screen.StepOne.inspectionCoincides.bullet_2_Part1',
                })}
              </Text>
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
              id: 'screen.StepOne.facilityOwnerPresent',
            })}
          </Text>
        </View>
      ),
    },
  ];
};

export default checklistContent;
