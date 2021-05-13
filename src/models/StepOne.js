import {createId} from '@utils/RealmHelper';
import {FormOne} from './';

export default class StepOne {
  constructor({
    _id,
    researchConducted,
    existingRecordsExamined,
    outstandingInfringementInvestigations,
    formOneCompleted,
    productionCapacityCalculated,
    toolsEnsured,
    twoOfficialsArranged,
    inspectionCoincides,
    facilityOwnerPresent,
    formOne,
  }) {
    this._id = _id || createId('StepOne');
    this.researchConducted = researchConducted;
    this.existingRecordsExamined = existingRecordsExamined;
    this.outstandingInfringementInvestigations = outstandingInfringementInvestigations;
    this.formOneCompleted = formOneCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.toolsEnsured = toolsEnsured;
    this.twoOfficialsArranged = twoOfficialsArranged;
    this.inspectionCoincides = inspectionCoincides;
    this.facilityOwnerPresent = facilityOwnerPresent;
    this.formOne = formOne ? new FormOne(formOne) : formOne;
  }
}
