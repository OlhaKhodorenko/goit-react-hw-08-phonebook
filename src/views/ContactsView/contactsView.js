import { ContactForm } from 'components/contactForm/contactForm';
import Filter from 'components/filter/filter';
import ContactList from 'components/contactList/contactList';
import Container from 'components/container/container';
import { useDispatch, useSelector } from 'react-redux';
import Selectors from 'redux/contacts/selectors';
import { useEffect } from 'react';
import contactsOperations from 'redux/contacts/contactsOperations';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(Selectors.getLoading);
  console.log(isLoadingContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className="container">
        <h1>Phonebook</h1>
        <div className="wrap">
          <div>
            <ContactForm />
            <Filter />
          </div>
          <div>
            <h2>Contacts</h2>
            {isLoadingContacts && <h1>Loading...</h1>}
            <ContactList />
          </div>
        </div>
      </div>
    </Container>
  );
}
