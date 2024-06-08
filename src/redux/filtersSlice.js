// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   status: 'all',
// //   searchQuery: '',
// // };

// // const filtersSlice = createSlice({
// //   name: 'filters',
// //   initialState,
// //   reducers: {
// //     setStatusFilter(state, action) {
// //       state.status = action.payload;
// //     },
// //     setSearchQuery(state, action) {
// //       state.searchQuery = action.payload;
// //     },
// //   },
// // });

// // export const { setStatusFilter, setSearchQuery } = filtersSlice.actions;
// // export const filtersReducer = filtersSlice.reducer;

// // // src/redux/filtersSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: {
//     searchQuery: '',
//   },
//   reducers: {
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//   },
// });

// export const { setSearchQuery } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
