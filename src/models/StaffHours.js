export default class Phone {
  constructor({fullTimeStaffs, partTimeStaffs}) {
    this.fullTimeStaffs = fullTimeStaffs
      ? parseInt(fullTimeStaffs, 10)
      : fullTimeStaffs;
    this.partTimeStaffs = partTimeStaffs
      ? parseInt(partTimeStaffs, 10)
      : partTimeStaffs;
  }
}
