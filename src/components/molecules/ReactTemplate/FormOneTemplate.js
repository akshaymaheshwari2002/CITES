import React from 'react';
import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';

const speciesText = 'Species The Facility is registered to produce: ';
const speciesAttributes = [
  'Species name',
  'Total number of Specimen at last inspection',
  'Total number of breeding Adults',
  'Total number of Speciment exported since last inspection',
  'Source code, as stated on previous export permits',
];

const FormOneTemplate = ({speciesData = [], editable = false}) => {
  const getInputElementConditionally = ({
    name,
    defaultValue,
    inputSize,
    alt = '',
  }) => {
    return editable
      ? getInputFieldElement({
          name,
          defaultValue,
          inputSize,
        })
      : alt;
  };
  return (
    <div className="App">
      <div className="App" style={styles.box}>
        <p style={styles.headText}>
          <b>{speciesText}</b>
        </p>
        <div style={styles.container}>
          <div style={styles.table}>
            <div style={styles.row}>
              {speciesAttributes?.map((data, index) => (
                <div key={index} style={styles.cell}>
                  <b>{data}</b>
                </div>
              ))}
            </div>
            {speciesData?.map((data, index) => {
              return (
                <div key={index} style={styles.row}>
                  <div style={styles.cell}>
                    {getInputElementConditionally({
                      name: `data.${index}.name`,
                      defaultValue: data?.name,
                      inputSize: 15,
                      alt: data?.name,
                    })}
                  </div>
                  <div style={styles.cell}>
                    {getInputElementConditionally({
                      name: `data.${index}.numberOfSpecimen`,
                      defaultValue: data?.numberOfSpecimen,
                      inputSize: 15,
                      alt: data?.numberOfSpecimen ?? '-',
                    })}
                  </div>
                  <div style={styles.cell}>
                    {getInputElementConditionally({
                      name: `data.${index}.numberOfBreedingAdults`,
                      defaultValue: data?.numberOfBreedingAdults,
                      inputSize: 15,
                      alt: data?.numberOfBreedingAdults ?? '-',
                    })}
                  </div>
                  <div style={styles.cell}>
                    {getInputElementConditionally({
                      name: `data.${index}.numberOfSpeciemenExportedSinceLastInspection`,
                      defaultValue:
                        data?.numberOfSpeciemenExportedSinceLastInspection,
                      inputSize: 15,
                      alt:
                        data?.numberOfSpeciemenExportedSinceLastInspection ??
                        '-',
                    })}
                  </div>
                  <div style={styles.cell}>
                    {getInputElementConditionally({
                      name: `data.${index}.sourceCodeOfPreviousExport`,
                      defaultValue: data?.sourceCodeOfPreviousExport,
                      inputSize: 15,
                      alt: data?.sourceCodeOfPreviousExport ?? '-',
                    })}
                  </div>
                </div>
              );
            })}
            {speciesData?.length >= 5
              ? null
              : new Array(5 - speciesData?.length)
                  ?.fill(' ')
                  ?.map((data, index) => {
                    return (
                      <div key={index} style={styles.row}>
                        <div style={styles.cell} />
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
    flex: 1,
    padding: 5,
    borderWidth: 0.5,
    border: '0.5px solid',
    minHeight: 40,
    textAlign: 'center',
  },
};

export default FormOneTemplate;
