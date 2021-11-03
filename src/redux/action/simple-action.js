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
