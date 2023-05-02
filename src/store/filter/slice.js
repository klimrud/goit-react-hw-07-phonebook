import { initialStateFilter } from './initial';

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterChange(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { filterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
