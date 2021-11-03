import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseScreen, Body, H4} from '../component';
import {NAV_NAME_CONTACT_LIST} from '../contant';
import navigationService from '../navigation-service';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      navigationService.resetTo(NAV_NAME_CONTACT_LIST);
    }, 5000);
  }, []);

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Body>Welcome to</Body>
        <H4 bold>CONTACT APP</H4>
      </View>
    </BaseScreen>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
