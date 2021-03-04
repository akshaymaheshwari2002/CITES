import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form';
import {ScaledSheet} from 'react-native-size-matters';

import {TextInput, Picker} from '@atoms';
import {TextInputArray, DatePicker, Counter} from '@molecules';
import ChoiceList from './ChoiceList';
import Constants from '@utils/Constants';

const Form = (formProps) => {
  const {control, formFields, errors} = useMemo(() => formProps, [formProps]);

  const renderField = useCallback(
    ({fieldType, fieldContainerStyle, ...props}) => {
      let FieldComponent;

      switch (fieldType) {
        case Constants.DATEPICKER:
          FieldComponent = DatePicker;
          break;
        case Constants.PICKER:
          FieldComponent = Picker;
          break;
        case Constants.TEXTINPUT_ARRAY:
          FieldComponent = TextInputArray;
          break;
        case Constants.CHOICELIST:
          FieldComponent = ChoiceList;
          break;
        case Constants.COUNTER:
          FieldComponent = Counter;
          break;
        default:
          FieldComponent = TextInput;
          break;
      }

      return (
        <View style={[styles.fieldContainer, fieldContainerStyle]}>
          <FieldComponent {...props} />
        </View>
      );
    },
    [],
  );

  const renderController = useCallback(
    ({name, defaultValue, onFocus, rules, ...fieldProps}) => {
      return (
        <Controller
          key={name}
          name={name}
          control={control}
          defaultValue={defaultValue || ''}
          rules={typeof rules === 'function' ? rules(formProps) : rules}
          onFocus={onFocus}
          render={(controllerProps) =>
            renderField({
              ...fieldProps,
              ...controllerProps,
              error: errors[name]?.message,
            })
          }
        />
      );
    },
    [control, errors, formProps, renderField],
  );

  return useMemo(() => formFields.map(renderController), [
    formFields,
    renderController,
  ]);
};

Form.propTypes = {
  formFields: PropTypes.array,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object,
  formProps: PropTypes.object,
};

Form.defaultProps = {
  formFields: [],
  control: {},
  errors: {},
  formProps: {},
};

const styles = ScaledSheet.create({
  fieldContainer: {
    marginBottom: '42@vs',
  },
});

export default Form;
