import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const formNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

const FormThreeHeader = ({
  form = 'one',
  facilityData = {},
  editable = false,
  formText = {},
  formTitle = {},
  facilitySchema = {},
  isPrint = false,
}) => {
  const getInputElementConditionally = ({name, defaultValue, inputSize}) => {
    return editable
      ? getInputFieldElement({
          name,
          defaultValue,
          inputSize,
        })
      : facilityData?.[name];
  };

  return (
    <div className="App" style={styles.marginContainer}>
      <div style={styles.topContainer}>
        <h1>{formText?.formText}</h1>
        <div style={styles.body}>
          <h1 style={styles.number}>{formNumber?.[form]}</h1>
        </div>
      </div>

      <h3 style={styles.headText}>{formTitle?.[form]}</h3>
      <div style={isPrint ? styles.mainContainerPrint : styles.mainContainer}>
        <div style={styles.flex}>
          <div style={styles.halfContent}>
            <p style={styles.text}>
              <b>{facilitySchema?.dateOfInspection}</b>
              {facilityData?.dateOfInspection}
              {/* {getInputElementConditionally({
                  name: 'dateOfInspection',
                  defaultValue: facilityData?.dateOfInspection,
                  inputSize: 8,
                })} */}
            </p>
            <p style={styles.text}>
              <b>{facilitySchema?.facilityName}</b>
              {getInputElementConditionally({
                defaultValue: facilityData?.facilityName ?? '',
                name: 'facilityName',
              })}
            </p>
          </div>
          <div style={styles.halfContent}>
            <p style={styles.text}>
              <b>{facilitySchema?.seniorOfficerName}</b>
              {getInputElementConditionally({
                defaultValue: facilityData?.seniorOfficerName,
                name: 'seniorOfficerName',
              })}
            </p>
            <p style={styles.text}>
              <b>{facilitySchema?.speciesName}</b>
              {getInputElementConditionally({
                defaultValue: facilityData?.speciesName,
                name: 'speciesName',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  marginContainer: {marginRight: 16, marginLeft: 16, marginBottom: 12},
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '50',
    paddingBottom: 0,
    marginBottom: 0,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 12,
  },
  headText: {
    paddingTop: 0,
    marginTop: 0,
    paddingLeft: '50',
    textAlign: 'left',
  },
  number: {
    textAlignVertical: 'top',
    paddingBottom: 0,
    marginBottom: 0,
    textAlign: 'center',
  },
  text: {textAlign: 'left', fontSize: 12},
  mainContainer: {
    border: '2px solid',
    borderWidth: '2px',
    width: '100%',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  mainContainerPrint: {
    border: '2px solid',
    borderWidth: '2px',
    width: '100%',
    backgroundColor: 'white',
  },
  flex: {display: 'flex', flexDirection: 'row'},
  halfContent: {width: '50%', paddingLeft: 5, paddingRight: 5},
};

export default FormThreeHeader;
