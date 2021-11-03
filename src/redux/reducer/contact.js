import {SET_DOWNLOADING} from '../action';

const initialState = {
  downloading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DOWNLOADING:
      return {...state, downloading: action.status};
    default:
      return state;
  }
};
