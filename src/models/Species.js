import {createId} from '@utils/RealmHelper';

export default class Species {
  constructor({
    _id,
    name,
    numberOfSpecimen,
    numberOfBreedingAdults,
    numberOfSpeciemenExportedSinceLastInspection,
    sourceCodeOfPreviousExport,
    dateFirstSpeciesAcquired,
    sourceCodeInitialStock,
    lifeStageOfInitialStock,
    numberOfMalesInitialStock,
    numberOfFemalesInitialStock,
    additionalAnimalsAcquiredSinceInitialStock,
    addressOfAdditionalStock,
    doYouBreedThisSpecies,
    whenDidYouBreedThisSpecies,
    numberOfLittersPerYear,
    numberOfOffspringPerLitter,
    numberProducedInPreviousYear,
    doYouRanchThisSpecies,
    lifeStageHarvested,
    otherLifeStage,
    numberHarvestedInPreviousYear,
    noOfAdultsPresentFacilityInfo,
    noOfAdultsPresentInspectionInfo,
    noOfMalesPresentFacilityInfo,
    noOfMalesPresentInspectionInfo,
    noOfFemalesPresentFacilityInfo,
    noOfFemalesPresentInspectionInfo,
    percentageOfFemalesBreedEachYear,
    foodFedToAdults,
    noOfJuvenilesPresentFacilityInfo,
    noOfJuvenilesPresentInspectionInfo,
    ageAtSexualMaturity,
    sizeOrMassAtSexualMaturity,
    sizeOrMassAtSaleOrExport,
    percentageOfJuvenilesSurviveBeyond2Weeks,
    foodFedToRearingAndJuveniles,
  }) {
    this._id = _id || createId('Species');
    this.name = name;
    this.numberOfSpecimen = numberOfSpecimen
      ? parseInt(numberOfSpecimen, 10)
      : numberOfSpecimen;
    this.numberOfBreedingAdults = numberOfBreedingAdults
      ? parseInt(numberOfBreedingAdults, 10)
      : numberOfBreedingAdults;
    this.numberOfSpeciemenExportedSinceLastInspection = numberOfSpeciemenExportedSinceLastInspection
      ? parseInt(numberOfSpeciemenExportedSinceLastInspection, 10)
      : numberOfSpeciemenExportedSinceLastInspection;
    this.sourceCodeOfPreviousExport = sourceCodeOfPreviousExport;
    this.dateFirstSpeciesAcquired = dateFirstSpeciesAcquired;
    this.sourceCodeInitialStock = sourceCodeInitialStock;
    this.lifeStageOfInitialStock = lifeStageOfInitialStock;
    this.numberOfMalesInitialStock = numberOfMalesInitialStock
      ? parseInt(numberOfMalesInitialStock, 10)
      : numberOfMalesInitialStock;
    this.numberOfFemalesInitialStock = numberOfFemalesInitialStock
      ? parseInt(numberOfFemalesInitialStock, 10)
      : numberOfFemalesInitialStock;
    this.additionalAnimalsAcquiredSinceInitialStock = additionalAnimalsAcquiredSinceInitialStock;
    this.addressOfAdditionalStock = addressOfAdditionalStock;
    this.doYouBreedThisSpecies = doYouBreedThisSpecies;
    this.whenDidYouBreedThisSpecies = whenDidYouBreedThisSpecies;
    this.numberOfLittersPerYear = numberOfLittersPerYear
      ? parseInt(numberOfLittersPerYear, 10)
      : numberOfLittersPerYear;
    this.numberOfOffspringPerLitter = numberOfOffspringPerLitter
      ? parseInt(numberOfOffspringPerLitter, 10)
      : numberOfOffspringPerLitter;
    this.numberProducedInPreviousYear = numberProducedInPreviousYear
      ? parseInt(numberProducedInPreviousYear, 10)
      : numberProducedInPreviousYear;
    this.doYouRanchThisSpecies = doYouRanchThisSpecies;
    this.lifeStageHarvested = lifeStageHarvested;
    this.otherLifeStage = otherLifeStage;
    this.numberHarvestedInPreviousYear =
      numberHarvestedInPreviousYear && numberHarvestedInPreviousYear.length
        ? numberHarvestedInPreviousYear.map((value) =>
            value ? parseInt(value, 10) : value,
          )
        : [];
    this.noOfAdultsPresentFacilityInfo = noOfAdultsPresentFacilityInfo
      ? parseInt(noOfAdultsPresentFacilityInfo, 10)
      : noOfAdultsPresentFacilityInfo;
    this.noOfAdultsPresentInspectionInfo = noOfAdultsPresentInspectionInfo
      ? parseInt(noOfAdultsPresentInspectionInfo, 10)
      : noOfAdultsPresentInspectionInfo;
    this.noOfMalesPresentFacilityInfo = noOfMalesPresentFacilityInfo
      ? parseInt(noOfMalesPresentFacilityInfo, 10)
      : noOfMalesPresentFacilityInfo;
    this.noOfMalesPresentInspectionInfo = noOfMalesPresentInspectionInfo
      ? parseInt(noOfMalesPresentInspectionInfo, 10)
      : noOfMalesPresentInspectionInfo;
    this.noOfFemalesPresentFacilityInfo = noOfFemalesPresentFacilityInfo
      ? parseInt(noOfFemalesPresentFacilityInfo, 10)
      : noOfFemalesPresentFacilityInfo;
    this.noOfFemalesPresentInspectionInfo = noOfFemalesPresentInspectionInfo
      ? parseInt(noOfFemalesPresentInspectionInfo, 10)
      : noOfFemalesPresentInspectionInfo;
    this.percentageOfFemalesBreedEachYear = percentageOfFemalesBreedEachYear;
    this.foodFedToAdults = foodFedToAdults;
    this.noOfJuvenilesPresentFacilityInfo = noOfJuvenilesPresentFacilityInfo
      ? parseInt(noOfJuvenilesPresentFacilityInfo, 10)
      : noOfJuvenilesPresentFacilityInfo;
    this.noOfJuvenilesPresentInspectionInfo = noOfJuvenilesPresentInspectionInfo
      ? parseInt(noOfJuvenilesPresentInspectionInfo, 10)
      : noOfJuvenilesPresentInspectionInfo;
    this.ageAtSexualMaturity = ageAtSexualMaturity;
    this.sizeOrMassAtSexualMaturity = sizeOrMassAtSexualMaturity;
    this.sizeOrMassAtSaleOrExport = sizeOrMassAtSaleOrExport;
    this.percentageOfJuvenilesSurviveBeyond2Weeks = percentageOfJuvenilesSurviveBeyond2Weeks;
    this.foodFedToRearingAndJuveniles = foodFedToRearingAndJuveniles;
  }
}
