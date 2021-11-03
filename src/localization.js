import LocalizedStrings from 'react-native-localization';

const LocalizedString = new LocalizedStrings({
  'en-US': {
    general: {
      titleAlertError: 'ERROR',
      titleAlertInfo: 'INFO',
      titleAlertWarning: 'WARNING',
      titleAlertAsk: 'CONFIRMATION',

      buttonCaptionOk: 'OK',
      buttonCaptionDetail: 'DETAIL',
      buttonCaptionYes: 'YES',
      buttonCaptionNo: 'NO',
      buttonCaptioEdit: 'Edit',
      buttonCpationDelete: 'Delete',
    },
    splash: {
      title: 'Splash Screen',
      splash: 'Splash',
      screen: 'Screen',
    },
  },
  in: {
    general: {
      titleAlertError: 'GALAT',
      titleAlertInfo: 'INFO',
      titleAlertWarning: 'PERINGATAN',
      titleAlertAsk: 'KONFIRMASI',

      buttonCaptionOk: 'OK',
      buttonCaptionDetail: 'DETAIL',
      buttonCaptionYes: 'YA',
      buttonCaptionNo: 'TIDAK',
      buttonCaptioEdit: 'Ubah',
      buttonCpationDelete: 'Hapus',
    },
    splash: {
      title: 'Splash Screen',
      splash: 'Splash',
      screen: 'Screen',
    },
  },
});

export default LocalizedString;
