import {Images} from '@assets/';
import React, {useState, useEffect} from 'react';
import {Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import PropTypes from 'prop-types';

const getDots = (dots, activeIndex) => {
  let steps = [];

  for (let index = 0; index < dots; ++index) {
    steps = [
      ...steps,
      <Image
        key={index}
        source={
          index === activeIndex
            ? Images.headerDarkCircle
            : Images.headerLightCircle
        }
        style={styles.dot}
      />,
    ];
  }
  return steps;
};

const Pagination = ({activeIndex = 0, dotsLength = 4}) => {
  const [dots, setDots] = useState(getDots(dotsLength, activeIndex));

  useEffect(() => {
    setDots(getDots(dotsLength, activeIndex));
  }, [activeIndex, dotsLength]);

  return <View style={styles.container}>{dots}</View>;
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    height: '12@ms',
    width: '12@ms',
    marginHorizontal: '6@s',
  },
});

Pagination.propTypes = {
  activeIndex: PropTypes.number,
  dotsLength: PropTypes.number,
};

Pagination.defaultProps = {
  activeIndex: 1,
  dotsLength: 4,
};

export default Pagination;
