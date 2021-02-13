import {BSON} from 'realm';

export default class FormThree {
  constructor({
    species,
    dateFirstSpeciesAcquired,
    sourceCode,
    lifeStageOfInitialStock,
    numberOfMaleStock,
    numberOfFemaleStock,
    additionalAnimalsAcquiredSinceInitialStock,
    addressOfAdditionalStock,
    doYouBreedThisSpecies,
    whenDidYouBreedThisSpecies,
    dateOfBreeding,
    numberOfLittersPerYear,
    numberOfEggsInLitter,
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
    ageOfSexualMaturity,
    sizeOrMassAtSexualMaturity,
    sizeOrMassAtSaleOrExport,
    percentageOfJuvenilesSurviveBeyond2Weeks,
    foodFedToRearingAndJuveniles,
  }) {
    this._id = new BSON.ObjectId();
    this.species = species;
    this.dateFirstSpeciesAcquired = dateFirstSpeciesAcquired;
    this.sourceCode = sourceCode;
    this.lifeStageOfInitialStock = lifeStageOfInitialStock;
    this.numberOfMaleStock = numberOfMaleStock;
    this.numberOfFemaleStock = numberOfFemaleStock;
    this.additionalAnimalsAcquiredSinceInitialStock = additionalAnimalsAcquiredSinceInitialStock;
    this.addressOfAdditionalStock = addressOfAdditionalStock;
    this.doYouBreedThisSpecies = doYouBreedThisSpecies;
    this.whenDidYouBreedThisSpecies = whenDidYouBreedThisSpecies;
    this.dateOfBreeding = dateOfBreeding;
    this.numberOfLittersPerYear = numberOfLittersPerYear;
    this.numberOfEggsInLitter = numberOfEggsInLitter;
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
    this.ageOfSexualMaturity = ageOfSexualMaturity;
    this.sizeOrMassAtSexualMaturity = sizeOrMassAtSexualMaturity;
    this.sizeOrMassAtSaleOrExport = sizeOrMassAtSaleOrExport;
    this.percentageOfJuvenilesSurviveBeyond2Weeks = percentageOfJuvenilesSurviveBeyond2Weeks;
    this.foodFedToRearingAndJuveniles = foodFedToRearingAndJuveniles;
  }
}
