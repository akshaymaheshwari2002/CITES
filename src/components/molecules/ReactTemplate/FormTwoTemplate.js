import React from 'react';

import Constants from '@utils/Constants';

const FormTwoTemplate = ({formTwoData = {}}) => {
  const formTwoSchema = {
    noOfStaff: 'How many staff currently employed at the Facility: ',
    noOfPartTime: 'Part Time',
    noOfFullTime: 'Full Time',
    isVeterinaryServices:
      'Does the Operation have access to professional veterinary services?',
    ifYesVeterinaryServices: 'If yes,what is name and address of vet?',
    ifYesOtherLocation: 'If yes,what is address of location(s)?',
    otherLocation: 'Are animals keet at other location(s)?',
    yes: 'Yes',
    no: 'No',
  };

  return (
    <div className="App">
      <div className="App" style={styles.box}>
        <div style={styles.container}>
          <div style={styles.table}>
            <div style={styles.paddingContainer}>
              <p style={styles.text}>
                <b>{formTwoSchema?.noOfStaff}</b>
              </p>
              <div style={styles.rowWithMargin}>
                <p>{formTwoSchema?.noOfPartTime}</p>
                <p style={styles.inputText}>
                  {formTwoData?.staffHours?.partTimeStaffs ?? ''}
                </p>
              </div>
              <div style={styles.rowWithMargin}>
                <p>{formTwoSchema?.noOfFullTime}</p>
                <p style={styles.inputText}>
                  {formTwoData?.staffHours?.fullTimeStaffs ?? ''}
                </p>
              </div>
              <p style={styles.text}>
                <b>{formTwoSchema?.isVeterinaryServices}</b>
              </p>
              <div style={styles.row}>
                <div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        formTwoData?.accessToVeterinaryServices?.[0] ===
                          Constants.YES ?? false
                      }
                    />
                    <p style={styles.marginText}>{formTwoSchema?.yes}</p>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        formTwoData?.accessToVeterinaryServices?.[0] ===
                          Constants.NO ?? false
                      }
                    />
                    <p style={styles.marginText}>{formTwoSchema?.no}</p>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoSchema?.ifYesVeterinaryServices}</p>
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {formTwoData?.veterinarianName ?? ''}
                  </p>
                  <p style={styles.inputText}>
                    {(formTwoData?.veterinarianAddress ?? '') +
                      (formTwoData?.veterinarianCountry ?? '')}
                  </p>
                </div>
              </div>

              <p style={styles.text}>
                <b>{formTwoSchema?.otherLocation}</b>
              </p>
              <div style={styles.row}>
                <div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        formTwoData?.animalKeptAtOtherLocation?.[0] ===
                          Constants.YES ?? false
                      }
                    />
                    <p style={styles.marginText}>{formTwoSchema?.yes}</p>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        formTwoData?.animalKeptAtOtherLocation?.[0] ===
                          Constants.NO ?? false
                      }
                    />
                    <p style={styles.marginText}>{formTwoSchema?.no}</p>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoSchema?.ifYesOtherLocation}</p>
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {formTwoData?.addressOfOtherAnimals?.[0] ?? ''}
                  </p>
                  <p style={styles.inputText}>
                    {formTwoData?.addressOfOtherAnimals?.[1] ?? ''}
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
