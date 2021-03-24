import {createId} from '@utils/RealmHelper';
import {FormFour} from './';
export default class StepThree {
  constructor({
    _id,
    inspectionCompleted,
    formFour,
    formFourCompleted,
    productionCapacityCalculated,
    requirementCheckedForAdditionalInspection,
  }) {
    this._id = _id || createId('StepThree');
    this.inspectionCompleted = inspectionCompleted;
    this.formFour = formFour ? new FormFour(formFour) : formFour;
    this.formFourCompleted = formFourCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.requirementCheckedForAdditionalInspection = requirementCheckedForAdditionalInspection;
  }
}
