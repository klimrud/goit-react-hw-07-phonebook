import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getPhoneContacts,
  deletePhoneContacts,
  createPhoneContacts,
} from './thunks';
import { initialStatePhone } from './initial';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [getPhoneContacts, createPhoneContacts, deletePhoneContacts];

const createActions = type => isAnyOf(...arrThunks.map(el => el[type]));

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};

const handleFulfilledCreate = (state, action) => {
  state.items.push(action.payload);
};

const handleFulfilledDelete = (state, action) => {
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const phoneSlice = createSlice({
  name: 'contacts',
  initialState: initialStatePhone,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(getPhoneContacts.fulfilled, handleFulfilledGet)
      .addCase(createPhoneContacts.fulfilled, handleFulfilledCreate)
      .addCase(deletePhoneContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(createActions(PENDING), handlePending)
      .addMatcher(createActions(FULFILLED), handleFulfilled)
      .addMatcher(createActions(REJECTED), handleRejected);
  },
});

export const phoneReducer = phoneSlice.reducer;
