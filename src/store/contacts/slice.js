import { initialStateContacts } from './initial';

const { createSlice } = require('@reduxjs/toolkit');


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  reducers: {
    contactCreate(state, action) {
      state.contacts.push(action.payload);
   
    },
    contactRemove(state, action) {
      return {
        ...state,
        contacts: action.payload,
      };
    },
  },
});

export const { contactCreate, contactRemove } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
