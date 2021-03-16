import Constants from '@utils/Constants';

const sourceCodeQuestionRelations = {
  1: {[Constants.YES]: 2, [Constants.NO]: 'NotApplicable'},
  2: {[Constants.YES]: 'O', [Constants.NO]: 3},
  3: {[Constants.YES]: 'I', [Constants.NO]: 4},
  4: {[Constants.YES]: 5, [Constants.NO]: 'U'},
  5: {[Constants.YES]: 'X', [Constants.NO]: 6},
  6: {[Constants.ANIMAL]: 7, [Constants.PLANT]: 21},
  7: {[Constants.YES]: 8, [Constants.NO]: 13},
  8: {[Constants.YES]: 9, [Constants.NO]: 'W'},
  9: {[Constants.YES]: 10, [Constants.NO]: 'W'},
  10: {[Constants.YES]: 'R', [Constants.NO]: 11},
  11: {[Constants.YES]: 'R', [Constants.NO]: 12},
  12: {
    [Constants.YES]: 'W',
    [Constants.NO]: 'exportShouldNotProceed',
  },
  13: {[Constants.YES]: 15, [Constants.NO]: 14},
  14: {[Constants.YES]: 'F', [Constants.NO]: 'W'},
  15: {[Constants.YES]: 16, [Constants.NO]: 'F'},
  16: {[Constants.YES]: 17, [Constants.NO]: 'F'},
  17: {[Constants.YES]: 18, [Constants.NO]: 'F'},
  18: {
    [Constants.APPENDIXI]: 19,
    [Constants.APPENDIXII]: 'C',
    [Constants.APPENDIXIII]: 'C',
  },
  19: {[Constants.YES]: 20, [Constants.NO]: 'C'},
  20: {
    [Constants.YES]: 'D',
    [Constants.NO]: 'exportShouldNotProceed',
  },
  21: {[Constants.YES]: 22, [Constants.NO]: 'W'},
  22: {[Constants.YES]: 26, [Constants.NO]: 23},
  23: {[Constants.YES]: 26, [Constants.NO]: 24},
  24: {[Constants.YES]: 25, [Constants.NO]: 'W'},
  25: {[Constants.YES]: 'W', [Constants.NO]: 26},
  26: {
    [Constants.APPENDIXI]: 27,
    [Constants.APPENDIXII]: 'A',
    [Constants.APPENDIXIII]: 'A',
  },
  27: {[Constants.YES]: 28, [Constants.NO]: 'A'},
  28: {[Constants.YES]: 'D', [Constants.NO]: 'A'},
};

export default sourceCodeQuestionRelations;
