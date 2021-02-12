import React from 'react';

const FormOneTemplate = () => {
  const formTwoSchema = {
    noOfStaff: 'How many staff currently employed at the Facility: ',
    noOfPartTime: 'Part Time',
    noOfFullTime: 'Full Time',
    isVeterinaryServices:
      'Does the Operation have access to professional veterinary services?',
    ifYesVeterinaryServices: 'If yes,what is name and address of vet?',
    ifYesOtherLocation:
      'If yes,what is address of location(s)? Set a reminder to inspect these location(s).',
    otherLocation: 'Are animals keet at other location(s)?',
    yes: 'Yes',
    no: 'No',
  };

  const formTwoData = {
    noOfStaff: '50',
    noOfPartTime: '20',
    noOfFullTime: '30',
    isVeterinaryServices: true,
    veterinaryServicesName: 'Precise Vet Services',
    veterinaryServicesAddress:
      '6th Floor, Metropolis Mall, Industrial Area, Hisar, Haryana 125005',
    isOtherLocation: false,
    otherLocationOne:
      '6th Floor, Metropolis Mall, Industrial Area, Hisar, Haryana 125005',
    otherLocationTwo: '',
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
                <p style={styles.inputText}>{formTwoData?.noOfPartTime}</p>
              </div>
              <div style={styles.rowWithMargin}>
                <p>{formTwoSchema?.noOfFullTime}</p>
                <p style={styles.inputText}>{formTwoData?.noOfFullTime}</p>
              </div>
              <p style={styles.text}>
                <b>{formTwoSchema?.isVeterinaryServices}</b>
              </p>
              <div style={styles.row}>
                <div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={formTwoData?.isVeterinaryServices}
                    />
                    <p style={styles.marginText}>{formTwoSchema?.yes}</p>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={!formTwoData?.isVeterinaryServices}
                    />
                    <p style={styles.marginText}>{formTwoSchema?.no}</p>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoSchema?.ifYesVeterinaryServices}</p>
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {formTwoData?.veterinaryServicesName}
                  </p>
                  <p style={styles.inputText}>
                    {formTwoData?.veterinaryServicesAddress}
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
                      defaultChecked={formTwoData?.isOtherLocation}
                    />
                    <p style={styles.marginText}>{formTwoSchema?.yes}</p>
                  </div>
                  <div style={styles.rowForCheckBox}>
                    <input
                      type="checkbox"
                      defaultChecked={!formTwoData?.isOtherLocation}
                    />
                    <p style={styles.marginText}>{formTwoSchema?.no}</p>
                  </div>
                </div>
                <div style={styles.halfContainer}>
                  <p>{formTwoSchema?.ifYesOtherLocation}</p>
                </div>
                <div style={styles.inputContainer}>
                  <p style={styles.inputText}>
                    {formTwoData?.otherLocationOne}
                  </p>
                  <p style={styles.inputText}>
                    {formTwoData?.otherLocationTwo}
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

export default FormOneTemplate;
