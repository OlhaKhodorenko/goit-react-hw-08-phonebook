import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './contactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  // 1 вариант : падает ошибка toLowerCase() of udefined.

  // const normalizedValue = filter.toLowerCase();
  // const filteredContacts = items.filter(item =>
  //   item.name.toLowerCase().includes(normalizedValue)
  // );

  // 2 вариант
  const filteredContacts = items.filter(({ name }) => name.includes(filter));
  console.log(filter);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <span className={css.marker}></span>
          <p className={css.itemName}>
            {name}: {number}
          </p>
          <button
            className={css.removeBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default ContactList;
