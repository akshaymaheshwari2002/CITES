import React from 'react';

const content = {
  title: 'CONSENT FORM',
  point1partOne: 'I,',
  point1partTwo:
    ' agree that I have understood the following information and agree that :',
  point2:
    '(1) I, as the owner, operator, or agent in charge of the premises, have been informed of my right not to have an inspection made without an inspection warrant;',
  point3: '(2) have the right to refuse to consent to such an inspection;',
  point4:
    '(3) anything of an incriminating nature which may be found may be seized and used against me in a criminal prosecution;',
  point5:
    '(4) have been presented with a notice of inspection as set forth in ',
  point6:
    '(5) acknowledge that my consent has been given  voluntarily and without threats of any kind;',
  point7: '(6) can withdraw my consent at any time during the inspection; and',
  point8: '(c) will be provided with a copy of my written consent.',
};

const ConsentForm = ({name = '', nationalLegislation = ''}) => {
  return (
    <div className="App">
      <div className="App" style={styles.marginContainer}>
        <div style={styles.container}>
          <h1>{content.title}</h1>
          <div style={styles.gap}>
            <div style={styles.textInput}>
              <b>{content.point1partOne}</b>
              &nbsp;
              {name}
            </div>
            <p>{content.point1partTwo}</p>
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
    </div>
  );
};

const styles = {
  text: {
    fontSize: 30,
  },
  gap: {
    marginTop: 40,
  },
  textInput: {
    flexDirection: 'row',
    fontSize: 30,
  },
};

export default ConsentForm;
