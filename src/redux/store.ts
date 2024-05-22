// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';

/**
 * The Redux store configured using the `configureStore` function from Redux Toolkit.
 * @constant {Store} store
 * @property {Object} reducer - An object containing the reducer functions for each slice of the store.
 * @property {Reducer} contacts - The reducer function for the contacts slice.
 */
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

/**
 * The root state type of the Redux store.
 * @type {RootState}
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The dispatch type of the Redux store.
 * @type {AppDispatch}
 */
export type AppDispatch = typeof store.dispatch;

/**
 * The default export of the Redux store.
 * @constant {Store} store
 */
export default store;