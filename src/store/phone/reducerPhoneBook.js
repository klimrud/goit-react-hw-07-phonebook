// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { getPhoneBook } from 'services/api';

// // export const phoneBook = () => {
// //   return async dispatch => {
// //     try {
// //     dispatch(phoneSlice.actions.fetching())
// //     const data = await getPhoneBook();
// //     dispatch(phoneSlice.actions.fetchSuccess(data))
// //     // dispatch({
// //     //   type: 'getPhoneBook',
// //     //   payload: data,
// //     // });

// //     //     return {
// //     // type:'thunk',
// //     // payload: '100'
// //     // }
// //     }catch (error){
// //       dispatch(phoneSlice.actions.fetchError(error))
// //     }
// //   };
// // };

// export const phoneBook = createAsyncThunk('contacts/getPhoneBook', async () => {
//   return await getPhoneBook();
// });

// const handlePending =(state, action) => {
//   state.isLoading = true;
// }

// const handleFulfilled=(state, action) => {
//   state.isLoading = false;
//   state.delete = action.payload;
//   state.error = '';
// }

// const handleRejected =(state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// }


// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// };

// const phoneSlice = createSlice({
//   name: 'items',
//   initialState,
//   // reducers: {
//   //   fetching: (state, action) => {
//   //     state.isLoading = true;
//   //   },

//   //   fetchSuccess: (state, action) => {
//   //     state.isLoading = false;
//   //     state.delete = action.payload;
//   //     state.error = ''
//   //   },
//   //   fetchError: (state, action) => {
//   //     state.isLoading = false;
//   //     state.error = action.payload;
//   //   },
//   // },

//   // extraReducers: {
//   //   [phoneBook.pending]: (state, action) => {
//   //     state.isLoading = true;
//   //   },
//   //   [phoneBook.fulfilled]: (state, action) => {
//   //     state.isLoading = false;
//   //     state.delete = action.payload;
//   //     state.error = '';
//   //   },
//   //   [phoneBook.rejected]: (state, action) => {
//   //     state.isLoading = false;
//   //     state.error = action.payload;
//   //   },
//   // },

//   // extraReducers: builder => {
//   //   builder
//   //     .addCase(phoneBook.pending, (state, action) => {
//   //       state.isLoading = true;
//   //     })
//   //     .addCase(phoneBook.fulfilled, (state, action) => {
//   //       state.isLoading = false;
//   //       state.delete = action.payload;
//   //       state.error = '';
//   //     })
//   //     .addCase(phoneBook.rejected, (state, action) => {
//   //       state.isLoading = false;
//   //       state.error = action.payload;
//   //     });
//   // },

//   extraReducers: builder => {
//     builder
//       .addCase(phoneBook.pending, handlePending)
//       .addCase(phoneBook.fulfilled, handleFulfilled)
//       .addCase(phoneBook.rejected, handleRejected)
//   },

// });
