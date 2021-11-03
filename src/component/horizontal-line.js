import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLOR_HORIZONTAL_LINE} from '../contant';

const HorizontailLine = () => {
  return <View style={styles.horizontalLine} />;
};

export default HorizontailLine;

const styles = StyleSheet.create({
  horizontalLine: {
    borderWidth: 1,
    borderColor: COLOR_HORIZONTAL_LINE,
    alignSelf: 'stretch',
  },
});
