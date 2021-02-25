import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Button, Header} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {Fonts, RawColors} from '@styles/Themes';

const DetermineSourceCode = ({navigation: {navigate, goBack}}) => {
  const [respondedQuestionStack, setRespondedQuestionStack] = useState([]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={goBack} />
        }
      />
      <Container.ScrollView
        style={[CommonStyles.screenContainer, CommonStyles.flex1]}
        contentContainerStyle={styles.scrollView}>
        <View style={styles.questionContainer}>
          <Text style={styles.label}>Question</Text>
          <View>
            <Text style={styles.text}>
              Was the specimen taken from the wild as an egg or juvenile that
              had a very low probability of surviving to adulthood?
            </Text>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button
            buttonContent={'dvgikdsvhvch'}
            buttonStyle={() => [styles.button]}
            buttonTextStyle={() => [styles.buttonText]}
          />
          <Button
            buttonContent={'dvgikdsvhvch'}
            buttonStyle={() => [styles.button]}
            buttonTextStyle={() => [styles.buttonText]}
          />
          <Button
            buttonContent={'more Information'}
            buttonStyle={() => [styles.button, styles.buttonMoreInformation]}
            buttonTextStyle={() => [
              styles.buttonText,
              styles.buttonMoreInformationText,
            ]}
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
