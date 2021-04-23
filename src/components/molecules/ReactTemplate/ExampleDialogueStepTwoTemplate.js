import React from 'react';

const ExampleDialogueStepTwoTemplate = ({
  name = '',
  collaeagueName = '',
  organisationName = '',
  content = {},
}) => {
  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.container}>
          <h1>{content.title}</h1>
          <div style={styles.textInput}>
            <p>{content.point1}</p>
            &nbsp;
            <b>{name}</b>
          </div>
          <div style={styles.textInput}>
            <p>{content.point2}</p>
            &nbsp;
            <b>{collaeagueName}</b>
          </div>
          <div style={styles.textInput}>
            <p>{content.point3}</p>
            &nbsp;
            <b>{organisationName}</b>
          </div>
          <div style={styles.text}>
            <p>{content.point4}</p>
          </div>
          <div style={styles.text}>
            {content.point5}
            <b>{content.point6}</b>
            {content.point7}
          </div>
          <div style={styles.text}>
            <p>{content.point8}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point9}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point10}</p>
          </div>
          <div style={styles.text}>
            <p>{content.point11}</p>
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

export default ExampleDialogueStepTwoTemplate;
