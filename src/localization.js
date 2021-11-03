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
      labelWelcome: 'Welcome to',
    },
    contactList: {
      labelView: 'View',
      labelAdd: 'Adding',
      labelYourContact: 'Your Contact Now',
      labelUser: 'User',
      labelFirstName: 'First Name',
      labelLastName: 'Last Name',
      labelAge: 'Age',
      labelYear: "year's old",

      buttonCaptionUpdate: 'Update',
      buttonCpationDelete: 'Delete',

      askDeleteConfirm: 'Are you sure want to delete data',
    },
    contactForm: {
      placeholderFirstName: 'Input your first name',
      placeholderLastName: 'Input your last name',
      placeholderAge: 'Input your age',

      buttonCaptionAdd: 'Add',
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
      labelWelcome: 'Selamat datang di',
    },
    contactList: {
      labelView: 'Lihat',
      labelAdd: 'Tambahkan',
      labelYourContact: 'Kontakmu Sekarang',
      labelUser: 'Pengguna',
      labelFirstName: 'Nama Depan',
      labelLastName: 'Nama Belakang',
      labelAge: 'Usia',
      labelYear: 'tahun',

      buttonCaptionUpdate: 'Ubah',
      buttonCpationDelete: 'Hapus',

      askDeleteConfirm: 'Apakah anda yakin ingin delete data',
    },
    contactForm: {
      placeholderFirstName: 'Masukan nama depan anda',
      placeholderLastName: 'Masukan nama belakang anda',
      placeholderAge: 'Masukan usia anda',

      buttonCaptionAdd: 'Tambah',
    },
  },
});

export default LocalizedString;
