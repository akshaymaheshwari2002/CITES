import React, {useCallback, useMemo, useRef, useEffect} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import {saveInspection} from '@store/slices/sessionSlice';
import getFormFields from './FormFields';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import {get} from '@utils/RealmHelper';
import Constants from '@utils/Constants';

const FormTwo = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {reset, control, errors, handleSubmit, watch} = useForm({
    shouldFocusError: false,
  });
  const scrollViewRef = useRef();
  const formData = useRef({});
  const _accessToVeterinaryServices = watch('accessToVeterinaryServices');
  const _animalKeptAtOtherLocation = watch('animalKeptAtOtherLocation');

  const formFields = useMemo(() => {
    let filteredFields = [];
    const allFields = getFormFields({
      isAccessToVeterinaryServices:
        _accessToVeterinaryServices?.[Constants.YES] ?? false,
      isAnimalKeptAtOtherLocation:
        _animalKeptAtOtherLocation?.[Constants.YES] ?? false,
    });
    filteredFields.push(...allFields.slice(0, 2));
    if (_accessToVeterinaryServices?.[Constants.YES] ?? false) {
      filteredFields.push(...allFields.slice(2, 5));
    }
    filteredFields.push(allFields[5]);
    if (_animalKeptAtOtherLocation?.[Constants.YES] ?? false) {
      filteredFields.push(...allFields.slice(6, 7));
    }
    return filteredFields;
  }, [_accessToVeterinaryServices, _animalKeptAtOtherLocation]);

  const _handleSubmit = useCallback(
    async (data) => {
      formData.current = {...formData.current, ...data};

      await dispatch(
        saveInspection({
          stepTwo: {
            formTwo: {
              ...data,
              accessToVeterinaryServices: Object.keys(
                data?.accessToVeterinaryServices ?? {},
              ),
              animalKeptAtOtherLocation: Object.keys(
                data?.animalKeptAtOtherLocation ?? {},
              ),
            },
          },
        }),
      );
      dispatch(saveInspection({stepTwo: {formTwoCompleted: true}}));
      navigation.navigate('TabNavigator', {screen: 'StepTwo'});
    },
    [dispatch, navigation],
  );

  const scrollToTop = useCallback(() => {
    setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 200);
  }, []);

  const activeFormTwoId = useSelector(
    (state) => state.sessionReducer.activeInspection.stepTwo?.formTwo?._id,
  );

  const setActiveFormDataOnMount = useCallback(
    async (_activeFormTwoId) => {
      const activeFormData = await get('FormTwo', _activeFormTwoId);

      activeFormData.accessToVeterinaryServices = activeFormData?.accessToVeterinaryServices.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );
      activeFormData.animalKeptAtOtherLocation = activeFormData?.animalKeptAtOtherLocation.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );

      delete activeFormData._id;
      reset(activeFormData);
    },
    [reset],
  );

  useEffect(() => {
    if (activeFormTwoId) {
      setActiveFormDataOnMount(activeFormTwoId);
    }
  }, [activeFormTwoId, setActiveFormDataOnMount]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
        }
      />
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormTwo.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FormTwo.contentOne'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FormTwo.contentTwo'})}
        </Text>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          <Button
            onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
            buttonContent={formatMessage({id: 'button.continueWithStep2'})}
          />
          <Button
            onPress={() => navigation.navigate('FormTwoSummary')}
            buttonStyle={() => ({marginVertical: verticalScale(16)})}
            buttonContent={formatMessage({id: 'button.viewForm2Summary'})}
          />
        </View>
      </Container.ScrollView>
    </Container>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginHorizontal: '16@s',
    marginVertical: '16@vs',
    ...Fonts.HelveticaNeue30B,
  },
  contentOne: {
    marginHorizontal: '16@s',
    marginBottom: '16@vs',
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  contentTwo: {
    marginBottom: '16@vs',
    padding: '16@ms',
    backgroundColor: RawColors.whiteTwo,
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  formContainer: {
    paddingHorizontal: '16@s',
    marginBottom: '24@vs',
  },
});

export default FormTwo;
