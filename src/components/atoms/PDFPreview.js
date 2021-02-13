import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import {ScaledSheet} from 'react-native-size-matters';

const PDFPreview = ({source = {}}) => {
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '16@vs',
    marginHorizontal: '16@s',
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default PDFPreview;
