import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ms, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import getFormFieldsPageOne from './FormFieldsPageOne';
import getFormFieldsPageTwo from './FormFieldsPageTwo';
import {Fonts, RawColors} from '@styles/Themes';
import {get, upsert, addSpeciesToForm} from '@utils/RealmHelper';
import {Inspection, Species} from '@models';
import {setActiveInspectionId} from '@store/slices/persistedSlice';
import Constants from '@utils/Constants';
import {getDefaultValues} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';

const FormOne = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {reset, control, errors, watch, handleSubmit} = useForm({
    shouldFocusError: false,
  });
  const scrollViewRef = useRef();
  const isMounting = useRef(true);
  const formData = useRef({});
  const savedFormData = useRef({});
  const switchedFromPageTwo = useRef(false);
  const switchedFromPageOne = useRef(false);
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const activeFormOneId = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?.formOne?._id,
  );
  const activeStepOneId = useSelector(
    (state) => state.sessionReducer.activeInspection.stepOne?._id,
  );
  const activeInspectionId = useSelector(
    (state) => state.sessionReducer.activeInspection._id,
  );
  const formValues = watch();
  const selectedSpeciesId = watch('speciesId');
  const formFields = useMemo(
    () =>
      formFieldsPage === 1
        ? getFormFieldsPageOne()
        : getFormFieldsPageTwo({
            speciesId: {
              items: savedFormData.current.registeredSpecies?.map(
                ({name, _id}) => ({
                  label: name,
                  value: _id,
                }),
              ),
            },
          }),
    [formFieldsPage],
  );

  const _handleSubmit = useCallback(
    async (data) => {
      if (formFieldsPage === 1) {
        const registeredSpecies = data.registeredSpecies.map(
          (species) => new Species({name: species}),
        );
        delete data.registeredSpecies;
        const inspectionData = new Inspection({
          _id: activeInspectionId,
          stepOne: {
            _id: activeStepOneId,
            formOne: {
              _id: activeFormOneId,
              ...data,
              typeOfInspection: Object.keys(data.typeOfInspection),
            },
          },
        });
        const updatedInspectionData = await upsert(
          'Inspection',
          inspectionData,
        );
        const updatedFormData = await addSpeciesToForm(
          registeredSpecies,
          updatedInspectionData.stepOne.formOne._id,
        );
        savedFormData.current = updatedFormData;

        dispatch(setActiveInspectionId(updatedInspectionData._id));

        setFormFieldsPage(2);
        switchedFromPageOne.current = true;
      } else {
        let species = await get('Species', data.speciesId);
        delete data.speciesId;
        species = new Species({...species, ...data});
        await upsert('Species', species);
        const updatedFormData = await get('FormOne', activeFormOneId);
        savedFormData.current = updatedFormData;
        reset(getDefaultValues(getFormFieldsPageTwo()));
        scrollToTop();
      }
    },
    [
      activeFormOneId,
      activeInspectionId,
      activeStepOneId,
      dispatch,
      formFieldsPage,
      reset,
      scrollToTop,
    ],
  );

  const scrollToTop = useCallback(() => {
    setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 200);
  }, []);

  const setSpeciesDataInForm = useCallback(
    async (_selectedSpeciesId) => {
      const selectedSpecies = await get('Species', _selectedSpeciesId);

      reset({...selectedSpecies, speciesId: _selectedSpeciesId});
    },
    [reset],
  );

  const handleBackPress = useCallback(() => {
    if (formFieldsPage === 2) {
      setFormFieldsPage(1);
      switchedFromPageTwo.current = true;
    } else {
      navigation.goBack();
    }
  }, [formFieldsPage, navigation]);

  useEffect(() => {
    if (!switchedFromPageOne.current && !switchedFromPageTwo.current) {
      formData.current = {...formData.current, ...formValues};
    }
  }, [formValues]);

  useEffect(() => {
    if (formFieldsPage === 1 && switchedFromPageTwo.current) {
      const values = getFormFieldsPageOne().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: formData.current[current.name],
        }),
        {},
      );

      reset(values);
      switchedFromPageTwo.current = false;
    }
  }, [formFieldsPage, reset]);

  useEffect(() => {
    if (formFieldsPage === 2 && switchedFromPageOne.current) {
      const values = getFormFieldsPageTwo().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: formData.current[current.name],
        }),
        {},
      );

      reset(values);
      switchedFromPageOne.current = false;
    }
  }, [formFieldsPage, reset]);

  useEffect(() => {
    if (isMounting.current) {
      (async () => {
        if (activeFormOneId) {
          const activeFormData = await get('FormOne', activeFormOneId);
          savedFormData.current = activeFormData;
          activeFormData.typeOfInspection = activeFormData?.typeOfInspection.reduce(
            (acc, current) => ({
              ...acc,
              [Constants[current]]: true,
            }),
            {},
          );
          activeFormData.registeredSpecies = activeFormData.registeredSpecies.map(
            (species) => species.name,
          );
          delete activeFormData._id;
          formData.current = activeFormData;
          reset(activeFormData);
        }
      })();

      isMounting.current = false;
    }
  }, [activeFormOneId, reset]);

  useEffect(() => {
    if (formFieldsPage) {
      scrollToTop();
    }
  }, [formFieldsPage, scrollToTop]);

  useEffect(() => {
    if (selectedSpeciesId) {
      setSpeciesDataInForm(selectedSpeciesId);
    }
  }, [selectedSpeciesId, setSpeciesDataInForm]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
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
        <Text style={styles.contentTwo}>
          {formatMessage({id: 'screen.FormOne.contentTwo'})}
        </Text>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          {formFieldsPage === 1 ? (
            <Button
              onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
              buttonContent={formatMessage({id: 'button.continueToStep2'})}
            />
          ) : (
            <>
              <Button
                onPress={handleSubmit(_handleSubmit)}
                buttonContent={formatMessage({id: 'button.saveAndAdd'})}
              />
              <Button
                onPress={() =>
                  navigation.navigate('FormOneSummary', {
                    data: savedFormData.current,
                  })
                }
                buttonStyle={() => ({marginVertical: verticalScale(16)})}
                buttonContent={formatMessage({id: 'button.viewFormOneSummary'})}
              />
              <Button
                onPress={() =>
                  navigation.navigate('TabNavigator', {screen: 'StepOne'})
                }
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
