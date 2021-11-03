import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {COLOR_BACKGROUND} from '../contant';
import {getScreenDimension} from '../helper';
import SafeAreaView from './safe-area-view';
import {moderateScale} from 'react-native-size-matters';

const {height} = getScreenDimension();

const BaseScreen = ({children, containerStyle, statusbarColor, ...props}) => {
  return (
    <SafeAreaView style={styles.container(statusbarColor)} {...props}>
      <StatusBar
        backgroundColor={statusbarColor}
        barStyle={
          statusbarColor !== COLOR_BACKGROUND ? 'light-content' : 'dark-content'
        }
      />
      <View style={[styles.page, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: statusbarColor => ({
    backgroundColor: statusbarColor,
  }),
  page: {
    backgroundColor: COLOR_BACKGROUND,
    flex: moderateScale(1),
    height: height,
  },
});
