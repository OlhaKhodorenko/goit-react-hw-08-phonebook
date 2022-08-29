//import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

const Selectors = {
  getContacts,
  getFilter,
  getLoading,
};

export default Selectors;
