import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/phoneApiContacts';

export const getPhoneContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async() => {
    console.log('fe', )
   return await fetchContacts()
  }
);

export const createPhoneContacts = createAsyncThunk(
  'contacts/addContact',
  async(data) => {
    await addContact(data)
    console.log('data', data)
    return data
  }
);

export const deletePhoneContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    console.log('delete', id)
   return await deleteContact(id)
  }
);

