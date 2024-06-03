// src/redux/contacts/operations.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsApi,
  addContactApi,
  deleteContactApi,
} from '../../components/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await fetchContactsApi();
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await addContactApi(contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await deleteContactApi(contactId);
    return contactId;
  }
);
