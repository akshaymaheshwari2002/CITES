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
const formFourQuestions = [
  {
    question:
      '1.Is the Facility registered to keep and breed all of the species observed during inspection?',
  },
  {question: '2.Was unsual activity observed during the inspection?'},
  {
    question:
      '3.Does the Facility have housing facility suitable for the species and life stages in question? etc.',
  },
  {
    question:
      '4.Are housing/containment facility adequate and/or suitable for the reported annual production levels and stocks of speciemens held in capitivity?',
  },
  {
    question:
      '5.Does the facility keep up-to-date records on specimens of the species being exported?',
  },
  {
    question:
      '6.Is there suitable facility for production and/or storage and/or preparation of appropriate food for specimen being raised?',
  },
  {
    question:
      '7.Is the production output same as estimated production output(from number of parental stock;#males,#females,#juveniles)?',
  },
  {
    question:
      '8.Do the specimens in the facility show any signs indicating of wild origin?',
  },
  {
    question:
      '9.Is the species known to be difficult to breed and/or maintain in capativity?',
  },
  {
    question:
      '10.Has the facility been established long enough to produce the species in the quantities and sizes claimed?',
  },
  {
    question:
      '11.For species listed in Appendix I,do the parental breeding stock and offspring have a unique and permanent identification mark and number?',
  },
];
const outcome = [
  {result: 'Satisfactory'},
  {result: 'Follow up inspection required'},
  {result: 'Unsatisfactory'},
];
const formFourSchema = {
  falicityScore: 'FACILITY SCORE :',
  facilitydetails: '* From summary of points in brackets ',
  inspectionOutcome: 'INSPECTION OUTCOME :',
};

const FormFourTemplate = ({
  form = 'one',
  facilityData = {},
  editable = false,
}) => {
  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.container}>
          <div style={styles.table}>
            {formFourQuestions?.map((data, index) => {
              return (
                <div
                  key={index}
                  style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  <p style={styles.width70}>{data?.question}</p>
                  <div style={styles.marginTop5}>
                    <input type="checkbox" defaultChecked={false} />
                  </div>
                  <p style={styles.yesNoText}>No(0)</p>
                  <div style={styles.marginTop5}>
                    <input type="checkbox" defaultChecked={true} />
                  </div>
                  <p style={styles.yesNoText}>Yes(1)</p>
                </div>
              );
            })}
          </div>
        </div>
        <div style={styles.flexBox}>
          <div style={styles.flex1}>
            <p style={styles.headingText}>
              <b>{formFourSchema?.falicityScore}</b>
            </p>
            <p style={styles.inputText}>{formFourSchema?.facilitydetails}</p>
          </div>
          <div style={styles.flex2}>
            <div style={styles.row1}>
              <p style={styles.headingText1}>
                <b>{formFourSchema?.inspectionOutcome}</b>
              </p>
              <div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <p style={styles.outcomeText}>{outcome[0]?.result}</p>
                </div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <p style={styles.outcomeText}>{outcome[1]?.result}</p>
                </div>
                <div style={styles.rowInput}>
                  <input
                    style={styles.inputStyle}
                    type="checkbox"
                    defaultChecked={true}
                  />
                  <p style={styles.outcomeText}>{outcome[2]?.result}</p>
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
  flex2: {
    flex: 1,
    marginLeft: 5,
    borderWidth: 2,
    border: '2px solid',
    backgroundColor: 'rgb(239 ,243, 222)',
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
