import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const heading = 'Inspection Notes';
const notes = ['Title', 'Message', 'Date', 'Time'];

const InspectionNotesTemplate = ({notesData = [], editable = false}) => {
  return (
    <div className="App">
      <div className="App" style={styles.box}>
        <h1>{heading}</h1>
        <div style={styles.container}>
          <div style={styles.table}>
            <div style={styles.row}>
              {notes?.map((data, index) => (
                <div key={index} style={styles.cell}>
                  <b>{data}</b>
                </div>
              ))}
            </div>
            {notesData?.map((data, index) => {
              const timeStamp = data?.timeStamp;
              const date = timeStamp
                ? new Date(parseInt(timeStamp, 10)).toLocaleDateString()
                : '';
              const time = timeStamp
                ? new Date(parseInt(timeStamp, 10)).toLocaleTimeString()
                : '';

              return (
                <div key={index} style={styles.row}>
                  <div style={styles.cell}>{data?.title}</div>
                  <div style={styles.cell}>{data.text}</div>
                  <div style={styles.cell}>{date}</div>
                  <div style={styles.cell}>{time}</div>
                </div>
              );
            })}
            {notesData?.length >= 4
              ? null
              : new Array(4 - notesData?.length)
                  ?.fill(' ')
                  ?.map((data, index) => {
                    return (
                      <div key={index} style={styles.row}>
                        <div style={styles.cell} />
                        <div style={styles.cell} />
                        <div style={styles.cell} />
                        <div style={styles.cell} />
                      </div>
                    );
                  })}
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
    //flex: 1,
    padding: 5,
    borderWidth: 0.5,
    border: '0.5px solid',
    //minHeight: 40,
    minWidth: 100,
    textAlign: 'center',
  },
};

export default InspectionNotesTemplate;
