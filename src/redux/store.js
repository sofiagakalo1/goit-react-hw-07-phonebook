import { configureStore } from '@reduxjs/toolkit';
// import {contactsReducer} from './contacts/contacts-slice';
// import {filterReducer} from './filter/filter-slice';
import rootReducer from './root-reducer';

export const store = configureStore({
reducer: rootReducer,
});

export default store;