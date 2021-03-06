import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  COLOR_BUTTON_TEXT,
  COLOR_DISABLE,
  COLOR_PRIMARY,
  FONT_SIZE_BODY_BUTTON,
  POPPINS_SEMIBOLD,
} from '../contant';
import {moderateScale} from 'react-native-size-matters';

const enabledButton = (caption, containerStyle, textStyle, onPress) => (
  <TouchableOpacity
    style={[styles.enableButtonContainer, containerStyle]}
    onPress={onPress}>
    <Text
      style={[styles.textStyle, textStyle]}
      allowFontScaling={false}
      adjustsFontSizeToFit>
      {caption}
    </Text>
  </TouchableOpacity>
);

const disabledButton = (caption, containerStyle, textStyle) => (
  <View style={[styles.enableButtonContainer, styles.disabled, containerStyle]}>
    <Text
      style={[styles.textStyle, textStyle]}
      allowFontScaling={false}
      adjustsFontSizeToFit>
      {caption}
    </Text>
  </View>
);

const loadingButton = containerStyle => (
  <View style={[styles.enableButtonContainer, containerStyle]}>
    <ActivityIndicator size="small" color={COLOR_BUTTON_TEXT} />
  </View>
);

const Button = ({
  disabled,
  loading,
  caption,
  containerStyle,
  textStyle,
  onPress,
}) => {
  if (loading) {
    return loadingButton(containerStyle);
  }
  if (disabled) {
    return disabledButton(caption, containerStyle, textStyle);
  }
  return enabledButton(caption, containerStyle, textStyle, onPress);
};

export default Button;

const styles = StyleSheet.create({
  enableButtonContainer: {
    backgroundColor: COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    height: moderateScale(45),
    paddingHorizontal: moderateScale(25),
  },
  textStyle: {
    color: COLOR_BUTTON_TEXT,
    fontSize: FONT_SIZE_BODY_BUTTON,
    fontFamily: POPPINS_SEMIBOLD,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: COLOR_DISABLE,
  },
});
