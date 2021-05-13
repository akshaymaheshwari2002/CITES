import React from 'react';
import {useNavigation} from '@react-navigation/core';

import {StepOne} from '@screens';

const OnboardingFive = () => {
  const navigation = useNavigation();

  return (
    <StepOne
      navigation={navigation}
      route={{params: {showToolTip: false, notShowAnimation: false}}}
    />
  );
};

export default OnboardingFive;
