import React from 'react';
import {View, Text} from 'react-native';

import {Container} from '@atoms';
import {StepHeader} from '@molecules';

const StepOne = () => {
  return (
    <Container>
      <StepHeader stepNumber={1} />
      <Container.ScrollView>
        <View>
          <Text>## Step One Content</Text>
        </View>
      </Container.ScrollView>
    </Container>
  );
};

export default StepOne;
