import React from 'react';

import Constants from '@utils/Constants';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const formTwoLabels = {
  noOfStaff: 'How many staff currently employed at the Facility: ',
  noOfPartTime: 'Part Time',
  noOfFullTime: 'Full Time',
  isVeterinaryServices:
    'Does the Operation have access to professional veterinary services?',
  ifYesVeterinaryServices: 'If yes,what is name and address of vet?',
  ifYesOtherLocation: 'If yes,what is address of location(s)?',
  otherLocation: 'Are animals keet at other location(s)?',
  yes: Constants.YES,
  no: Constants.NO,
};

const FormTwoTemplate = ({formTwoData = {}, editable = false}) => {
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
        <div style={styles.container}>
          <div style={styles.table}>
            <div style={styles.paddingContainer}>
              <p style={styles.text}>
                <b>{formTwoLabels?.noOfStaff}</b>
              </p>
              <div style={styles.rowWithMargin}>
                <p>{formTwoLabels?.noOfPartTime}</p>
                <p style={styles.inputText}>
                  {getInputElementConditionally({
                    name: 'formTwo.staffHours.partTimeStaffs',
                    defaultValue: formTwoData?.staffHours?.partTimeStaffs ?? '',
                    inputSize: 15,
                    type: 'number',
                    alt: formTwoData?.staffHours?.partTimeStaffs ?? '',
                  })}
                </p>
              </div>
              <div style={styles.rowWithMargin}>
                <p>{formTwoLabels?.noOfFullTime}</p>
                <p style={styles.inputText}>
                  {getInputElementConditionally({
                    name: 'formTwo.staffHours.fullTimeStaffs',
                    defaultValue: formTwoData?.staffHours?.fullTimeStaffs ?? '',
                    inputSize: 15,
                    type: 'number',
                    alt: formTwoData?.staffHours?.fullTimeStaffs ?? '',
                  })}
                </p>
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
                      {formTwoLabels?.yes}
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
                      {formTwoLabels?.no}
                    </label>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoLabels?.ifYesVeterinaryServices}</p>
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
                      {formTwoLabels?.yes}
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
                      {formTwoLabels?.no}
                    </label>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoLabels?.ifYesOtherLocation}</p>
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
};

export default FormTwoTemplate;
