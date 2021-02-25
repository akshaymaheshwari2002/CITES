import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
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
import {getInstance} from '@utils/RealmHelper';
import {FormOne as FormOneModel, Inspection, Species, StepOne} from '@models';
import {setActiveInspection} from '@store/slices/persistedSlice';
import Constants from '@utils/Constants';
import {getDefaultValues} from '@utils/CommonFunctions';
import CommonStyles from '@styles/CommonStyles';

const FormOne = ({navigation}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const formProps = useForm();
  const scrollViewRef = useRef();
  const isMounting = useRef(true);
  const formData = useRef({});
  const switchedFromPageTwo = useRef(false);
  const switchedFromPageOne = useRef(false);
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const activeFormOneId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeFormOneId,
  );
  const activeStepOneId = useSelector(
    (state) => state.persistedReducer.activeInspection.activeStepOneId,
  );
  const activeInspectionId = useSelector(
    (state) => state.persistedReducer.activeInspection.id,
  );
  const formValues = formProps.watch();
  const selectedSpeciesName = formProps.watch('name', {});
  const formFields = useMemo(
    () =>
      formFieldsPage === 1
        ? getFormFieldsPageOne()
        : getFormFieldsPageTwo({
            name: {
              items: formData.current.registeredSpeciesName?.map((name) => ({
                label: name,
                value: name,
              })),
            },
          }),
    [formFieldsPage],
  );

  const handleSubmit = useCallback(
    async (data) => {
      const realm = await getInstance();

      if (formFieldsPage === 1) {
        const formOneData = new FormOneModel({
          ...data,
          typeOfInspection: Object.keys(data.typeOfInspection),
          _id: activeFormOneId,
        });
        const stepOneData = new StepOne({
          _id: activeStepOneId,
          formOne: formOneData,
        });
        const inspectionData = new Inspection({
          _id: activeInspectionId,
          stepOne: stepOneData,
        });

        realm.write(() => {
          realm.create('Inspection', inspectionData, 'modified');
          dispatch(
            setActiveInspection({
              id: inspectionData._id.toHexString(),
              activeStepOneId: stepOneData._id.toHexString(),
              activeFormOneId: formOneData._id.toHexString(),
            }),
          );
        });

        setFormFieldsPage(2);
        switchedFromPageOne.current = true;
      } else {
        realm.write(() => {
          let activeFormOne = JSON.parse(
            JSON.stringify(
              realm
                .objects('FormOne')
                ?.filter(({_id}) => _id.toHexString() === activeFormOneId)[0],
            ),
          );
          const alreadyExists = activeFormOne.registeredSpeciesData.some(
            (entry) => data.name === entry.name,
          );

          if (alreadyExists) {
            let existingData = activeFormOne.registeredSpeciesData?.filter(
              (entry) => data.name === entry.name,
            )[0];
            existingData = new Species({
              ...data,
              _id: existingData._id,
            });

            realm.create('Species', existingData, 'modified');
          } else {
            realm.objects('FormOne').forEach((form) => {
              if (form._id.toHexString() === activeFormOneId) {
                form.registeredSpeciesData.push(new Species(data));
              }
            });
          }
        });

        formProps.reset(getDefaultValues(getFormFieldsPageTwo()));
      }
    },
    [
      activeFormOneId,
      activeInspectionId,
      activeStepOneId,
      dispatch,
      formFieldsPage,
      formProps,
    ],
  );

  const setSpeciesDataInForm = useCallback(
    (_selectedSpeciesName) => {
      let species = formData.current.registeredSpeciesData?.filter(({name}) => {
        return name === _selectedSpeciesName.value;
      })[0];
      species = getFormFieldsPageTwo().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: species?.[current.name] ?? '',
        }),
        {},
      );

      formProps.reset({...species, name: _selectedSpeciesName.value});
    },
    [formProps],
  );

  const handleFormSummaryView = useCallback(async () => {
    const realm = await getInstance();
    const formOneObjects = realm.objects('FormOne');
    const activeFormData = JSON.parse(
      JSON.stringify(
        formOneObjects?.filter(
          ({_id}) => _id.toHexString() === activeFormOneId,
        )[0],
      ),
    );

    navigation.navigate('FormOneSummary', {data: activeFormData});
  }, [activeFormOneId, navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: ({onPress}) => (
        <TouchableOpacity
          onPress={() => {
            if (formFieldsPage === 2) {
              setFormFieldsPage(1);
              switchedFromPageTwo.current = true;
            } else {
              onPress();
            }
          }}>
          <Icon name="chevron-left" size={ms(26)} />
        </TouchableOpacity>
      ),
    });
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

      formProps.reset(values);
      switchedFromPageTwo.current = false;
    }
  }, [formFieldsPage, formProps]);

  useEffect(() => {
    if (formFieldsPage === 2 && switchedFromPageOne.current) {
      const values = getFormFieldsPageTwo().reduce(
        (acc, current) => ({
          ...acc,
          [current.name]: formData.current[current.name],
        }),
        {},
      );

      formProps.reset(values);
      switchedFromPageOne.current = false;
    }
  }, [formFieldsPage, formProps]);

  useEffect(() => {
    if (isMounting.current) {
      (async () => {
        if (activeFormOneId) {
          const realm = await getInstance();
          const formOneObjects = realm.objects('FormOne');
          const activeFormData = JSON.parse(
            JSON.stringify(
              formOneObjects?.filter(
                ({_id}) => _id.toHexString() === activeFormOneId,
              )[0],
            ),
          );
          const typeOfInspection = activeFormData.typeOfInspection.reduce(
            (acc, current) => ({
              ...acc,
              [Constants[current]]: true,
            }),
            {},
          );

          delete activeFormData._id;
          formData.current = {...activeFormData, typeOfInspection};
          formProps.reset({...activeFormData, typeOfInspection});
        }
      })();

      isMounting.current = false;
    }
  }, [activeFormOneId, formProps]);

  useEffect(() => {
    if (formFieldsPage === 2) {
      setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 500);
    }
  }, [formFieldsPage]);

  useEffect(() => {
    if (formFieldsPage === 2 && selectedSpeciesName.value) {
      setSpeciesDataInForm(selectedSpeciesName);
    }
  }, [formFieldsPage, selectedSpeciesName, setSpeciesDataInForm]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon name="chevron-left" size={ms(26)} onPress={navigation.goBack} />
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
          <Form {...formProps} formFields={formFields} />
          {formFieldsPage === 1 ? (
            <Button
              onPress={formProps.handleSubmit(handleSubmit)}
              buttonContent={formatMessage({id: 'button.continueToStep2'})}
            />
          ) : (
            <>
              <Button
                onPress={formProps.handleSubmit(handleSubmit)}
                buttonContent={formatMessage({id: 'button.saveAndAdd'})}
              />
              <Button
                onPress={handleFormSummaryView}
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
