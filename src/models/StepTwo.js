import {BSON} from 'realm';
import {FormTwo} from './';
export default class StepTwo {
  constructor({
    purposeDisclosedToOwner,
    confirmFormOneContent,
    informationRecorded,
    formTwoCompleted,
    formThreeCompleted,
    sourceDetermined,
    recordsExaminedForStock,
    formTwo,
  }) {
    this._id = new BSON.ObjectId();
    this.purposeDisclosedToOwner = purposeDisclosedToOwner;
    this.confirmFormOneContent = confirmFormOneContent;
    this.informationRecorded = informationRecorded;
    this.formTwoCompleted = formTwoCompleted;
    this.formThreeCompleted = formThreeCompleted;
    this.sourceDetermined = sourceDetermined;
    this.recordsExaminedForStock = recordsExaminedForStock;
    this.formTwo = formTwo ? new FormTwo(formTwo) : formTwo;
  }
}
