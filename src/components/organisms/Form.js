import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Controller} from 'react-hook-form';

import {TextInput, DatePicker} from '@atoms';
import Constants from '@utils/Constants';

const Form = ({control, formFields, errors, formProps}) => {
  const renderField = useCallback(({fieldType, ...props}) => {
    let FieldComponent;

    switch (fieldType) {
      case Constants.DATEPICKER:
        FieldComponent = DatePicker;
        break;
      default:
        FieldComponent = TextInput;
        break;
    }

    return (
      <View style={styles.fieldContainer}>
        <FieldComponent {...props} />
      </View>
    );
  }, []);

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

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 42,
  },
});

export default Form;
