import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_SECONDARY,
  POPPINS_MEDIUM,
  POPPINS_SEMIBOLD,
} from '../contant';

const Label = ({
  children,
  fontSize,
  bold,
  italic,
  underline,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.textStyle,
        fontSize ? {fontSize} : {},
        {fontFamily: bold ? POPPINS_SEMIBOLD : POPPINS_MEDIUM},
        {fontStyle: italic ? 'italic' : 'normal'},
        {textDecorationLine: underline ? 'underline' : 'none'},
        style,
      ]}
      allowFontScaling={false}
      adjustsFontSizeToFit
      {...props}>
      {children}
    </Text>
  );
};

export default Label;

const styles = StyleSheet.create({
  textStyle: {
    color: COLOR_BLACK,
  },
});
