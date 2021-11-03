import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  FLOATING_BUTTON_SIZE,
} from '../contant';

const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.floatButton}>
        <Icon
          name="account-plus"
          type="material-community"
          size={30}
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
    bottom: 20,
    right: 16,
    height: FLOATING_BUTTON_SIZE,
    width: FLOATING_BUTTON_SIZE,
    borderRadius: FLOATING_BUTTON_SIZE / 2,
    backgroundColor: COLOR_PRIMARY,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
