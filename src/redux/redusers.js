import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './actions';
import { nanoid } from 'nanoid';

const items = createReducer([], {
  [addContact]: (state, { payload: { name, number } }) => {
    return [
      ...state,
      {
        id: nanoid(),
        name,
        number,
      },
    ];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
