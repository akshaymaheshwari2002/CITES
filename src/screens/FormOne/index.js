import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import getFormFieldsPageOne from './FormFieldsPageOne';
import getFormFieldsPageTwo from './FormFieldsPageTwo';
import {Fonts, RawColors} from '@styles/Themes';
import {
  saveInspection,
  saveRegisteredSpecies,
} from '@store/slices/sessionSlice';
import Constants from '@utils/Constants';
import {getDefaultValues} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';
import {get} from '@utils/RealmHelper';

const FormOne = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {reset, control, errors, watch, handleSubmit} = useForm({
    shouldFocusError: false,
    mode: 'onBlur',
  });
  const scrollViewRef = useRef();
  const formData = useRef({});
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const activeFormOneId = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne?._id,
  );
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection?.registeredSpecies || [],
    shallowEqual,
  );
  const selectedSpeciesId = watch('_id');
  const formFields = useMemo(
    () =>
      formFieldsPage === 1
        ? getFormFieldsPageOne()
        : getFormFieldsPageTwo({
            _id: {
              items: registeredSpecies.map(({name, _id}) => ({
                label: name,
                value: _id,
              })),
            },
          }),
    [formFieldsPage, registeredSpecies],
  );

  const setActiveFormDataOnMount = useCallback(
    async (_activeFormOneId) => {
      const activeFormData = await get('FormOne', _activeFormOneId);
      activeFormData.typeOfInspection = activeFormData?.typeOfInspection.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );
      activeFormData.registeredSpecies = registeredSpecies.map(
        (species) => species.name,
      );
      delete activeFormData._id;

      reset(activeFormData);
    },
    [registeredSpecies, reset],
  );

  const setSpeciesDataInForm = useCallback(
    async (_selectedSpeciesId) => {
      const selectedSpecies = await get('Species', _selectedSpeciesId);

      reset(selectedSpecies);
    },
    [reset],
  );

  const _handleSubmit = useCallback(
    async (data) => {
      formData.current = {...formData.current, ...data};

      if (formFieldsPage === 1) {
        const _registeredSpecies = data.registeredSpecies.map((species) => {
          let speciesExisting = registeredSpecies.find(({name: _name}) => {
            return _name === species;
          });
          if (speciesExisting) {
            return {
              ...speciesExisting,
              name: species,
            };
          } else {
            return {
              name: species,
            };
          }
        });
        delete data.registeredSpecies;

        await dispatch(
          saveInspection({
            stepOne: {
              formOne: {
                ...data,
                typeOfInspection: Object.keys(data.typeOfInspection),
              },
            },
          }),
        );
        await dispatch(saveRegisteredSpecies(_registeredSpecies));

        setFormFieldsPage(2);
      } else {
        await dispatch(saveRegisteredSpecies(data));

        reset(getDefaultValues(getFormFieldsPageTwo()));
        scrollToTop();
      }
    },
    [dispatch, formFieldsPage, registeredSpecies, reset, scrollToTop],
  );

  const scrollToTop = useCallback(() => {
    setTimeout(
      () => scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true}),
      200,
    );
  }, []);

  const handleBackPress = useCallback(() => {
    if (formFieldsPage === 2) {
      setFormFieldsPage(1);
    } else {
      navigation.goBack();
    }
  }, [formFieldsPage, navigation]);

  const isSpeciesDataComplete = useCallback(() => {
    const currentData = registeredSpecies.map((species) => {
      return getFormFieldsPageTwo().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: species[current.name],
        }),
        {},
      );
    });
    const result = currentData.every((species) =>
      Object.keys(species).every((key) => species[key] === 0 || species[key]),
    );

    return result;
  }, [registeredSpecies]);

  const continueToStepOne = useCallback(() => {
    const formOneCompleted = isSpeciesDataComplete();
    dispatch(saveInspection({stepOne: {formOneCompleted}}));
    navigation.navigate('TabNavigator', {screen: 'StepOne'});
  }, [dispatch, isSpeciesDataComplete, navigation]);

  useEffect(() => {
    reset(formData.current);
  }, [formFieldsPage, reset]);

  useEffect(() => {
    scrollToTop();
  }, [formFieldsPage, scrollToTop]);

  useEffect(() => {
    if (activeFormOneId) {
      setActiveFormDataOnMount(activeFormOneId);
    }
  }, [activeFormOneId, setActiveFormDataOnMount]);

  useEffect(() => {
    if (formFieldsPage === 2 && selectedSpeciesId) {
      setSpeciesDataInForm(selectedSpeciesId);
    }
  }, [formFieldsPage, selectedSpeciesId, setSpeciesDataInForm]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={handleBackPress} />
        }
      />
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <Text style={styles.title}>
          {formatMessage({id: 'screen.FormOne.title'})}
        </Text>
        <Text style={styles.contentOne}>
          {formatMessage({id: 'screen.FormOne.contentOne'})}
        </Text>
        <Text style={styles.contentOnePartTwo}>
          {formatMessage({id: 'screen.FormOne.contentOnePartTwo'})}
        </Text>
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FormOne.contentTwo'})}
        </Text>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          {formFieldsPage === 1 ? (
            <Button
              onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
              buttonContent={formatMessage({
                id: 'button.continueToStep2FormOne',
              })}
            />
          ) : (
            <>
              <Button
                onPress={handleSubmit(_handleSubmit)}
                buttonContent={formatMessage({id: 'button.saveAndAdd'})}
              />
              <Button
                onPress={() => navigation.navigate('FormOneSummary')}
                buttonStyle={() => ({marginVertical: verticalScale(16)})}
                buttonContent={formatMessage({id: 'button.viewFormOneSummary'})}
              />
              <Button
                onPress={continueToStepOne}
                buttonContent={formatMessage({id: 'button.continueToStep1'})}
              />
            </>
          )}
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
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  contentOnePartTwo: {
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

export default FormOne;
