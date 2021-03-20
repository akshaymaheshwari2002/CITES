import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

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
  three: 'SPECIES INFORMATION',
};
const facilitySchema = {
  facilityName: 'Facility name: ',
  owner: 'Facility owner/manager: ',
  address: 'Facility address: ',
  citesInformationCode:
    'CITES register of capitative-breeding information code: ',
  establishmentDate: 'Facility date of establishment: ',
  country: 'Country: ',
  facilityContact: 'Facility contact information:',
  email: 'Email ',
  phoneNo: ' Telephone ',
  dateOfInspection: 'Date of inspection: ',
  seniorOfficerName: 'Name of Senior Inspecting Officer: ',
  typeOfInspection: 'Type of inspection: ',
};
const formThreeSchema = {
  firstAcquired: '*Date Species first Acquired?',
  sourceAndStock: 'Source and life-stage of initial stock?',
  numberOfStock: 'Number of intial stock and sexes? if known ',
  males: ' Males? ',
  females: 'Females? ',
  additionalStock:
    '*Have additional animals been obtained since you acquired initial stock? if so, from where?',
  isSpeciesBreed: 'Do you BREED these species?',
  startTime: 'When did you start breeding?',
  litter: '# litter/clutches per year?',
  offspring: '# offspring/eggs per year?',
  prevYear: '# Produced in previous year?',
  isRanchSpecies: 'Do you RANCH these species?',
  harvested: 'What life stage(s) is harvested?',
  prevHarvested: '# harvested in previous year?',
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
          <h1>{formText}</h1>
          <div style={styles.body}>
            <h1 style={styles.number}>{formNumber?.[form]}</h1>
          </div>
        </div>

        <h3 style={styles.headText}>{formTitle?.[form]}</h3>
        <div style={styles.row}>
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
                      defaultValue:
                        facilityData?.facilityOwnerPhone_callingCode,
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
              </div>
            </div>
          </div>
          <div style={styles.secondHalf}>
            <div style={styles.border}>
              <div style={styles.row}>
                <div style={styles.textContainer}>
                  <p style={styles.text1}>{formThreeSchema?.firstAcquired}</p>
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                    }}>
                    <p style={styles.underlinedText}>12/05/20</p>
                  </div>
                </div>
                <div style={styles.textContainer}>
                  <p style={styles.text2}>{formThreeSchema?.sourceAndStock}</p>
                  <div>
                    <p style={styles.underlinedText}>sources two </p>
                  </div>
                </div>
              </div>
              <div style={styles.row}>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.numberOfStock}</p>
                  <div>
                    <p style={styles.underlinedText}>120520</p>
                  </div>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={styles.textContainer2}>
                  <p
                    style={{
                      fontSize: 12,
                      flexDirection: 'row',
                      alignSelf: 'center',
                    }}>
                    {formThreeSchema?.males}
                  </p>
                  <div>
                    <p style={styles.underlinedText1}>100000</p>
                  </div>
                </div>
                <div style={styles.textContainer2}>
                  <p
                    style={{
                      fontSize: 12,
                      flexDirection: 'row',
                      alignSelf: 'center',
                    }}>
                    {formThreeSchema?.females}
                  </p>
                  <div>
                    <p style={styles.underlinedText1}>20520</p>
                  </div>
                </div>
              </div>
              <p style={{fontSize: 12}}>{formThreeSchema?.additionalStock}</p>
              <p style={styles.underlinedText}>123 Charming Avenue Newyork</p>
            </div>
            <div style={styles.row1}>
              <div style={styles.border50}>
                <div style={styles.row}>
                  <p style={styles.texts}>{formThreeSchema?.isSpeciesBreed}</p>
                  <p style={styles.texts}>Yes</p>
                  <input type="checkbox" defaultChecked={true} />
                  <p style={styles.texts}>No</p>
                  <input type="checkbox" defaultChecked={false} />
                </div>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.startTime}</p>
                  <div>
                    <p style={styles.underlinedText}>12/05/20</p>
                  </div>
                </div>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.litter}</p>
                  <div>
                    <p style={styles.underlinedText}>12050</p>
                  </div>
                </div>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.offspring}</p>
                  <div>
                    <p style={styles.underlinedText}>1220</p>
                  </div>
                </div>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.prevYear}</p>
                  <div>
                    <p style={styles.underlinedText}>12020</p>
                  </div>
                </div>
              </div>
              <div style={styles.border50A}>
                <div style={styles.row}>
                  <p style={styles.texts}>{formThreeSchema?.isRanchSpecies}</p>
                  <p style={styles.texts}>Yes</p>
                  <input type="checkbox" defaultChecked={true} />
                  <p style={styles.texts}>No</p>
                  <input type="checkbox" defaultChecked={false} />
                </div>
                {/* <div style={styles.row}> */}
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.harvested}</p>
                  <div>
                    <p style={styles.underlinedText}>120520</p>
                  </div>
                </div>
                <div style={styles.textContainer1}>
                  <p style={styles.text1}>{formThreeSchema?.prevHarvested}</p>
                  <div>
                    <p style={styles.underlinedText}>120520</p>
                  </div>
                  {/* </div> */}
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
    border: '1px solid',
    borderWidth: '1px',
    width: '40%',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  flex: {display: 'flex', flexDirection: 'row'},
  halfContent: {width: '100%', paddingLeft: 5, paddingRight: 5},
  lastText: {
    textAlign: 'left',
    paddingLeft: 5,
    paddingRight: 5,
  },
  whiteSpace: {whiteSpace: 'nowrap'},
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  secondHalf: {
    marginLeft: 5,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  border: {
    border: '1px solid',
    borderWidth: '1px',
    width: '100%',
    backgroundColor: 'rgb(239 ,243, 222)',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  border50: {
    border: '1px solid',
    borderWidth: '1px',
    width: '47%',
    backgroundColor: 'rgb(239 ,243, 222)',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
    marginRight: 5,
  },
  border50A: {
    border: '1px solid',
    borderWidth: '1px',
    width: '47%',
    backgroundColor: 'rgb(239 ,243, 222)',
    paddingLeft: 5,
    paddingRight: 5,
    // display: 'flex',
    marginBottom: 5,
    // marginLeft: '6%',
  },

  rowWithMargin: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 50,
  },
  inputText: {
    marginLeft: 2,
    minWidth: 50,
    textAlign: 'left',
    borderBottom: '1px dashed',
  },
  underlinedText: {
    textAlign: 'left',
    borderBottom: '1px dashed',
    fontSize: 12,
    marginLeft: 5,
    display: 'flex',
    alignSelf: 'flex-end',
    flex: 1,
  },
  underlinedText1: {
    textAlign: 'left',
    border: '0.5px solid',
    borderWidth: 0.5,
    fontSize: 12,
    flex: 1,
    display: 'flex',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  textContainer: {
    width: '50%',
    flexDirection: 'row',
    // display: 'flex',
  },
  textContainer1: {
    // width: '60%',
    flexDirection: 'row',
    display: 'flex',
  },
  textContainer2: {
    flexDirection: 'row',
    display: 'flex',
  },
  texts: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 12,
    // display: 'flex',
    flexWrap: 'wrap',
  },
  text2: {
    // flex: 1,
    marginLeft: 10,
    fontSize: 12,
    flexWrap: 'wrap',
    // display: 'flex',
  },
};

export default FormOneHeader;
