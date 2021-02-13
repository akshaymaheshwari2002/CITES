import React from 'react';

const FormOneHeader = ({form = 'one'}) => {
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
  const facilityData = {
    facilityName: 'PD new Bardana Arwana',
    owner: 'mr. Subhandi Tju',
    address:
      '6th Floor, Metropolis Mall, Industrial Area, Hisar, Haryana 125005',
    capativeBreedingCode: 'A-ID-588',
    establishmentDate: '03/03/2016',
    country: 'India',
    facilityContact: {email: 'abc@gmail.com', phoneNo: '+919555577721'},
    dateOfInspection: '10/2/2021',
    seniorOfficerName: 'Mr. Puneet Kumar Rohtela',
    typeOfInspection: 'Routine',
  };
  const facilitySchema = {
    facilityName: 'Facility name: ',
    owner: 'Facility Owner/Manager: ',
    address: 'Facility address: ',
    capativeBreedingCode:
      'CITES Register of Capitative-breeding information code: ',
    establishmentDate: 'Facility Date of Establishment: ',
    country: 'Country: ',
    facilityContact: {
      email: 'Facility Contact Information:email ',
      phoneNo: 'Telephone ',
    },
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
                <b>{facilitySchema?.owner}</b> {facilityData?.owner}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.address}</b> {facilityData?.address}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.facilityContact?.email}</b>
                {facilityData?.facilityContact?.email}
                <b>{facilitySchema?.facilityContact?.phoneNo}</b>
                {facilityData?.facilityContact?.phoneNo}
              </p>
            </div>
            <div style={styles.halfContent}>
              <p style={styles.text}>
                <b>{facilitySchema?.capativeBreedingCode}</b>
                {facilityData?.capativeBreedingCode}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.establishmentDate}</b>
                {facilityData?.establishmentDate}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.country}</b> {facilityData?.country}
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
};

export default FormOneHeader;
