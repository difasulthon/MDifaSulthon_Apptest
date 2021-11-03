import {ADD_LIST_CONTACT, CLEAR_LIST_CONTACT, SET_DOWNLOADING} from '../action';

const initialState = {
  downloading: false,
  listContact: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOWNLOADING:
      return {...state, downloading: action.status};
    case ADD_LIST_CONTACT:
      return {...state, listContact: action.data};
    case CLEAR_LIST_CONTACT:
      return {...state, listContact: initialState.listContact};
    default:
      return state;
  }
};
