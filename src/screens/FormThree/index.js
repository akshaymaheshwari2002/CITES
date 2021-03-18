import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {Text, View, BackHandler, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import {useForm} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import {useIntl} from 'react-intl';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {Button, Container, Header} from '@atoms';
import {Form} from '@organisms';
import {saveRegisteredSpecies} from '@store/slices/sessionSlice';
import {get} from '@utils/RealmHelper';
import {Fonts, RawColors} from '@styles/Themes';
import CommonStyles from '@styles/CommonStyles';
import Constants from '@utils/Constants';
import getFormFieldsPageOne from './FormFieldsPageOne';
import getFormFieldsPageTwo from './FormFieldsPageTwo';
import getFormFieldsPageThree from './FormFieldsPageThree';
import getFormFieldsPageFour from './FormFieldsPageFour';
import getFormFieldsPageFive from './FormFieldsPageFive';

const FormThree = ({navigation: {navigate, goBack}}) => {
  const [formFieldsPage, setFormFieldsPage] = useState(1);
  const registeredSpecies = useSelector(
    (state) => state.sessionReducer.activeInspection?.registeredSpecies || [],
    shallowEqual,
  );
  const dispatch = useDispatch();
  const isCurrentScreenFocused = useIsFocused();
  const {formatMessage} = useIntl();
  const {reset, control, errors, watch, handleSubmit} = useForm({
    shouldFocusError: false,
  });
  const scrollViewRef = useRef();
  const formData = useRef({});
  const selectedSpeciesId = watch('_id');
  const _additionalAnimalsAcquiredSinceInitialStock = watch(
    'additionalAnimalsAcquiredSinceInitialStock',
  );
  const _doYouBreedThisSpecies = watch('doYouBreedThisSpecies');
  const _doYouRanchThisSpecies = watch('doYouRanchThisSpecies');
  const _lifeStageHarvested = watch('lifeStageHarvested');

  const formFields = useMemo(() => {
    const fieldProps = {
      _id: {
        items: registeredSpecies.map(({name, _id}) => ({
          label: name,
          value: _id,
        })),
      },
    };
    switch (formFieldsPage) {
      case 1:
        const isAdditionalAnimalsAcquiredSinceInitialStock =
          _additionalAnimalsAcquiredSinceInitialStock?.[Constants.YES] ?? false;
        return isAdditionalAnimalsAcquiredSinceInitialStock
          ? getFormFieldsPageOne({
              ...fieldProps,
            })
          : getFormFieldsPageOne({
              ...fieldProps,
            }).slice(0, 7);
      case 2:
        const isDoYouBreedThisSpecies =
          _doYouBreedThisSpecies?.[Constants.YES] ?? false;
        return isDoYouBreedThisSpecies
          ? getFormFieldsPageTwo()
          : getFormFieldsPageTwo().slice(0, 1);
      case 3:
        const isDoYouRanchThisSpecies =
          _doYouRanchThisSpecies?.[Constants.YES] ?? false;
        return isDoYouRanchThisSpecies
          ? getFormFieldsPageThree({
              lifeStageHarvested: {
                initialValue: formData.current.lifeStageHarvested ?? [],
              },
            })
          : getFormFieldsPageThree().slice(0, 1);
      case 4:
        return getFormFieldsPageFour();
      case 5:
        return getFormFieldsPageFive();
    }
  }, [
    formFieldsPage,
    registeredSpecies,
    _additionalAnimalsAcquiredSinceInitialStock,
    _doYouBreedThisSpecies,
    _doYouRanchThisSpecies,
  ]);

  const _handleSubmit = useCallback(
    async (data) => {
      formData.current = {...formData.current, ...data};
      const _registeredSpecies = {
        ...formData.current,
        additionalAnimalsAcquiredSinceInitialStock: Object.keys(
          formData.current?.additionalAnimalsAcquiredSinceInitialStock ?? {},
        ),
        doYouBreedThisSpecies: Object.keys(
          formData.current?.doYouBreedThisSpecies ?? {},
        ),
        doYouRanchThisSpecies: Object.keys(
          formData.current?.doYouRanchThisSpecies ?? {},
        ),
      };

      if (
        formFieldsPage === 1 &&
        !_additionalAnimalsAcquiredSinceInitialStock?.[Constants.YES]
      ) {
        // clear associated field data when NO is selected
        _registeredSpecies.addressOfAdditionalStock = '';
      }
      if (formFieldsPage === 2 && !_doYouBreedThisSpecies?.[Constants.YES]) {
        // clear associated fields data when NO is selected
        _registeredSpecies.whenDidYouBreedThisSpecies = '';
        _registeredSpecies.numberOfLittersPerYear = null;
        _registeredSpecies.numberOfOffspringPerLitter = null;
        _registeredSpecies.numberProducedInPreviousYear = null;
      }
      await dispatch(saveRegisteredSpecies(_registeredSpecies));

      // reset(getDefaultValues(getFormFieldsPageTwo()));
      if (formFieldsPage < 5) {
        setFormFieldsPage((state) => state + 1);
        scrollToTop();
      } else {
        navigate('TabNavigator', {screen: 'StepTwo'});
      }
    },
    [
      formFieldsPage,
      navigate,
      dispatch,
      scrollToTop,
      _additionalAnimalsAcquiredSinceInitialStock,
      _doYouBreedThisSpecies,
    ],
  );

  const scrollToTop = useCallback(() => {
    setTimeout(() => scrollViewRef.current.scrollToPosition(0, 0, true), 200);
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onbackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onbackPress);
    };
  }, [onbackPress, formFieldsPage, isCurrentScreenFocused]);

  const onbackPress = useCallback(() => {
    if (isCurrentScreenFocused && formFieldsPage > 1) {
      setFormFieldsPage(formFieldsPage - 1);
      return true;
    } else {
      return false;
    }
  }, [isCurrentScreenFocused, formFieldsPage]);

  useEffect(() => {
    if (selectedSpeciesId) {
      setSpeciesDataInForm(selectedSpeciesId);
    }
  }, [formFieldsPage, selectedSpeciesId, setSpeciesDataInForm]);

  const setSpeciesDataInForm = useCallback(
    (_selectedSpeciesId) => {
      const selectedSpecies = get('Species', _selectedSpeciesId);

      selectedSpecies.additionalAnimalsAcquiredSinceInitialStock = selectedSpecies?.additionalAnimalsAcquiredSinceInitialStock.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );
      selectedSpecies.doYouBreedThisSpecies = selectedSpecies?.doYouBreedThisSpecies.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );
      selectedSpecies.doYouRanchThisSpecies = selectedSpecies?.doYouRanchThisSpecies.reduce(
        (acc, current) => ({
          ...acc,
          [Constants[current]]: true,
        }),
        {},
      );

      formData.current = selectedSpecies;
      reset(selectedSpecies);
    },
    [reset],
  );

  return (
    <Container safeAreaViewProps={{edges: ['right', 'bottom', 'left']}}>
      <Header
        leftContent={
          <Icon
            name="chevron-left"
            size={ms(26)}
            onPress={() => {
              if (formFieldsPage > 1) {
                setFormFieldsPage(formFieldsPage - 1);
              } else {
                goBack();
              }
            }}
          />
        }
      />
      <Text style={styles.title}>
        {formatMessage({id: 'screen.FormThree.title'})}
      </Text>
      <Text style={styles.contentOne}>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentOne'})}
        </Text>
        <Text style={styles.word}>
          {formatMessage({id: 'screen.FormThree.contentTwo'})}
        </Text>
      </Text>
      <Text style={styles.contentTwo}>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentThree'})}
        </Text>
        <Text style={styles.word}>
          {formatMessage({id: 'screen.FormThree.contentFour'})}
        </Text>
        <Text style={styles.content}>
          {formatMessage({id: 'screen.FormThree.contentFive'})}
        </Text>
      </Text>
      <Container.ScrollView ref={scrollViewRef} style={CommonStyles.flex1}>
        <View style={styles.formContainer}>
          <Form {...{control, errors}} formFields={formFields} />
          <Button
            onPress={handleSubmit(_handleSubmit, () => scrollToTop())}
            buttonContent={formatMessage({
              id:
                formFieldsPage === 5 ? 'button.saveAndAdd' : 'general.continue',
            })}
          />
          {formFieldsPage === 5 ? (
            <Button
              onPress={() => Alert.alert('Work in progress')}
              buttonContent={formatMessage({id: 'button.viewFormTwoSummary'})}
            />
          ) : null}
          {formFieldsPage === 5 ? (
            <Button
              onPress={() => {
                navigate('StepTwo');
              }}
              buttonContent={formatMessage({id: 'button.continueWithStep2'})}
            />
          ) : null}
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
  },
  content: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15R,
  },
  word: {
    color: RawColors.charcoalGrey60,
    ...Fonts.Lato15B,
  },
  contentTwo: {
    marginBottom: '16@vs',
    padding: '16@ms',
    backgroundColor: RawColors.whiteTwo,
  },
  formContainer: {
    paddingHorizontal: '16@s',
    marginBottom: '24@vs',
  },
});

export default FormThree;
