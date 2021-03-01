import {BSON} from 'realm';

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
    inspectionConcides,
    facilityOwnerPresent,
    formOne,
  }) {
    this._id = _id ? new BSON.ObjectId(_id) : new BSON.ObjectId();
    this.researchConducted = researchConducted;
    this.existingRecordsExamined = existingRecordsExamined;
    this.outstandingInfringementInvestigations = outstandingInfringementInvestigations;
    this.formOneCompleted = formOneCompleted;
    this.productionCapacityCalculated = productionCapacityCalculated;
    this.toolsEnsured = toolsEnsured;
    this.twoOfficialsArranged = twoOfficialsArranged;
    this.inspectionConcides = inspectionConcides;
    this.facilityOwnerPresent = facilityOwnerPresent;
    this.formOne = formOne ? new FormOne(formOne) : formOne;
  }
}
