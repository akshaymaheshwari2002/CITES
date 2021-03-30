import Config from '@config';
import Constants from '@utils/Constants';

const sourceCodeQuestions = {
  1: {
    content: [
      {
        text: 'questionContent.questionOne',
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
        text: 'questionContent.questionTwo',
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
      {text: 'questionContent.questionThreePartOne', isLink: false},
      {
        text: 'questionContent.questionThreePartThree',
        isLink: {isWebSource: true, target: Config.URL_Q3_MORE_INFO},
      },
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
        text: 'questionContent.questionFour',
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
        text: 'questionContent.questionFive',
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
      {text: 'questionContent.questionSixPartOne', isLink: false},
      {text: 'questionContent.questionSixPartTwo', isLink: false},
    ],
    options: [Constants.PLANT, Constants.ANIMAL],
    moreInfo: false,
  },
  7: {
    content: [{text: 'questionContent.questionSeven', isLink: false}],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  8: {
    content: [
      {
        text: 'questionContent.questionEight',
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
      {text: 'questionContent.questionNinePartOne', isLink: false},
      {
        text: 'questionContent.questionNinePartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
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
        text: 'questionContent.questionTenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.questionTenPartTwo',
        isLink: {isWebSource: true, target: Config.URL_Q10_MORE_INFO},
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
        text: 'questionContent.questionEleven',
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
      {text: 'questionContent.questionTwelvePartOne', isLink: false},
      {
        text: 'questionContent.questionTwelvePartTwo',
        isLink: {isWebSource: true, target: Config.URL_Q12_MORE_INFO},
      },
      {text: 'questionContent.questionTwelvePartThree', isLink: false},
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
        text: 'questionContent.questionThirteenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.questionThirteenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {text: 'questionContent.questionThirteenPartThree', isLink: false},
      {text: 'questionContent.questionThirteenPartFour', isLink: false},
      {text: 'questionContent.questionThirteenPartFive', isLink: false},
      {
        text: 'questionContent.questionThirteenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {
        text: 'questionContent.questionThirteenPartSix',
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
        text: 'questionContent.questionFourteen',
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
        text: 'questionContent.questionFifteenPartOne',
        isLink: false,
      },
      {text: 'questionContent.questionFifteenPartTwo', isLink: false},
      {
        text: 'questionContent.questionFifteenPartThree',
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
        text: 'questionContent.questionSixteenPartOne',
        isLink: false,
      },
      {text: 'questionContent.questionSixteenPartTwo', isLink: false},
      {
        text: 'questionContent.questionSixteenPartThree',
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
        text: 'questionContent.questionSeventeenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.questionSeventeenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {text: 'questionContent.questionSeventeenPartThree', isLink: false},
      {
        text: 'questionContent.questionSeventeenPartFour',
        isLink: false,
      },
      {
        text: 'questionContent.questionSeventeenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
    ],

    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  18: {
    content: [{text: 'questionContent.questionEighteen', isLink: false}],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  19: {
    content: [{text: 'questionContent.questionNineteen', isLink: false}],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q19_MORE_INFO,
    },
  },
  20: {
    content: [
      {
        text: 'questionContent.questionTwenty',
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
      {text: 'questionContent.questionTwentyOnePartOne', isLink: false},
      {
        text: 'questionContent.questionTwentyOnePartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  22: {
    content: [
      {
        text: 'questionContent.questionTwentyTwoPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.questionTwentyTwoPartTwo',
        isLink: {isWebSource: true, target: Config.URL_Q22_MORE_INFO},
      },
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
        text: 'questionContent.questionTwentyThreePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.questionTwentyThreePartTwo',
        isLink: {isWebSource: true, target: Config.URL_Q23_MORE_INFO},
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: {
      isWebResource: true,
      target: Config.URL_Q23_MORE_INFO,
    },
  },
  24: {
    content: [{text: 'questionContent.questionTwentyFour', isLink: false}],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  25: {
    content: [
      {
        text: 'questionContent.questionTwentyFive',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  26: {
    content: [{text: 'questionContent.questionTwentySix', isLink: false}],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  27: {
    content: [
      {
        text: 'questionContent.questionTwentySeven',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  28: {
    content: [
      {
        text: 'questionContent.questionTwentyEight',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
};

export default sourceCodeQuestions;
