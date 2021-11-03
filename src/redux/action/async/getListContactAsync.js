import {setDownloading} from '../simple-action';

export default () => async (dispatch, getState) => {
  try {
    dispatch(setDownloading(true));
  } finally {
    dispatch(setDownloading(false));
  }
};
