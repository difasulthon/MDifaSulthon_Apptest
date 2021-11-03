import {addListContact} from '..';
import {getContacts} from '../../../helper';
import {setDownloading} from '../simple-action';

export default () => async (dispatch, getState) => {
  try {
    dispatch(setDownloading(true));

    const listContact = await getContacts();
    const dataListContact = await listContact.data;

    dispatch(addListContact(dataListContact));
  } finally {
    dispatch(setDownloading(false));
  }
};
