import React from 'react';

const FormOneHeader = ({form = 'one', facilityData = {}}) => {
  const formText = 'Form';
  const formNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  };
  const formTitle = {
    one: 'BACKGROUND INFORMATION',
    two: 'FACILITY INFORMATION',
  };
  const facilitySchema = {
    facilityName: 'Facility name: ',
    owner: 'Facility Owner/Manager: ',
    address: 'Facility address: ',
    capativeBreedingCode:
      'CITES Register of Capitative-breeding information code: ',
    establishmentDate: 'Facility Date of Establishment: ',
    country: 'Country: ',
    facilityContact: 'Facility Contact Information:',
    email: 'Email ',
    phoneNo: ' Telephone ',
    dateOfInspection: 'Date of Inspection: ',
    seniorOfficerName: 'Name of Senior Inspecting Officer: ',
    typeOfInspection: 'Type of Inspection: ',
  };

  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.topContainer}>
          <h1>{formText}</h1>
          <div style={styles.body}>
            <h1 style={styles.number}>{formNumber?.[form]}</h1>
          </div>
        </div>

        <h3 style={styles.headText}>{formTitle?.[form]}</h3>
        <div style={styles.mainContainer}>
          <div style={styles.flex}>
            <div style={styles.halfContent}>
              <p style={styles.text}>
                <b>{facilitySchema?.facilityName}</b>
                {facilityData?.facilityName}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.owner}</b> {facilityData?.facilityOwner}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.address}</b>
                {`${facilityData?.facilityAddressLineOne} ${
                  facilityData?.facilityAddressLineTwo
                    ? ', ' + facilityData?.facilityAddressLineTwo
                    : ''
                }`}
              </p>
              <p style={styles.text}>
                <b>
                  {facilitySchema?.facilityContact}
                  <br />
                  {facilitySchema?.email}
                  {}
                </b>
                {facilityData?.facilityOwnerEmail}
                <span style={styles.whitespace}>
                  <b>{facilitySchema?.phoneNo}</b>
                  {facilityData?.facilityOwnerPhone}
                </span>
              </p>
            </div>
            <div style={styles.halfContent}>
              <p style={styles.text}>
                <b>{facilitySchema?.capativeBreedingCode}</b>
                {facilityData?.capativeBreedingCode}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.establishmentDate}</b>
                {facilityData?.facilityEstablishmentDate}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.country}</b>
                {facilityData?.facilityAddressLineThree}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.dateOfInspection}</b>
                {facilityData?.dateOfInspection}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.typeOfInspection}</b>
                {facilityData?.typeOfInspection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  marginContainer: {marginRight: 16, marginLeft: 16, marginBottom: 16},
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    paddingLeft: '50',
    paddingBottom: 0,
    marginBottom: 0,
  },
  body: {
    backgroundColor: 'rgb(239 ,243, 222)',
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 0,
  },
  headText: {
    paddingTop: 0,
    marginTop: 0,
    paddingLeft: '50',
    textAlign: 'left',
  },
  number: {
    color: 'red',
    paddingBottom: 0,
    marginBottom: 0,
  },
  text: {textAlign: 'left'},
  mainContainer: {
    border: '2px solid',
    borderWidth: '2px',
    width: '100%',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  flex: {display: 'flex', flexDirection: 'row'},
  halfContent: {width: '50%', paddingLeft: 5, paddingRight: 5},
  lastText: {
    textAlign: 'left',
    paddingLeft: 5,
    paddingRight: 5,
  },
  whiteSpace: {whiteSpace: 'nowrap'},
};

export default FormOneHeader;
