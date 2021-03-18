import Config from '@config';
import Constants from '@utils/Constants';

const sourceCodeQuestions = {
  1: {
    content: [
      {
        1: 'Is the species listed in the CITES Appendices (I, II or III)?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: false,
      target: 'Q1MoreInfo',
    },
  },
  2: {
    content: [
      {
        1: 'Was the specimen acquired before the provisions of the Convention applied to it?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q2_MORE_INFO,
    },
  },
  3: {
    content: [
      {1: 'Was the animal confiscated or seized?', isLink: false},
      {2: 'Exports subject to compliance with ', isLink: false},
      {3: 'Resolution. Conf. 17.8', isLink: true},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q3_MORE_INFO,
    },
  },
  4: {
    content: [
      {
        1: 'Is there sufficient information about the specimen to determine its source?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: false,
      target: 'Q4MoreInfo',
    },
  },
  5: {
    content: [
      {
        1: 'Was the specimen taken from the marine environment and not under the jurisdiction of any State?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q5_MORE_INFO,
    },
  },
  6: {
    content: [
      {1: 'Is the specimen a', isLink: false},
      {2: 'plant', isLink: false},
      {3: 'OR', isLink: false},
      {4: 'animal?', isLink: false},
    ],
    options: [Constants.PLANT, Constants.ANIMAL],
    moreInfo: false,
  },
  7: {
    content: [{1: 'Was the specimen taken from the wild?', isLink: false}],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  8: {
    content: [
      {
        1: 'Was the specimen taken from the wild as an egg or juvenile that had a very low probability of surviving to adulthood?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q8_MORE_INFO,
    },
  },
  9: {
    content: [
      {1: 'Was the specimen reared in a', isLink: false},
      {2: 'controlled environment?', isLink: true},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: false,
      target: 'Q9MoreInfo',
    },
  },
  10: {
    content: [
      {
        1: 'Has the specimen been transferred to Appendix II and marked in accordance with',
        isLink: false,
      },
      {
        2: 'Resolution Conf. 11.16 (Rev. CoP15)?',
        isLink: true,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q10_MORE_INFO,
    },
  },
  11: {
    content: [
      {
        1: 'Is the species listed in the CITES Appendices (II or III)?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: false,
      target: 'Q1MoreInfo',
    },
  },
  12: {
    content: [
      {1: 'Does the specimen fulfil the requirements under', isLink: false},
      {2: 'Article III', isLink: true},
      {3: 'of the Convention?', isLink: false},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q12_MORE_INFO,
    },
  },
  13: {
    content: [
      {
        1: 'Was the specimen derived from parents that mated or otherwise transferred gametes in a',
        isLink: false,
      },
      {2: 'controlled environment', isLink: true},
      {3: '(sexual reproduction)?', isLink: false},
      {4: 'OR', isLink: false},
      {5: 'Were the parents in a', isLink: false},
      {6: 'controlled environment', isLink: true},
      {
        7: 'when development of the offspring began (asexual reproduction)?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q13_MORE_INFO,
    },
  },
  14: {
    content: [
      {
        1: 'Was the specimen born in captivity, in a controlled environment?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q14_MORE_INFO,
    },
  },
  15: {
    content: [
      {
        1: 'Was the breeding stock established in accordance with the provisions of CITES and relevant national laws?',
        isLink: false,
      },
      {2: 'AND', isLink: false},
      {
        3: 'in a manner not detrimental to the survival of the species in the wild?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: false,
      target: 'Q4MoreInfo',
    },
  },
  16: {
    content: [
      {
        1: 'Is the breeding stock maintained without the introduction of specimens from the wild, except for the occasional addition of animals, eggs or gametes, in accordance with the provisions of CITES and relevant national laws?',
        isLink: false,
      },
      {2: 'AND', isLink: false},
      {
        3: 'In a manner not detrimental to the survival of the species in the wild?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q16_MORE_INFO,
    },
  },
  17: {
    content: [
      {
        1: 'Has the breeding stock produced offspring of second generation (F2) or subsequent generations (F3, F4, etc.) in a',
        isLink: false,
      },
      {
        2: 'controlled environment?',
        isLink: true,
      },
      {3: 'OR', isLink: false},
      {
        4: 'Is managed in a manner that has been demonstrated to be capable of reliably producing second-generation offspring in a',
        isLink: false,
      },
      {
        5: 'controlled environment?',
        isLink: true,
      },
    ],

    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  18: {
    content: [
      {1: 'In which CITES Appendix is the specimen listed?', isLink: false},
    ],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  19: {
    content: [
      {1: 'Has the specimen been bred for commercial purposes?', isLink: false},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q19_MORE_INFO,
    },
  },
  20: {
    content: [
      {
        1: 'Was the specimen bred at a CITES-registered breeding operation?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q20_MORE_INFO,
    },
  },
  21: {
    content: [
      {1: 'Was the specimen grown under', isLink: false},
      {2: 'controlled conditions ?', isLink: true},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  22: {
    content: [
      {
        1: 'Was the specimen grown from seeds, cuttings, divisions, callus tissues or other plant tissues, spores or other propagules that were derived from cultivated parental stock in accordance with paragraph 1b) of',
        isLink: false,
      },
      {2: 'Resolution Conf. 11.11 (Rev. CoP18)?*', isLink: true},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q22_MORE_INFO,
    },
  },
  23: {
    content: [
      {
        1: 'Was the specimen grown from wild collected seeds or spores in accordance with exemptions in',
        isLink: false,
      },
      {2: 'Resolution Conf. 11.11 (Rev. CoP18)?', isLink: true},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q23_MORE_INFO,
    },
  },
  24: {
    content: [
      {1: 'Was the specimen grown from a cutting or division?', isLink: false},
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  25: {
    content: [
      {
        1: 'Was the cutting or division taken from a wild plant that is NOT considered cultivated parental stock?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  26: {
    content: [
      {1: 'In which CITES Appendix is the species listed?', isLink: false},
    ],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  27: {
    content: [
      {
        1: 'Has the specimen been grown for commercial purposes?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  28: {
    content: [
      {
        1: 'Has the specimen been artificially propagated at a CITES-registered nursery?',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
};

export default sourceCodeQuestions;
