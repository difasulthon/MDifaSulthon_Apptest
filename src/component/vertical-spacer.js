import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const VerticalSpacer = ({height}) => {
  return <View style={[styles.spacer, {height: moderateScale(height)}]} />;
};

export default VerticalSpacer;

const styles = StyleSheet.create({
  spacer: {
    height: 5,
    width: 1,
  },
});
