import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const heading = 'Inspection Notes';

const FormOneTemplate = ({notes = []}) => {
  return (
    <div className="App">
      <div className="App" style={styles.box}>
        <p style={styles.headText}>
          <b>{heading}</b>
        </p>
      </div>
      <div>
        <p style={styles.headText}>
          <b>{notesTitle}</b>
        </p>
      </div>
      <div>
        <p style={styles.headText}>{notes.title}</p>
      </div>
      <div>
        <p style={styles.headText}>
          <b>{notesText}</b>
        </p>
      </div>
      <div>
        <p style={styles.headText}>{notes.text}</p>
      </div>
    </div>
  );
};

const styles = {
  box: {
    marginRight: 16,
    marginLeft: 16,
  },
  headText: {
    marginBottom: 10,
    textAlign: 'left',
  },
  container: {
    width: '100%',
    backgroundColor: 'rgb(239 ,243, 222)',
  },
  text: {
    textAlign: 'left',
  },
  gridContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
  },
  table: {
    display: 'table',
    width: '100%',
    borderWidth: 1.5,
    border: '1.5px solid',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 40,
    textAlign: 'center',
  },
};

export default FormOneTemplate;
