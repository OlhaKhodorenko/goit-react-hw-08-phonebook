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

const fetchContacts = () => async dispach => {
  dispatchEvent(fetchContactsRequest());

  try {
    const { data } = await axios.get(`/contacts`);
    dispach(fetchContactsSuccess());
  } catch (error) {
    dispach(fetchContactsError(error.message));
  }
};

const addContacts =
  ({ name, number }) =>
  dispach => {
    const contact = {
      name,
      number,
    };
    dispach(addContactRequest());
    axios
      .post(`/contacts`, contact)
      .then(({ data }) => dispach(addContactSuccess(data)))
      .catch(error => dispach(addContactError(error.message)));
  };

const deleteContact = contactId => dispach => {
  dispach(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => deleteContactSuccess(contactId))
    .catch(error => dispach(deleteContactError(error.message)));
};

const contactsOperations = {
  fetchContacts,
  addContacts,
  deleteContact,
};
export default contactsOperations;
