import {BSON} from 'realm';

export default class StepThree {
  constructor({
    inspectionCompleted,
    formFourCompleted,
    productionCapacityCalculated,
    requirementCheckedForAdditionalInspection,
  }) {
    this._id = new BSON.ObjectId();
    this.inspectionCompleted = inspectionCompleted;
    this.formFourCompleted = formFourCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.requirementCheckedForAdditionalInspection = requirementCheckedForAdditionalInspection;
  }
}
