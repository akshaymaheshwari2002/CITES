import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const formText = 'FORM';
const formNumber = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};
const formTitle = {
  one: 'BACKGROUND INFORMATION',
  two: 'FACILITY INFORMATION',
  three: 'SPECIES INFORMATION',
  notes_1: 'INSPECTION',
  notes_2: 'NOTES + PHOTOS',
};
const facilitySchema = {
  facilityName: 'Facility name: ',
  owner: 'Facility owner/manager: ',
  address: 'Facility address: ',
  citesInformationCode: 'CITES Appendix I captive-breeding code: ',
  establishmentDate: 'Facility date of establishment: ',
  country: 'Country: ',
  facilityContact: 'Facility contact information:',
  email: 'Email ',
  phoneNo: ' Telephone ',
  dateOfInspection: 'Date of inspection: ',
  seniorOfficerName: 'Name of Senior Inspecting Officer: ',
  typeOfInspection: 'Type of inspection: ',
  nationalPermitNumber: 'National permit number: ',
};

const FormOneHeader = ({form = 'one', facilityData = {}, editable = false}) => {
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
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.topContainer}>
          {form !== 'notes' ? (
            <>
              <h1>{formText}</h1>
              <div style={styles.body}>
                <h1 style={styles.number}>{formNumber?.[form]}</h1>
              </div>
            </>
          ) : (
            <h2>
              {formTitle.notes_1}
              <br />
              {formTitle.notes_2}
            </h2>
          )}
        </div>

        {form !== 'notes' ? (
          <h3 style={styles.headText}>{formTitle?.[form]}</h3>
        ) : null}
        <div style={styles.mainContainer}>
          <div style={styles.flex}>
            <div style={styles.halfContent}>
              <p style={styles.text}>
                <b>{facilitySchema?.facilityName}</b>
                {getInputElementConditionally({
                  defaultValue: facilityData?.facilityName,
                  name: 'facilityName',
                })}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.owner}</b>
                {getInputElementConditionally({
                  name: 'facilityOwner',
                  defaultValue: facilityData?.facilityOwner,
                })}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.address}</b>
                {getInputElementConditionally({
                  name: 'facilityAddressLineOne',
                  defaultValue: facilityData?.facilityAddressLineOne,
                  inputSize: 12,
                })}
                {facilityData?.facilityAddressLineTwo && !editable
                  ? ', '
                  : null}
                {getInputElementConditionally({
                  name: 'facilityAddressLineTwo',
                  defaultValue: facilityData?.facilityAddressLineTwo,
                  inputSize: 12,
                })}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.facilityContact}</b>
                <br />
                <b>{facilitySchema?.email}</b>
                {getInputElementConditionally({
                  name: 'facilityOwnerEmail',
                  defaultValue: facilityData?.facilityOwnerEmail,
                  inputSize: 15,
                })}
                <br />
                <span style={styles.whitespace}>
                  <b>{facilitySchema?.phoneNo}</b>
                  {'+'}
                  {getInputElementConditionally({
                    name: 'facilityOwnerPhone_callingCode',
                    defaultValue: facilityData?.facilityOwnerPhone_callingCode,
                    inputSize: 3,
                  })}
                  &nbsp;
                  {getInputElementConditionally({
                    name: 'facilityOwnerPhone_contactNumber',
                    defaultValue:
                      facilityData?.facilityOwnerPhone_contactNumber,
                    inputSize: 15,
                  })}
                </span>
              </p>
            </div>
            <div style={styles.halfContent}>
              <p style={styles.text}>
                <b>{facilitySchema?.citesInformationCode}</b>
                {getInputElementConditionally({
                  name: 'citesInformationCode',
                  defaultValue: facilityData?.citesInformationCode,
                  inputSize: 1,
                })}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.establishmentDate}</b>
                {facilityData?.facilityEstablishmentDate}
                {/* {getInputElementConditionally({
                  name: 'facilityEstablishmentDate',
                  defaultValue: facilityData?.facilityEstablishmentDate,
                  inputSize: 8,
                })} */}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.country}</b>
                {getInputElementConditionally({
                  name: 'country',
                  defaultValue: facilityData?.country,
                })}
              </p>
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
                <b>{facilitySchema?.typeOfInspection}</b>
                {facilityData?.typeOfInspection}
                {/* {getInputElementConditionally({
                  name: 'typeOfInspection',
                  defaultValue: facilityData?.typeOfInspection,
                })} */}
              </p>
              <p style={styles.text}>
                <b>{facilitySchema?.nationalPermitNumber}</b>
                {facilityData?.nationalPermitNumber}
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
    //backgroundColor: 'rgb(239 ,243, 222)',
    //borderRadius: 50,
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
    paddingBottom: 0,
    marginBottom: 0,
    textAlign: 'center',
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
