import React from 'react';
import {StyleSheet, View} from 'react-native';

const VerticalSpacer = ({height}) => {
  return <View style={[styles.spacer, {height: height}]} />;
};

export default VerticalSpacer;

const styles = StyleSheet.create({
  spacer: {
    height: 5,
    width: 1,
  },
});
