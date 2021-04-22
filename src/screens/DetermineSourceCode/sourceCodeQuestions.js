import Config from '@config';
import Constants from '@utils/Constants';

const sourceCodeQuestions = {
  1: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionOne',
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
        text: 'questionContent.DetermineSourceCode.questionTwo',
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
      {
        text: 'questionContent.DetermineSourceCode.questionThreePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThreePartTwo',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThreePartThree',
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
        text: 'questionContent.DetermineSourceCode.questionFour',
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
        text: 'questionContent.DetermineSourceCode.questionFive',
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
      {
        text: 'questionContent.DetermineSourceCode.questionSixPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSixPartTwo',
        isLink: false,
        textStyle: {
          marginTop: 0,
        },
      },
    ],
    options: [Constants.PLANT, Constants.ANIMAL],
    moreInfo: false,
  },
  7: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionSeven',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  8: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionEight',
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
      {
        text: 'questionContent.DetermineSourceCode.questionNinePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionNinePartTwo',
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
        text: 'questionContent.DetermineSourceCode.questionTenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTenPartTwo',
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
        text: 'questionContent.DetermineSourceCode.questionEleven',
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
      {
        text: 'questionContent.DetermineSourceCode.questionTwelvePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTwelvePartTwo',
        isLink: {isWebSource: true, target: Config.URL_Q12_MORE_INFO},
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTwelvePartThree',
        isLink: false,
      },
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
        text: 'questionContent.DetermineSourceCode.questionThirteenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartThree',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartFour',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartFive',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {
        text: 'questionContent.DetermineSourceCode.questionThirteenPartSix',
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
        text: 'questionContent.DetermineSourceCode.questionFourteen',
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
        text: 'questionContent.DetermineSourceCode.questionFifteenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionFifteenPartTwo',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionFifteenPartThree',
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
        text: 'questionContent.DetermineSourceCode.questionSixteenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSixteenPartTwo',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSixteenPartThree',
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
        text: 'questionContent.DetermineSourceCode.questionSeventeenPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSeventeenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSeventeenPartThree',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSeventeenPartFour',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionSeventeenPartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
    ],

    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  18: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionEighteen',
        isLink: false,
      },
    ],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  19: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionNineteen',
        isLink: false,
      },
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
        text: 'questionContent.DetermineSourceCode.questionTwenty',
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
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyOnePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyOnePartTwo',
        isLink: {isWebSource: false, target: 'Q9MoreInfo'},
      },
    ],
    moreInfo: {
      isWebResource: false,
      target: 'Q9MoreInfo',
    },
  },
  22: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyTwoPartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyTwoPartTwo',
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
        text: 'questionContent.DetermineSourceCode.questionTwentyThreePartOne',
        isLink: false,
      },
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyThreePartTwo',
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
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyFour',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  25: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyFive',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  26: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentySix',
        isLink: false,
      },
    ],
    options: [Constants.APPENDIXI, Constants.APPENDIXII, Constants.APPENDIXIII],
    moreInfo: false,
  },
  27: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentySeven',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
  28: {
    content: [
      {
        text: 'questionContent.DetermineSourceCode.questionTwentyEight',
        isLink: false,
      },
    ],
    options: [Constants.YES, Constants.NO],
    moreInfo: false,
  },
};

export default sourceCodeQuestions;
