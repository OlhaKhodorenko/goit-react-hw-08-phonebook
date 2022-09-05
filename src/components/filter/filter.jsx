import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/contacts/contactsActions';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <label>
      <TextField
        id="outlined-search"
        label="Filter"
        defaultValue="Name"
        helperText="Find contacts by name"
        type="text"
        variant="standard"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
      {/* <input
        type="text"
        value={filter}
        className={css.input}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      /> */}
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
