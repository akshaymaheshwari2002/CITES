import React from 'react';

import {getInputFieldElementForFormSummary as getInputFieldElement} from '@utils/CommonFunctions';
import Constants from '@utils/Constants';

const formThreeSchema = {
  dateFirstSpeciesAcquired: '*Date Species first Acquired?',
  lifeStageOfInitialStock: 'Source and life-stage of initial stock?',
  numberOfStock: 'Number of intial stock and sexes? if known ',
  males: ' Males? ',
  females: 'Females? ',
  additionalStock:
    '*Have additional animals been obtained since you acquired initial stock? if so, from where?',
  doYouBreedThisSpecies: 'Do you BREED these species?',
  whenDidYouBreedThisSpecies: 'When did you start breeding?',
  numberOfLittersPerYear: '# litter/clutches per year?',
  numberOfOffspringPerLitter: '# offspring/eggs per year?',
  numberProducedInPreviousYear: '# Produced in previous year?',
  isRanchSpecies: 'Do you RANCH these species?',
  lifeStageHarvested: 'What life stage(s) is harvested?',
  numberHarvestedInPreviousYear: '# harvested in previous year?',
  adultBreedingStock: 'ADULT BREEDING STOCK',
  facilityInformation: 'Facility information',
  inspectorCount: 'Inspector count (where possible)',
  noOfAdultsPresent: 'Number of adults present?',
  noOfMalesPresent: 'Number of males present?',
  noOfFemalesPresent: 'Number of females?',
  percentageOfFemalesBreedEachYear: 'What % of females breed each year?',
  foodFedToAdults: 'What do you feed adult animals?',
  rearingStock: 'REARING STOCK ( CAPTIVE BRED AND RANCHED COMBINED )',
  noOfJuvenilesPresent: 'Number of juveniles present?',
  ageAtSexualMaturity: 'Age at sexual maturity (years)?',
  sizeOrMassAtSexualMaturity: 'Size or mass at sexual maturity (cm or g)?',
  sizeOrMassAtSaleOrExport: 'Size at sale (cm or g)',
  percentageOfJuvenilesSurviveBeyond2Weeks_1:
    'What percentage of juveniles survive beyond 2 weeks?',
  percentageOfJuvenilesSurviveBeyond2Weeks_2:
    'Includes mortalities of eggs that didn’t hatch.',
  foodFedToRearingAndJuveniles:
    'What do you feed rearing and juvenile animals?',
  asterisk:
    'Inspectors should ensure specimens were acquired legally and in compliance with CITES. In the case of App. I specimens, invoices and/or bills of sale must be produced .',
};
const FormThreeTemplate = ({speciesData = {}, editable = false}) => {
  const getInputElementConditionally = ({
    name,
    defaultValue,
    inputSize,
    type,
    checked,
    id,
    alt = '',
  }) => {
    return editable
      ? getInputFieldElement({
          name,
          defaultValue,
          inputSize,
          type,
          checked,
          id,
        })
      : alt;
  };

  return (
    <div
      className="App"
      style={{...styles.marginContainer, ...styles.container}}>
      <div style={styles.border}>
        <div style={styles.row}>
          <div style={styles.textContainer50}>
            <label style={styles.text1}>
              {formThreeSchema?.dateFirstSpeciesAcquired}
            </label>
            <span style={styles.underlinedText}>
              {getInputElementConditionally({
                name: 'formThree.0.dateFirstSpeciesAcquired',
                defaultValue: speciesData?.dateFirstSpeciesAcquired ?? '',
                inputSize: 15,
                type: 'date',
                alt: speciesData?.dateFirstSpeciesAcquired ?? '',
              })}
            </span>
          </div>
          <div style={styles.textContainer50}>
            <p style={styles.text2}>
              {formThreeSchema?.lifeStageOfInitialStock}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {getInputElementConditionally({
                  name: 'formThree.0.sourceCodeInitialStock',
                  defaultValue: speciesData?.sourceCodeInitialStock ?? '',
                  inputSize: 15,
                  alt: speciesData?.sourceCodeInitialStock ?? '',
                })}
                ,&nbsp;
                {getInputElementConditionally({
                  name: 'formThree.0.lifeStageOfInitialStock',
                  defaultValue: speciesData?.lifeStageOfInitialStock ?? '',
                  inputSize: 15,
                  alt: speciesData?.lifeStageOfInitialStock ?? '',
                })}
              </p>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div style={{...styles.textContainer, ...styles.marginRight}}>
            <label style={styles.text1}>{formThreeSchema?.numberOfStock}</label>
            <span style={styles.underlinedText}> </span>
          </div>
          <div style={styles.textContainer}>
            <label style={styles.text1}>{formThreeSchema?.males}</label>
            <span style={{...styles.underlinedText1, ...styles.width50PX}}>
              {getInputElementConditionally({
                name: 'formThree.numberOfMalesInitialStock',
                defaultValue: speciesData?.numberOfMalesInitialStock ?? '',
                inputSize: 2,
                alt: speciesData?.numberOfMalesInitialStock ?? '',
              })}
            </span>
          </div>
          <div style={styles.textContainer}>
            <label style={styles.text1}>{formThreeSchema?.females}</label>
            <span style={{...styles.underlinedText1, ...styles.width50PX}}>
              {getInputElementConditionally({
                name: 'formThree.numberOfFemalesInitialStock',
                defaultValue: speciesData?.numberOfFemalesInitialStock ?? '',
                inputSize: 2,
                alt: speciesData?.numberOfFemalesInitialStock ?? '',
              })}
            </span>
          </div>
        </div>
        <p style={styles.text1}>{formThreeSchema?.additionalStock}</p>
        <p style={styles.underlinedText}>
          {getInputElementConditionally({
            name: 'formThree.0.addressOfAdditionalStock',
            defaultValue: speciesData?.addressOfAdditionalStock ?? '',
            inputSize: 15,
            alt: speciesData?.addressOfAdditionalStock ?? '',
          })}
        </p>
      </div>
      <div style={styles.row1}>
        <div style={styles.border50}>
          <div style={{...styles.row, ...styles.alignItemsCenter}}>
            <p style={styles.texts}>{formThreeSchema?.doYouBreedThisSpecies}</p>
            <p style={styles.texts}>{Constants.YES}</p>
            {getInputElementConditionally({
              name: 'formThree.0.doYouBreedThisSpecies',
              checked:
                speciesData?.doYouBreedThisSpecies?.[0] === Constants.YES ??
                false,
              defaultValue: Constants.YES,
              inputSize: 15,
              type: 'radio',
              id: 'formThree.0.doYouBreedThisSpecies.yes',
              alt: (
                <input
                  type="checkbox"
                  defaultChecked={
                    speciesData?.doYouBreedThisSpecies?.[0] === Constants.YES ??
                    false
                  }
                />
              ),
            })}
            <p style={styles.texts}>{Constants.NO}</p>
            {getInputElementConditionally({
              name: 'formThree.0.doYouBreedThisSpecies',
              checked:
                speciesData?.doYouBreedThisSpecies?.[0] === Constants.NO ??
                false,
              defaultValue: Constants.NO,
              inputSize: 15,
              type: 'radio',
              id: 'formThree.0.doYouBreedThisSpecies.no',
              alt: (
                <input
                  type="checkbox"
                  defaultChecked={
                    speciesData?.doYouBreedThisSpecies?.[0] === Constants.NO ??
                    false
                  }
                />
              ),
            })}
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>
              {formThreeSchema?.whenDidYouBreedThisSpecies}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {getInputElementConditionally({
                  name: 'formThree.0.whenDidYouBreedThisSpecies',
                  defaultValue: speciesData?.whenDidYouBreedThisSpecies ?? '',
                  inputSize: 15,
                  type: 'date',
                  alt: speciesData?.whenDidYouBreedThisSpecies ?? '',
                })}
              </p>
            </div>
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>
              {formThreeSchema?.numberOfLittersPerYear}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {getInputElementConditionally({
                  name: 'formThree.0.numberOfLittersPerYear',
                  defaultValue: speciesData?.numberOfLittersPerYear ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.numberOfLittersPerYear ?? '',
                })}
              </p>
            </div>
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>
              {formThreeSchema?.numberOfOffspringPerLitter}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {getInputElementConditionally({
                  name: 'formThree.0.numberOfOffspringPerLitter',
                  defaultValue: speciesData?.numberOfOffspringPerLitter ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.numberOfOffspringPerLitter ?? '',
                })}
              </p>
            </div>
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>
              {formThreeSchema?.numberProducedInPreviousYear}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {getInputElementConditionally({
                  name: 'formThree.0.numberProducedInPreviousYear',
                  defaultValue: speciesData?.numberProducedInPreviousYear ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.numberProducedInPreviousYear ?? '',
                })}
              </p>
            </div>
          </div>
        </div>
        <div style={styles.border50}>
          <div style={{...styles.row, ...styles.alignItemsCenter}}>
            <p style={styles.texts}>{formThreeSchema?.isRanchSpecies}</p>
            <p style={styles.texts}>{Constants.YES}</p>
            {getInputElementConditionally({
              name: 'formThree.0.doYouRanchThisSpecies',
              checked:
                speciesData?.doYouRanchThisSpecies?.[0] === Constants.YES ??
                false,
              defaultValue: Constants.YES,
              inputSize: 15,
              type: 'radio',
              id: 'formThree.0.doYouRanchThisSpecies.yes',
              alt: (
                <input
                  type="checkbox"
                  defaultChecked={
                    speciesData?.doYouRanchThisSpecies?.[0] === Constants.YES ??
                    false
                  }
                />
              ),
            })}
            <p style={styles.texts}>{Constants.NO}</p>
            {getInputElementConditionally({
              name: 'formThree.0.doYouRanchThisSpecies',
              checked:
                speciesData?.doYouRanchThisSpecies?.[0] === Constants.NO ??
                false,
              defaultValue: Constants.NO,
              inputSize: 15,
              type: 'radio',
              id: 'formThree.0.doYouRanchThisSpecies.no',
              alt: (
                <input
                  type="checkbox"
                  defaultChecked={
                    speciesData?.doYouRanchThisSpecies?.[0] === Constants.NO ??
                    false
                  }
                />
              ),
            })}
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>{formThreeSchema?.lifeStageHarvested}</p>
            <div>
              <p style={styles.underlinedText}>
                {speciesData?.lifeStageHarvested &&
                Array.isArray(speciesData.lifeStageHarvested)
                  ? getInputElementConditionally({
                      name: 'formThree.0.lifeStageHarvested',
                      defaultValue: speciesData.lifeStageHarvested.join(', '),
                      inputSize: 15,
                      alt: speciesData.lifeStageHarvested.join(', ') ?? '',
                    })
                  : null}
              </p>
            </div>
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text1}>
              {formThreeSchema?.numberHarvestedInPreviousYear}
            </p>
            <div>
              <p style={styles.underlinedText}>
                {speciesData?.lifeStageHarvested &&
                Array.isArray(speciesData.lifeStageHarvested)
                  ? speciesData.lifeStageHarvested
                      .map((stage, index) => {
                        if (
                          speciesData?.numberHarvestedInPreviousYear &&
                          Array.isArray(
                            speciesData?.numberHarvestedInPreviousYear,
                          )
                        ) {
                          return `${stage} - ${speciesData?.numberHarvestedInPreviousYear[index]}`;
                        } else {
                          return '';
                        }
                      })
                      .join(', ')
                  : null}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.border}>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label
              style={{
                ...styles.text1,
                ...styles.width50,
                ...styles.bold,
              }}>
              {formThreeSchema?.adultBreedingStock}
            </label>
            <label
              style={{
                ...styles.text1,
                ...styles.width25,
              }}>
              {formThreeSchema?.facilityInformation}
            </label>
            <label
              style={{
                ...styles.text1,
                ...styles.width25,
              }}>
              {formThreeSchema?.inspectorCount}
            </label>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.noOfAdultsPresent}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfAdultsPresentFacilityInfo',
                  defaultValue:
                    speciesData?.noOfAdultsPresentFacilityInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfAdultsPresentFacilityInfo ?? '',
                })}
              </div>
            </div>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfAdultsPresentInspectionInfo',
                  defaultValue:
                    speciesData?.noOfAdultsPresentInspectionInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfAdultsPresentInspectionInfo ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.noOfMalesPresent}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfMalesPresentFacilityInfo',
                  defaultValue: speciesData?.noOfMalesPresentFacilityInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfMalesPresentFacilityInfo ?? '',
                })}
              </div>
            </div>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfMalesPresentInspectionInfo',
                  defaultValue:
                    speciesData?.noOfMalesPresentInspectionInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfMalesPresentInspectionInfo ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.noOfFemalesPresent}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfFemalesPresentFacilityInfo',
                  defaultValue:
                    speciesData?.noOfFemalesPresentFacilityInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfFemalesPresentFacilityInfo ?? '',
                })}
              </div>
            </div>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfFemalesPresentInspectionInfo',
                  defaultValue:
                    speciesData?.noOfFemalesPresentInspectionInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfFemalesPresentInspectionInfo ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.percentageOfFemalesBreedEachYear}
            </label>
            <div style={styles.width50}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.percentageOfFemalesBreedEachYear',
                  defaultValue:
                    speciesData?.percentageOfFemalesBreedEachYear ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.percentageOfFemalesBreedEachYear ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={styles.text1}>
              {formThreeSchema?.foodFedToAdults}
            </label>
            <span style={styles.underlinedText}>
              {speciesData?.foodFedToAdults ?? ''}
            </span>
          </div>
        </div>
      </div>
      <div style={styles.border}>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50, ...styles.bold}}>
              {formThreeSchema?.rearingStock}
            </label>
            <label style={{...styles.text1, ...styles.width25}}>
              {formThreeSchema?.facilityInformation}
            </label>
            <label style={{...styles.text1, ...styles.width25}}>
              {formThreeSchema?.inspectorCount}
            </label>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.noOfJuvenilesPresent}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfJuvenilesPresentFacilityInfo',
                  defaultValue:
                    speciesData?.noOfJuvenilesPresentFacilityInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfJuvenilesPresentFacilityInfo ?? '',
                })}
              </div>{' '}
            </div>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.noOfJuvenilesPresentInspectionInfo',
                  defaultValue:
                    speciesData?.noOfJuvenilesPresentInspectionInfo ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.noOfJuvenilesPresentInspectionInfo ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.ageAtSexualMaturity}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.ageAtSexualMaturity',
                  defaultValue: speciesData?.ageAtSexualMaturity ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.ageAtSexualMaturity ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.sizeOrMassAtSexualMaturity}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.sizeOrMassAtSexualMaturity',
                  defaultValue: speciesData?.sizeOrMassAtSexualMaturity ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.sizeOrMassAtSexualMaturity ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={{...styles.text1, ...styles.width50}}>
              {formThreeSchema?.sizeOrMassAtSaleOrExport}
            </label>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.sizeOrMassAtSaleOrExport',
                  defaultValue: speciesData?.sizeOrMassAtSaleOrExport ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt: speciesData?.sizeOrMassAtSaleOrExport ?? '',
                })}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <div style={{...styles.text1, ...styles.width50}}>
              <label style={styles.text1}>
                {formThreeSchema?.percentageOfJuvenilesSurviveBeyond2Weeks_1}
              </label>
              <br />
              <label
                style={{
                  ...styles.text1,
                  ...styles.fontSize9,
                  ...styles.italic,
                }}>
                {formThreeSchema?.percentageOfJuvenilesSurviveBeyond2Weeks_2}
              </label>
            </div>
            <div style={styles.width25}>
              <div style={{...styles.underlinedText1, ...styles.width60PX}}>
                {getInputElementConditionally({
                  name: 'formThree.0.percentageOfJuvenilesSurviveBeyond2Weeks',
                  defaultValue:
                    speciesData?.percentageOfJuvenilesSurviveBeyond2Weeks ?? '',
                  inputSize: 15,
                  type: 'number',
                  alt:
                    speciesData?.percentageOfJuvenilesSurviveBeyond2Weeks ?? '',
                })}
              </div>
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div
            style={{
              ...styles.textContainer,
              ...styles.width100,
            }}>
            <label style={styles.text1}>
              {formThreeSchema?.foodFedToRearingAndJuveniles}
            </label>
            <span style={styles.underlinedText}>
              {speciesData?.foodFedToRearingAndJuveniles ?? ''}
            </span>
          </div>
        </div>
      </div>
      <div style={{...styles.row, ...styles.fontSize9}}>
        <div style={styles.asterisk}>*</div>
        &nbsp;
        {`${formThreeSchema?.asterisk}`}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: 5,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  marginContainer: {marginRight: 16, marginLeft: 16, marginBottom: 16},
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  border: {
    border: '1px solid',
    borderWidth: '1px',
    backgroundColor: 'rgb(239 ,243, 222)',
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
  border50: {
    border: '1px solid',
    borderWidth: '1px',
    width: '48%',
    backgroundColor: 'rgb(239 ,243, 222)',
    paddingLeft: 5,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  underlinedText: {
    textAlign: 'left',
    borderBottom: '1px dashed',
    fontSize: 12,
    marginLeft: 5,
    display: 'flex',
    flex: 1,
  },
  underlinedText1: {
    textAlign: 'left',
    border: '0.5px solid',
    borderWidth: 0.5,
    fontSize: 12,
    flex: 1,
    display: 'flex',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    minHeight: 14,
  },
  textContainer50: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  texts: {
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 12,
    flexWrap: 'wrap',
  },
  text2: {
    marginLeft: 10,
    fontSize: 12,
    flexWrap: 'wrap',
  },
  fontSize9: {
    fontSize: 9,
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontStyle: 'bold',
  },
  width100: {
    width: '100%',
  },
  width50: {
    width: '50%',
  },
  width25: {
    width: '25%',
  },
  width50PX: {
    width: 50,
  },
  width60PX: {
    width: 60,
  },
  marginRight: {marginRight: 'auto'},
  alignItemsCenter: {
    alignItems: 'center',
  },
  asterisk: {
    color: 'red',
  },
};

export default FormThreeTemplate;
