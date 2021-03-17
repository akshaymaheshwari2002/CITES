import {createId} from '@utils/RealmHelper';

export default class StepThree {
  constructor({
    _id,
    inspectionCompleted,
    formFourCompleted,
    productionCapacityCalculated,
    requirementCheckedForAdditionalInspection,
  }) {
    this._id = _id || createId('StepThree');
    this.inspectionCompleted = inspectionCompleted;
    this.formFourCompleted = formFourCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.requirementCheckedForAdditionalInspection = requirementCheckedForAdditionalInspection;
  }
}
