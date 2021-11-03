import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  FLOATING_BUTTON_SIZE,
} from '../contant';
import {moderateScale} from 'react-native-size-matters';

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.floatButton}>
        <Icon
          name="account-plus"
          type="material-community"
          size={moderateScale(30)}
          color={COLOR_BACKGROUND}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAdd;

const styles = StyleSheet.create({
  floatButton: {
    position: 'absolute',
    bottom: moderateScale(20),
    right: moderateScale(16),
    height: moderateScale(FLOATING_BUTTON_SIZE),
    width: moderateScale(FLOATING_BUTTON_SIZE),
    borderRadius: moderateScale(FLOATING_BUTTON_SIZE / 2),
    backgroundColor: COLOR_PRIMARY,
    zIndex: moderateScale(999),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
