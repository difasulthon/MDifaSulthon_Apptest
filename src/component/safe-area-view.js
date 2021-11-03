import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';

const Component = ({style, children, ...props}) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default Component;

const styles = StyleSheet.create({
  container: {
    flex: moderateScale(1),
  },
});
