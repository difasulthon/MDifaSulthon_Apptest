import {Alert, Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import LocalizedString from './localization';

export const getScreenDimension = () => {
  const statusBarHeight = getStatusBarHeight();
  const {height, width} = Dimensions.get('window');
  return {height: height - statusBarHeight, width};
};

export const ios = Platform.OS === 'ios';

export const android = Platform.OS === 'android';

const isIphoneXSize = dim => dim.height === 812 || dim.width === 812;

const isIphoneXrSize = dim => dim.height === 896 || dim.width === 896;

export const isIphoneX =
  ios &&
  (isIphoneXSize(Dimensions.get('window')) ||
    isIphoneXrSize(Dimensions.get('window')));

const showAlert = (
  title,
  summary,
  detailMessage,
  cancelable = true,
  okButtonCaption = LocalizedString.general.buttonCaptionOk,
  okButtonCallback,
) => {
  let errorMessage = summary.toString();
  if (summary instanceof Error) {
    errorMessage = summary.message;
  }
  if (detailMessage) {
    Alert.alert(title, errorMessage, [
      {
        text: LocalizedString.general.buttonCaptionDetail,
        onPress: () => Alert.alert(title, detailMessage.toString()),
      },
      {
        text: okButtonCaption,
        onPress: okButtonCallback,
      },
    ]);
  } else {
    Alert.alert(
      title,
      errorMessage,
      [
        {
          text: okButtonCaption,
          onPress: okButtonCallback,
        },
      ],
      {cancelable},
    );
  }
};

export const alertError = (
  summary,
  detailMessage,
  title = LocalizedString.general.titleAlertError,
  buttonCaption = LocalizedString.general.buttonCaptionOk,
  cancelable = true,
  okButtonCallback,
) => {
  showAlert(
    title,
    summary,
    detailMessage,
    cancelable,
    buttonCaption,
    okButtonCallback,
  );
};

export const alertInfo = (
  summary,
  detailMessage,
  title = LocalizedString.general.titleAlertInfo,
  buttonCaption = LocalizedString.general.buttonCaptionOk,
  cancelable = true,
  okButtonCallback,
) => {
  showAlert(
    title,
    summary,
    detailMessage,
    cancelable,
    buttonCaption,
    okButtonCallback,
  );
};

export const alertWarning = (
  summary,
  detailMessage,
  title = LocalizedString.general.titleAlertWarning,
  buttonCaption = LocalizedString.general.buttonCaptionOk,
  cancelable = true,
  okButtonCallback,
) => {
  showAlert(
    title,
    summary,
    detailMessage,
    cancelable,
    buttonCaption,
    okButtonCallback,
  );
};

export const alertAskForConfirmation = (message, yesCallback, noCallback) => {
  Alert.alert(
    LocalizedString.general.titleAlertAsk,
    message,
    [
      {
        text: LocalizedString.general.buttonCaptionNo,
        onPress: noCallback,
        style: 'cancel',
      },
      {
        text: LocalizedString.general.buttonCaptionYes,
        onPress: yesCallback,
      },
    ],
    {cancelable: false},
  );
};
