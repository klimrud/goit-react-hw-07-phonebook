import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { initialState } from './initial';

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

// const createThunk = type => arrThunks.map(el => el[type]);

const createActions = type => isAnyOf(...arrThunks.map(el => el[type]));

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, action) => {
  // state.isLoading = false;
  state.items = action.payload;
  // state.error = '';
};

const handleFulfilledCreate = (state, action) => {
  // state.isLoading = false;
  state.items.push(action.payload);
  // state.error = '';
};

const handleFulfilledDelete = (state, action) => {
  // state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
  // state.error = '';
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
      // .addCase(getPhoneContacts.pending, handlePending)
      // .addCase(getPhoneContacts.rejected, handleRejected)
      // .addCase(createPhoneContacts.pending, handlePending)
      // .addCase(createPhoneContacts.rejected, handleRejected)
      // .addCase(deletePhoneContacts.pending, handlePending)
      // .addCase(deletePhoneContacts.rejected, handleRejected)
      .addCase(getPhoneContacts.fulfilled, handleFulfilledGet)
      .addCase(createPhoneContacts.fulfilled, handleFulfilledCreate)
      .addCase(deletePhoneContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(
        // isAnyOf(
        //   // getPhoneContacts.pending,
        //   // createPhoneContacts.pending,
        //   // deletePhoneContacts.pending
        //   ...createThunk(PENDING)
        // )
        createActions(PENDING),
        handlePending
      )
      .addMatcher(
        // isAnyOf(
        //   // getPhoneContacts.fulfilled,
        //   // createPhoneContacts.fulfilled,
        //   // deletePhoneContacts.fulfilled
        //   ...createThunk(FULFILLED)
        // )
        createActions(FULFILLED),
        handleFulfilled
      )
      .addMatcher(
        // isAnyOf(
        //   // getPhoneContacts.rejected,
        //   // createPhoneContacts.rejected,
        //   // deletePhoneContacts.rejected
        //   ...createThunk(REJECTED)
        // )
        createActions(REJECTED),
        handleRejected
      );
  },
});

export const phoneReducer = phoneSlice.reducer;
