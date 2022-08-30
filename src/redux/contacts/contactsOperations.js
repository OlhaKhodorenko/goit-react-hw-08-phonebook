import axios from 'axios';
//import { changeFilter } from './contactsActions';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get(`/contacts`);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContacts =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };
    dispatch(addContactRequest());
    axios
      .post(`/contacts`, contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.message)));
  };

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => deleteContactSuccess(contactId))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContact,
};
export default contactsOperations;
