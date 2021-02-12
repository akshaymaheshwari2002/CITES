import {BSON} from 'realm';
export default class StepTwo {
  constructor({
    purposeDisclosedToOwner,
    confirmFormOneContent,
    informationRecorded,
    formTwoCompleted,
    formThreeCompleted,
    sourceDetermined,
    recordsExaminedForStock,
  }) {
    this._id = new BSON.ObjectId();
    this.purposeDisclosedToOwner = purposeDisclosedToOwner;
    this.confirmFormOneContent = confirmFormOneContent;
    this.informationRecorded = informationRecorded;
    this.formTwoCompleted = formTwoCompleted;
    this.formThreeCompleted = formThreeCompleted;
    this.sourceDetermined = sourceDetermined;
    this.recordsExaminedForStock = recordsExaminedForStock;
  }
}
