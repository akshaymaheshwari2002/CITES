import React from 'react';

const FormOneTemplate = ({speciesData = []}) => {
  const speciesText = 'Species The Facility is registered to produce: ';
  const formDetails = {
    dateOfInspection: '10/2/2021',
    seniorOfficerName: 'Mr. Puneet Kumar Rohtela',
    typeOfInspection: 'Routine',
  };
  const formDetailsSchema = {
    dateOfInspection: 'Date of Inspection: ',
    seniorOfficerName: 'Name of Senior Inspecting Officer: ',
    typeOfInspection: 'Type of Inspection: ',
  };
  const speciesAttributes = [
    'Species name',
    'Total number of Specimen at last inspection',
    'Total number of breeding Adults',
    'Total number of Speciment exported since last inspection',
    'Source code, as stated on previous export permits',
  ];
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
                  <div style={styles.cell}>{data?.name}</div>
                  <div style={styles.cell}>{data?.numberOfSpecimen}</div>
                  <div style={styles.cell}>{data?.numberOfBreedingAdults}</div>
                  <div style={styles.cell}>
                    {data?.numberOfSpeciemenExportedSinceLastInspection}
                  </div>
                  <div style={styles.cell}>
                    {data?.sourceCodeOfPreviousExport}
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
                        <div style={styles.cell}></div>
                        <div style={styles.cell}></div>
                        <div style={styles.cell}></div>
                        <div style={styles.cell}></div>
                        <div style={styles.cell}></div>
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
  },
};

export default FormOneTemplate;
