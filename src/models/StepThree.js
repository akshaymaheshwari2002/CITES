import {BSON} from 'realm';
import {FormFour} from './';
export default class StepThree {
  constructor({
    inspectionCompleted,
    formFour,
    formFourCompleted,
    productionCapacityCalculated,
    requirementCheckedForAdditionalInspection,
  }) {
    this._id = new BSON.ObjectId();
    this.inspectionCompleted = inspectionCompleted;
    this.formFour = formFour ? new FormFour(formFour) : formFour;
    this.formFourCompleted = formFourCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.requirementCheckedForAdditionalInspection = requirementCheckedForAdditionalInspection;
  }
}
