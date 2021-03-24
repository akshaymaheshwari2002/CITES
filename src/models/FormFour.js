import {createId} from '@utils/RealmHelper';

export default class FormFour {
  constructor({
    _id,
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
    totalScore,
  }) {
    this._id = _id || createId('FormFour');
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
    this.totalScore = totalScore;
  }
}
