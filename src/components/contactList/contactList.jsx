import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { contactsOperations, Selectors } from 'redux/contacts';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(Selectors.getFilteredContacts);
  const filter = useSelector(Selectors.getFilter);

  const filteredContacts = contacts.filter(({ name }) => name.includes(filter));
  console.log(filter);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <span className={css.marker}></span>
          <p className={css.itemName}>
            {name}: {number}
          </p>
          <button className={css.removeBtn} onClick={() => onDeleteContact(id)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
