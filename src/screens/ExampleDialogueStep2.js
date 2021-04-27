import React, {useState, useMemo, useCallback} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, s, vs} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import RNPrint from 'react-native-print';

import {Fonts, RawColors} from '@styles/Themes';
import {ExampleDialogueStepTwoTemplate, TextInputArray} from '@molecules';
import {Container, Button, TextInput} from '@atoms';
import {generatePdf} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';
import {contentExampleDialogueStepTwo} from '@utils/TranslationMapping';

const ExampleDialogueStep2 = ({navigation: {navigate}}) => {
  const {formatMessage} = useIntl();
  const [name, setName] = useState();
  const [collaeaguesName, setCollaeaguesName] = useState();
  const [
    collaeaguesOrganisationName,
    setCollaeaguesOrganisationName,
  ] = useState();

  const labels = useMemo(() => {
    let translatedLabels = {};
    Object.keys(contentExampleDialogueStepTwo ?? {}).forEach((id, index) => {
      translatedLabels = {
        ...translatedLabels,
        [id]: formatMessage({
          id: contentExampleDialogueStepTwo[id],
        }),
      };
    });
    return translatedLabels;
  }, [formatMessage]);

  const handlePrint = useCallback(() => {
    (async () => {
      const file = await generatePdf({
        templates: [
          <ExampleDialogueStepTwoTemplate
            name={name}
            collaeagueName={collaeaguesName}
            organisationName={collaeaguesOrganisationName}
            content={labels}
          />,
        ],
      });
      RNPrint.print({filePath: file?.filePath});
    })();
  }, [collaeaguesName, collaeaguesOrganisationName, labels, name]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Container.ScrollView
        contentContainerStyle={CommonStyles.screenContainer}
        style={CommonStyles.flex1}>
        <View style={styles.title}>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.ExampleDialogue.headerPartOne'})}
          </Text>
          <Text style={styles.titleContent}>
            {formatMessage({id: 'screen.ExampleDialogue.headerPartTwo'})}
          </Text>
        </View>

        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentOne',
          })}
        </Text>
        <TextInput
          value={name}
          onChange={setName}
          placeholder={formatMessage({
            id: 'screen.ExampleDialogueStep2.contentTwo',
          })}
          style={styles.textInput}
        />
        <Text style={[styles.content, styles.nogap]}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentThree',
          })}
        </Text>
        <View style={styles.textInput}>
          <TextInputArray
            value={collaeaguesName}
            onChange={setCollaeaguesName}
            style={{width: s(190), marginHorizontal: s(15)}}
            placeholder={formatMessage({
              id: 'screen.ExampleDialogueStep2.contentFour',
            })}
            buttonText={formatMessage({
              id: 'button.addColleague',
            })}
          />
        </View>
        <Text style={[styles.content, styles.nogap]}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentFive',
          })}
        </Text>
        <View style={styles.textInput}>
          <TextInputArray
            value={collaeaguesOrganisationName}
            onChange={setCollaeaguesOrganisationName}
            style={{width: s(190), marginHorizontal: s(15)}}
            placeholder={formatMessage({
              id: 'screen.ExampleDialogueStep2.contentSix',
            })}
            buttonText={formatMessage({
              id: 'button.addOrganisation',
            })}
          />
        </View>
        <Text style={[styles.content, styles.nogap]}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentSeven',
          })}
        </Text>

        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentEight',
          })}
          <Text style={[styles.word, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentEightOne',
            })}
          </Text>
          <Text style={[styles.content, styles.nogap]}>
            {formatMessage({
              id: 'screen.ExampleDialogueStep2.contentEightTwo',
            })}
          </Text>
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentNine',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentFourteen',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentEleven',
          })}
        </Text>
        <Text style={styles.content}>
          {formatMessage({
            id: 'screen.ExampleDialogueStep2.contentTwelve',
          })}
        </Text>
        <Button
          buttonContent={formatMessage({
            id: 'button.print',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.buttonPrint;
          }}
          onPress={handlePrint}
        />
        <Button
          buttonContent={formatMessage({
            id: 'button.continueWithStep2',
          })}
          buttonTextStyle={() => {
            return styles.buttonText;
          }}
          buttonStyle={() => {
            return styles.button;
          }}
          onPress={() => navigate('TabNavigator', {screen: 'StepTwo'})}
        />
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    width: '240@s',
    marginTop: '18@s',
  },
  nogap: {
    marginTop: '0@s',
    alignSelf: 'flex-start',
  },
  titleContent: {
    ...Fonts.HelveticaNeue30B,
    lineHeight: '32@s',
    letterSpacing: '0.64@s',
  },
  word: {
    ...Fonts.Lato17B,
    color: RawColors.black,
  },
  content: {
    //width: '100%',
    //alignSelf: 'center',
    ...Fonts.Lato17R,
    lineHeight: 30,
    letterSpacing: 0.41,
    color: RawColors.black,
    marginTop: '20@s',
  },
  button: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginBottom: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonPrint: {
    height: '46@vs',
    marginHorizontal: '15@s',
    marginVertical: '24@vs',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {marginHorizontal: s(15)},
});

export default ExampleDialogueStep2;
