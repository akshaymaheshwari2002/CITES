import {createId} from '@utils/RealmHelper';
import {FormTwo} from './';

export default class StepTwo {
  constructor({
    _id,
    purposeDisclosedToOwner,
    confirmFormOneContent,
    informationRecorded,
    formTwoCompleted,
    formThreeCompleted,
    sourceDetermined,
    recordsExaminedForStock,
    formTwo,
  }) {
    this._id = _id || createId('StepTwo');
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
