import React from 'react';
import Constants from '@utils/Constants';

import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';
import {RawColors} from '@styles/Themes';

const FormTwoTemplate = ({
  formTwoData = {},
  editable = false,
  formTwoLabels = {},
  isPrint = false,
}) => {
  const getInputElementConditionally = ({
    name,
    defaultValue,
    inputSize,
    type,
    checked,
    id,
    alt = '',
  }) => {
    return editable
      ? getInputFieldElement({
          name,
          defaultValue,
          inputSize,
          type,
          checked,
          id,
        })
      : alt;
  };

  return (
    <div className="App">
      <div className="App" style={styles.box}>
        <div style={isPrint ? styles.containerPrint : styles.container}>
          <div style={styles.table}>
            <div style={styles.paddingContainer}>
              <p style={styles.text}>
                <b>{formTwoLabels?.noOfStaff}</b>
              </p>
              <div style={styles.rowWithMargin}>
                <div>{formTwoLabels?.noOfPartTime}</div>
                <div style={styles.inputText}>
                  {getInputElementConditionally({
                    name: 'formTwo.staffHours.partTimeStaffs',
                    defaultValue: formTwoData?.staffHours?.partTimeStaffs ?? '',
                    inputSize: 15,
                    type: 'number',
                    alt: formTwoData?.staffHours?.partTimeStaffs ?? '',
                  })}
                </div>
              </div>
              &nbsp;
              <div style={styles.rowWithMargin}>
                <div>{formTwoLabels?.noOfFullTime}</div>
                <div style={styles.inputText}>
                  {getInputElementConditionally({
                    name: 'formTwo.staffHours.fullTimeStaffs',
                    defaultValue: formTwoData?.staffHours?.fullTimeStaffs ?? '',
                    inputSize: 15,
                    type: 'number',
                    alt: formTwoData?.staffHours?.fullTimeStaffs ?? '',
                  })}
                </div>
              </div>
              <p style={styles.text}>
                <b>{formTwoLabels?.isVeterinaryServices}</b>
              </p>
              <div style={styles.row}>
                <div>
                  <div style={styles.rowForCheckBox}>
                    {getInputElementConditionally({
                      name: 'formTwo.accessToVeterinaryServices',
                      checked:
                        formTwoData?.accessToVeterinaryServices?.[0] ===
                          Constants.YES ?? false,
                      defaultValue: Constants.YES,
                      inputSize: 15,
                      type: 'radio',
                      id: 'formTwo.accessToVeterinaryServices.yes',
                      alt: (
                        <input
                          type="checkbox"
                          defaultChecked={
                            formTwoData?.accessToVeterinaryServices?.[0] ===
                              Constants.YES ?? false
                          }
                        />
                      ),
                    })}
                    <label
                      htmlFor={'formTwo.accessToVeterinaryServices.yes'}
                      style={styles.marginText}>
                      {formTwoLabels?.[Constants.YES]}
                    </label>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    {getInputElementConditionally({
                      name: 'formTwo.accessToVeterinaryServices',
                      checked:
                        formTwoData?.accessToVeterinaryServices?.[0] ===
                          Constants.NO ?? false,
                      defaultValue: Constants.NO,
                      inputSize: 15,
                      type: 'radio',
                      id: 'formTwo.accessToVeterinaryServices.no',
                      alt: (
                        <input
                          type="checkbox"
                          defaultChecked={
                            formTwoData?.accessToVeterinaryServices?.[0] ===
                              Constants.NO ?? false
                          }
                        />
                      ),
                    })}
                    <label
                      htmlFor={'formTwo.accessToVeterinaryServices.no'}
                      style={styles.marginText}>
                      {formTwoLabels?.[Constants.NO]}
                    </label>
                  </div>
                </div>
                <div style={styles.marginLeft}>
                  {formTwoLabels?.ifYesVeterinaryServices}
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {getInputElementConditionally({
                      name: 'formTwo.veterinarianName',
                      defaultValue: formTwoData?.veterinarianName,
                      inputSize: 15,
                      alt: formTwoData?.veterinarianName ?? '',
                    })}
                  </p>
                  <p style={styles.inputText}>
                    {getInputElementConditionally({
                      name: 'formTwo.veterinarianAddress',
                      defaultValue: formTwoData?.veterinarianAddress,
                      inputSize: 15,
                      alt: formTwoData?.veterinarianAddress ?? '',
                    })}
                    &nbsp;
                    {getInputElementConditionally({
                      name: 'formTwo.veterinarianCountry',
                      defaultValue: formTwoData?.veterinarianCountry,
                      inputSize: 15,
                      alt: formTwoData?.veterinarianCountry ?? '',
                    })}
                  </p>
                </div>
              </div>
              <p style={styles.text}>
                <b>{formTwoLabels?.otherLocation}</b>
              </p>
              <div style={styles.row}>
                <div>
                  <div style={styles.rowForCheckBox}>
                    {getInputElementConditionally({
                      name: 'formTwo.animalKeptAtOtherLocation',
                      checked:
                        formTwoData?.animalKeptAtOtherLocation?.[0] ===
                          Constants.YES ?? false,
                      defaultValue: Constants.YES,
                      inputSize: 15,
                      type: 'radio',
                      id: 'formTwo.animalKeptAtOtherLocation.yes',
                      alt: (
                        <input
                          type="checkbox"
                          defaultChecked={
                            formTwoData?.animalKeptAtOtherLocation?.[0] ===
                              Constants.YES ?? false
                          }
                        />
                      ),
                    })}
                    <label
                      htmlFor={'formTwo.animalKeptAtOtherLocation.yes'}
                      style={styles.marginText}>
                      {formTwoLabels?.[Constants.YES]}
                    </label>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    {getInputElementConditionally({
                      name: 'formTwo.animalKeptAtOtherLocation',
                      checked:
                        formTwoData?.animalKeptAtOtherLocation?.[0] ===
                          Constants.NO ?? false,
                      defaultValue: Constants.NO,
                      inputSize: 15,
                      type: 'radio',
                      id: 'formTwo.animalKeptAtOtherLocation.no',
                      alt: (
                        <input
                          type="checkbox"
                          defaultChecked={
                            formTwoData?.animalKeptAtOtherLocation?.[0] ===
                              Constants.NO ?? false
                          }
                        />
                      ),
                    })}
                    <label
                      htmlFor={'formTwo.animalKeptAtOtherLocation.no'}
                      style={styles.marginText}>
                      {formTwoLabels?.[Constants.NO]}
                    </label>
                  </div>
                </div>
                <div style={styles.marginLeft}>
                  {formTwoLabels?.ifYesOtherLocation}
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {getInputElementConditionally({
                      name: 'formTwo.addressOfOtherAnimals.0',
                      defaultValue: formTwoData?.addressOfOtherAnimals?.[0],
                      inputSize: 30,
                      alt: formTwoData?.addressOfOtherAnimals?.[0] ?? '',
                    })}
                  </p>
                  <p style={styles.inputText}>
                    &nbsp;
                    {getInputElementConditionally({
                      name: 'formTwo.addressOfOtherAnimals.1',
                      defaultValue: formTwoData?.addressOfOtherAnimals?.[1],
                      inputSize: 30,
                      alt: formTwoData?.addressOfOtherAnimals?.[1] ?? '',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  box: {
    marginRight: 16,
    marginLeft: 16,
  },
  container: {
    width: '100%',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  containerPrint: {
    width: '100%',
    backgroundColor: 'white',
  },
  paddingContainer: {
    padding: 10,
  },
  halfContainer: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    textAlign: 'left',
  },
  inputText: {
    marginLeft: 20,
    minWidth: 50,
    textAlign: 'left',
    borderBottom: '1px dashed',
    color: RawColors.black,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: '100%',
    borderWidth: 2,
    border: '2px solid',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  rowForCheckBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWithMargin: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 50,
  },
  marginText: {
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  marginLeft: {
    marginLeft: 10,
  },
};

export default FormTwoTemplate;
