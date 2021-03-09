import {BSON} from 'realm';
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
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
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
    this.numberOfMalesInitialStock = numberOfMalesInitialStock;
    this.numberOfFemalesInitialStock = numberOfFemalesInitialStock;
    this.additionalAnimalsAcquiredSinceInitialStock = additionalAnimalsAcquiredSinceInitialStock;
    this.addressOfAdditionalStock = addressOfAdditionalStock;
    this.doYouBreedThisSpecies = doYouBreedThisSpecies;
    this.whenDidYouBreedThisSpecies = whenDidYouBreedThisSpecies;
    this.numberOfLittersPerYear = numberOfLittersPerYear;
    this.numberOfOffspringPerLitter = numberOfOffspringPerLitter;
    this.numberProducedInPreviousYear = numberProducedInPreviousYear;
    this.doYouRanchThisSpecies = doYouRanchThisSpecies;
    this.lifeStageHarvested = lifeStageHarvested;
    this.numberHarvestedInPreviousYear = numberHarvestedInPreviousYear;
    this.noOfAdultsPresentFacilityInfo = noOfAdultsPresentFacilityInfo;
    this.noOfAdultsPresentInspectionInfo = noOfAdultsPresentInspectionInfo;
    this.noOfMalesPresentFacilityInfo = noOfMalesPresentFacilityInfo;
    this.noOfMalesPresentInspectionInfo = noOfMalesPresentInspectionInfo;
    this.noOfFemalesPresentFacilityInfo = noOfFemalesPresentFacilityInfo;
    this.noOfFemalesPresentInspectionInfo = noOfFemalesPresentInspectionInfo;
    this.percentageOfFemalesBreedEachYear = percentageOfFemalesBreedEachYear;
    this.foodFedToAdults = foodFedToAdults;
    this.noOfJuvenilesPresentFacilityInfo = noOfJuvenilesPresentFacilityInfo;
    this.noOfJuvenilesPresentInspectionInfo = noOfJuvenilesPresentInspectionInfo;
    this.ageAtSexualMaturity = ageAtSexualMaturity;
    this.sizeOrMassAtSexualMaturity = sizeOrMassAtSexualMaturity;
    this.sizeOrMassAtSaleOrExport = sizeOrMassAtSaleOrExport;
    this.percentageOfJuvenilesSurviveBeyond2Weeks = percentageOfJuvenilesSurviveBeyond2Weeks;
    this.foodFedToRearingAndJuveniles = foodFedToRearingAndJuveniles;
  }
}
