import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Body} from './labels';
import {
  COLOR_BACKGROUND,
  COLOR_ERROR,
  COLOR_INPUT_BORDER_INACTIVE,
  COLOR_INPUT_ICON,
  COLOR_PRIMARY,
  COLOR_TEXT_INPUT,
  COLOR_TEXT_INPUT_DISABLE,
  FONT_SIZE_TEXT_INPUT,
  POPPINS_REGULAR,
} from '../contant';

const TextFieldOutline = ({
  onChangeText,
  secureTextEntry,
  editable,
  value,
  placeholder,
  revealPasswordIcon,
  keyboardType,
  label,
  iconLocation,
  iconName,
  contentContainerStyle,
  contentStyle,
  containerStyle,
  error,
  required,
  onFocus,
  onBlur,
  hideRequiredFlagOnPlaceholder,
  multiline,
  automaticGenerate,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [secureTextEntryState, setSecureTextEntry] = useState(secureTextEntry);

  const onPressShowPassword = () => {
    setSecureTextEntry(!secureTextEntryState);
  };

  const renderIconRight = () => {
    if (revealPasswordIcon && secureTextEntry) {
      return (
        <IconFontAwesome5
          name={secureTextEntryState ? 'eye-slash' : 'eye'}
          size={20}
          color={COLOR_INPUT_ICON}
          onPress={onPressShowPassword}
        />
      );
    }
    if (iconName && iconLocation === 'right') {
      return <Icon name={iconName} size={20} color={COLOR_INPUT_ICON} />;
    }
    return null;
  };

  const renderIconLeft = () => {
    if (
      iconName &&
      iconLocation === 'left' &&
      !revealPasswordIcon &&
      !secureTextEntry
    ) {
      return (
        <Icon
          name={iconName}
          size={20}
          color={COLOR_INPUT_ICON}
          onPress={onPressShowPassword}
        />
      );
    }
    return null;
  };

  const renderBorderColor = () => {
    const textInputHeightContainer = multiline ? {height: 120} : {height: 56};
    if (isFocus) {
      return {
        line: [styles.horizontalLine, {backgroundColor: COLOR_PRIMARY}],
        border: [
          styles.borderContainer,
          textInputHeightContainer,
          {borderColor: COLOR_PRIMARY},
          containerStyle,
        ],
      };
    }
    return {
      line: styles.horizontalLine,
      border: [
        styles.borderContainer,
        containerStyle,
        textInputHeightContainer,
      ],
    };
  };

  const renderLabel = () => {
    const req = required ? '(*)' : '';

    if (automaticGenerate || isFocus || value !== '') {
      if (label !== '' || placeholder !== '') {
        return (
          <View style={styles.labelContainer}>
            <Text
              numberOfLines={1}
              allowFontScaling={false}
              adjustsFontSizeToFit
              style={styles.labelText}>
              {(label || placeholder) + req}
            </Text>
            <View style={renderBorderColor().line} />
          </View>
        );
      }
    }
    return null;
  };

  const onFocusInternal = () => {
    setIsFocus(!isFocus);
  };

  const onBlurInternal = () => {
    setIsFocus(!isFocus);
  };

  const renderError = () => {
    if (error) {
      return <Body style={styles.errorTextStyle}>{error}</Body>;
    }
    return null;
  };

  const req = required && !hideRequiredFlagOnPlaceholder ? '(*)' : '';

  const multilineStyle = multiline ? {marginVertical: 5, height: '87%'} : {};
  const multilineContainer = multiline ? {} : {alignItems: 'center'};

  return (
    <View>
      <View style={renderBorderColor().border}>
        {renderLabel()}
        <View
          style={[
            styles.textInputContainer,
            multilineContainer,
            contentContainerStyle,
          ]}>
          {renderIconLeft()}
          <TextInput
            underlineColorAndroid="transparent"
            placeholder={`${placeholder}${req}`}
            style={[
              styles.textInputStyle(automaticGenerate),
              multilineStyle,
              contentStyle,
            ]}
            onChangeText={onChangeText}
            editable={editable}
            secureTextEntry={secureTextEntryState}
            keyboardType={keyboardType}
            onFocus={onFocusInternal}
            onBlur={onBlurInternal}
            multiline={multiline}
            value={value}
            {...rest}
          />
          {renderIconRight()}
        </View>
      </View>
      {renderError(error)}
    </View>
  );
};

export default TextFieldOutline;

const styles = StyleSheet.create({
  horizontalLine: {
    backgroundColor: COLOR_INPUT_BORDER_INACTIVE,
    height: 1,
    flex: 1,
    alignSelf: 'center',
    marginLeft: 3,
  },
  borderContainer: {
    borderColor: COLOR_INPUT_BORDER_INACTIVE,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  labelContainer: {
    flexDirection: 'row',
    marginLeft: -3,
    marginTop: -14,
    backgroundColor: COLOR_BACKGROUND,
    maxWidth: '55%',
  },
  labelText: {
    fontSize: 16,
    color: COLOR_TEXT_INPUT,
    backgroundColor: COLOR_BACKGROUND,
    fontFamily: POPPINS_REGULAR,
  },
  textInputContainer: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputStyle: automaticGenerate => ({
    color: automaticGenerate ? COLOR_TEXT_INPUT_DISABLE : COLOR_TEXT_INPUT,
    fontSize: FONT_SIZE_TEXT_INPUT,
    flex: 1,
    fontFamily: POPPINS_REGULAR,
  }),
  errorTextStyle: {
    marginTop: 8,
    color: COLOR_ERROR,
  },
});
