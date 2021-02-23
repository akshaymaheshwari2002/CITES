import {BSON} from 'realm';
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
  }
}
