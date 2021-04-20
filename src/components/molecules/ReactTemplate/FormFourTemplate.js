import React from 'react';

const FormFourTemplate = ({
  form = 'one',
  facilityData = {},
  editable = false,
  outcome = {},
  formFourSchema = {},
  formFourQuestions = {},
  response = {},
  isPrint = false,
}) => {
  const formFourQuestion = [
    {
      question: formFourQuestions?.q1,
      response: response?.legallyRegisteredToBreedAndKeep,
    },
    {
      question: formFourQuestions?.q2,
      response: response?.unusualActivityObserved,
    },
    {
      question: formFourQuestions?.q3,
      response: response?.containmentFacilityAvailable,
    },
    {
      question: formFourQuestions?.q4,
      response: response?.containmentFacilityAdequate,
    },
    {
      question: formFourQuestions?.q5,
      response: response?.recordsMaintainedForExport,
    },
    {
      question: formFourQuestions?.q6,
      response: response?.foodFacilitiesAvailable,
    },
    {
      question: formFourQuestions?.q7,
      response: response?.facilityProductionMatchesEstimates,
    },
    {
      question: formFourQuestions?.q8,
      response: response?.wildOriginSignsShown,
    },
    {
      question: formFourQuestions?.q9,
      response: response?.difficultToBreed,
    },
    {
      question: formFourQuestions?.q10,
      response: response?.facilityEstablishedLongEnough,
    },
    {
      question: formFourQuestions?.q11,
      response: response?.haveIdentificationMark,
    },
  ];

  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.container}>
          <div style={styles.table}>
            {formFourQuestion?.map((data, index) => {
              return (
                <div
                  key={index}
                  style={
                    index % 2 === 0
                      ? isPrint
                        ? styles.evenRowPrint
                        : styles.evenRow
                      : styles.oddRow
                  }>
                  <p style={styles.width70}>{data?.question}</p>
                  <div style={styles.marginTop5}>
                    <input
                      type="checkbox"
                      defaultChecked={data?.response === false ? true : false}
                    />
                  </div>
                  <p style={styles.yesNoText}>No(0)</p>
                  <div style={styles.marginTop5}>
                    <input
                      type="checkbox"
                      defaultChecked={data?.response === true ? true : false}
                    />
                  </div>
                  <p style={styles.yesNoText}>Yes(1)</p>
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.flexBox}>
          <div style={isPrint ? styles.flex1Print : styles.flex1}>
            <p style={styles.headingText}>
              <b>{formFourSchema?.falicityScore}</b>
              <b> {response?.totalScore}</b>
            </p>
            <p style={styles.inputText}>{formFourSchema?.facilitydetails}</p>
          </div>
          <div style={isPrint ? styles.flex2Print : styles.flex2}>
            <div style={styles.row1}>
              <p style={styles.headingText1}>
                <b>{formFourSchema?.inspectionOutcome}</b>
              </p>
              <div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={response?.totalScore > 11 ? true : false}
                  />
                  <p style={styles.outcomeText}>{outcome?.result1}</p>
                </div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={
                      response?.totalScore > 8 && response?.totalScore > 11
                        ? true
                        : false
                    }
                  />
                  <p style={styles.outcomeText}>{outcome?.result2}</p>
                </div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={response?.totalScore < 8 ? true : false}
                  />
                  <p style={styles.outcomeText}>{outcome?.result3}</p>
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
  table: {
    display: 'table',
    width: '100%',
    borderWidth: 1.5,
    border: '1.5px solid',
  },
  flexBox: {
    display: 'flex',
    marginTop: 16,
  },
  flex1: {
    flex: 1,
    marginRight: 5,
    borderWidth: 2,
    border: '2px solid',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  flex1Print: {
    flex: 1,
    marginRight: 5,
    borderWidth: 2,
    border: '2px solid',
    backgroundColor: 'white',
  },
  flex2: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 2,
    border: '2px solid',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  flex2Print: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 2,
    border: '2px solid',
    backgroundColor: 'white',
  },
  evenRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 20,
    width: '100%',
    backgroundColor: 'rgba(239 ,243, 222,0.7)',
  },
  evenRowPrint: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  oddRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 20,
    width: '100%',
    backgroundColor: 'rgba(239 ,243, 222,0.2)',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 20,
    width: '100%',
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  rowInput: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 2,
    marginBottom: 2,
  },
  headingText: {
    fontSize: 14,
    paddingLeft: 5,
    marginBottom: 5,
    paddingBottom: 0,
  },
  headingText1: {
    fontSize: 14,
    paddingLeft: 5,
    width: '60%',
  },
  yesNoText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
  },
  outcomeText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 12,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  marginTop5: {
    marginTop: 5,
  },
  width70: {
    width: '70%',
    textAlign: 'left',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },
  marginContainer: {marginRight: 16, marginLeft: 16, marginBottom: 16},
  inputText: {
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 5,
  },
  inputStyle: {
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
};

export default FormFourTemplate;
