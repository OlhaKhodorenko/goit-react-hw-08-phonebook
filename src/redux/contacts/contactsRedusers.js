import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  changeFilter,
  deleteContactSuccess,
  fetchContactsSuccess,
} from './contactsActions';
import { combineReducers } from '@reduxjs/toolkit';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  error,
});
