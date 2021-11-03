import {Alert, Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  HTTP_HEADER_VALUE_JSON,
  REST_METHOD_DELETE,
  REST_METHOD_GET,
  REST_METHOD_POST,
  REST_METHOD_PUT,
  REST_URL_BASE,
  REST_URL_CONTACT,
} from './contant';
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

const getHttpHeaders = async () => {
  const headers = {
    'Content-Type': HTTP_HEADER_VALUE_JSON,
    Accept: HTTP_HEADER_VALUE_JSON,
  };
  return headers;
};

const sendGetRequest = async apiPath => {
  const url = `${REST_URL_BASE}${apiPath}`;
  const method = REST_METHOD_GET;
  const headers = await getHttpHeaders();
  const response = await fetch(url, {method, headers});
  console.log(response);
  return response;
};

const sendPostRequest = async (apiPath, body) => {
  const bodyStr = JSON.stringify(body);
  const url = `${REST_URL_BASE}${apiPath}`;
  const method = REST_METHOD_POST;
  const headers = await getHttpHeaders();
  const response = await fetch(url, {method, headers, body: bodyStr});
  return response;
};

const sendPutRequest = async (apiPath, body) => {
  const bodyStr = JSON.stringify(body);
  const url = `${REST_URL_BASE}${apiPath}`;
  const method = REST_METHOD_PUT;
  const headers = await getHttpHeaders();
  const response = await fetch(url, {method, headers, body: bodyStr});
  return response;
};

const sendDeleteRequest = async apiPath => {
  const url = `${REST_URL_BASE}${apiPath}`;
  const method = REST_METHOD_DELETE;
  const headers = await getHttpHeaders();
  const response = await fetch(url, {method, headers});
  return response;
};

export const postContact = async data => {
  const response = await sendPostRequest(REST_URL_CONTACT, data);
  const responseJSON = response.json();
  return responseJSON;
};

export const getContacts = async () => {
  const url = `${REST_URL_CONTACT}`;
  const response = await sendGetRequest(url);
  const responseJSON = await response.json();
  return responseJSON;
};

export const deleteContact = async id => {
  console.log(id);
  const response = await sendDeleteRequest(`${REST_URL_CONTACT}/${id}`);
  const responseJSON = response.json();
  return responseJSON;
};

export const getContactById = async id => {
  const url = `${REST_URL_CONTACT}/${id}`;
  const response = await sendGetRequest(url);
  const responseJSON = await response.json();
  return responseJSON;
};

export const putContact = async data => {
  const response = await sendPutRequest(`${REST_URL_CONTACT}/${data.id}`, data);
  const responseJSON = response.json();
  return responseJSON;
};
