import React from 'react';

const ConsentForm = ({name = '', nationalLegislation = '', content = {}}) => {
  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.container}>
          <h1>{content.title}</h1>
          <div style={styles.gap}>
            <div style={styles.textInput}>
              <b>{content.point1partOne}</b>
              &nbsp;
              <b>{name}</b>
              {content.point1partTwo}
            </div>
          </div>
          <div style={styles.text}>
            <p>{content.point2}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point3}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point4}</p>
          </div>
          <div style={styles.textInput}>
            {content.point5}
            &nbsp;
            <b>{nationalLegislation}</b>
          </div>
          <div style={styles.text}>
            <p>{content.point6}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point7}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point8}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  text: {
    fontSize: 30,
  },
  noGap: {marginTop: 0},
  gap: {
    marginTop: 40,
  },
  textInput: {
    flexDirection: 'row',
    fontSize: 30,
  },
};

export default ConsentForm;
