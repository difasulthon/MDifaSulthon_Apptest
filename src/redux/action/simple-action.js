const makeActionCreator =
  (type, ...argNames) =>
  (...args) => {
    const action = {type};
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };

export const CLEAR_ALL_STATES = 'CLEAR_ALL_STATES';
export const clearAllStates = makeActionCreator(CLEAR_ALL_STATES);

export const SET_DOWNLOADING = 'SET_DOWNLOADING';
export const setDownloading = makeActionCreator(SET_DOWNLOADING, 'status');

export const ADD_LIST_CONTACT = 'ADD_LIST_CONTACT';
export const addListContact = makeActionCreator(ADD_LIST_CONTACT, 'data');

export const CLEAR_LIST_CONTACT = 'CLEAR_LIST_CONTACT';
export const clearListContact = makeActionCreator(CLEAR_LIST_CONTACT);
