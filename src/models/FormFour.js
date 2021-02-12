import {BSON} from 'realm';

export default class FormFour {
  constructor({
    legallyRegisteredToBreedAndKeep,
    unusualActivityObserved,
    containmentFacilityAvailable,
    containmentFacilityAdequate,
    recordsMaintainedForExport,
    foodFacilitiesAvailable,
    facilityProductionMatchesEstimates,
    wildOriginSignsShown,
    difficultToBreed,
    facilityEstablishedLongEnough,
    haveIdentificationMark,
  }) {
    this._id = new BSON.ObjectId();
    this.legallyRegisteredToBreedAndKeep = legallyRegisteredToBreedAndKeep;
    this.unusualActivityObserved = unusualActivityObserved;
    this.containmentFacilityAvailable = containmentFacilityAvailable;
    this.containmentFacilityAdequate = containmentFacilityAdequate;
    this.recordsMaintainedForExport = recordsMaintainedForExport;
    this.foodFacilitiesAvailable = foodFacilitiesAvailable;
    this.facilityProductionMatchesEstimates = facilityProductionMatchesEstimates;
    this.wildOriginSignsShown = wildOriginSignsShown;
    this.difficultToBreed = difficultToBreed;
    this.facilityEstablishedLongEnough = facilityEstablishedLongEnough;
    this.haveIdentificationMark = haveIdentificationMark;
  }
}
