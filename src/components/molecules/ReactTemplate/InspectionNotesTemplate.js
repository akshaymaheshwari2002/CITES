import React from 'react';

const InspectionNotesTemplate = ({notesData = [], editable = false}) => {
  return (
    <div style={styles.container}>
      {notesData?.map((data, index) => {
        const timeStamp = data?.timeStamp;
        const date = timeStamp
          ? new Date(parseInt(timeStamp, 10)).toLocaleDateString()
          : '';
        const time = timeStamp
          ? new Date(parseInt(timeStamp, 10)).toLocaleTimeString()
          : '';

        return (
          <fieldset key={index} style={styles.fieldset}>
            <legend style={styles.legend}>
              {date}&nbsp;{time}
            </legend>
            {data?.title ? <div style={styles.text}>{data?.title}</div> : null}
            <div style={styles.text}>{data.text}</div>
          </fieldset>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    marginRight: 16,
    marginLeft: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  fieldset: {
    borderWidth: 1.5,
    border: '1.5px solid',
    marginTop: 16,
  },
  legend: {
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'left',
    wordWrap: 'normal',
    padding: 5,
  },
};

export default InspectionNotesTemplate;
