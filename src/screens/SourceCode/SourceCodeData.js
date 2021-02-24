const SourceCodeData = {
  I: {
    code: 'I',
    letterDescription: 'CONFISCATED OR SEIZED',
    content: 'screen.SourceCode.I.contentDescription',
  },
  U: {
    code: 'U',
    letterDescription: 'UNKNOWN',
    content: 'Source of the specimen is unknown, but must be justified.',
  },
  X: {
    code: 'X',
    letterDescription: 'MARINE ENVIRONMENT',
    content:
      'Specimens taken from the marine environment not under the jurisdiction of any State.',
  },
  NotApplicable: {
    code: 'NotApplicable',
    letterDescription: 'CITES export permit not required',
    content:
      'The specimen is not CITES-listed and therefore does not require a CITES permit or associated source code.',
  },
  D: {
    code: 'D',
    letterDescription: 'CAPTIVE-BRED ANIMAL OR ARTIFICIALLY PROPAGATED PLANT',
    content:
      'Appendix I animals bred in captivity for commercial purposes in operations included in the Secretariat’s Register, in accordance with Resolution Conf. 12.10 (Rev. CoP15), and Appendix-I plants artificially propagated for commercial purposes, as well as parts and derivatives thereof, exported under the provisions of Article VII, paragraph 4.',
  },
  F: {
    code: 'F',
    letterDescription: 'BORN IN CAPTIVITY',
    content:
      'Animals born in captivity (F1 or subsequent generations) that do not fulfil the definition of ‘bred in captivity’ in Resolution Conf. 10.16 (Rev.), as well as parts and derivatives thereof.',
  },
  C: {
    code: 'C',
    letterDescription: 'BRED IN CAPTIVITY',
    content:
      'Animals bred in captivity in accordance with Resolution Conf. 10.16 (Rev.), as well as parts and derivatives thereof, exported under the provisions of Article VII, paragraph 5.',
  },
  W: {
    code: 'W',
    letterDescription: 'WILD',
    content: 'Specimens taken from the wild.',
  },
  R: {
    code: 'R',
    letterDescription: 'RANCHED ANIMAL',
    content:
      'Specimens of animals reared in a controlled environment, taken as eggs or juveniles from the wild, where they would otherwise have had a very low probability of surviving to adulthood.',
  },
  A: {
    code: 'A',
    letterDescription: 'ARTIFICIALLY PROPAGATED PLANT',
    content:
      'Plants that are artificially propagated in accordance with Resolution Conf. 11.11 (Rev. CoP17), as well as parts and derivatives thereof, exported under the provisions of Article VII, paragraph 5 (specimens of species included in Appendix I that have been propagated artificially for non-commercial purposes and specimens of species included in Appendices II and III).',
  },
  O: {
    code: 'O',
    letterDescription: 'PRE CONVENTION',
    content:
      'Specimen acquired before the provisions of the Convention applied to it. If a certificate is issued by a Management Authority, then no other permit or certificate is required under the Convention to authorise export, import, or re-export.',
  },
};
export default SourceCodeData;
