import {
  getAllContacts,
  addContact,
  deleteContact,
} from '../../services/API/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const result = await getAllContacts();
      // console.log(result);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/fetchAdd',
  async (data, thunkAPI) => {
    try {
      const result = await addContact(data);
      // console.log(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
  // {
  //   condition: ({ name }, { getState }) => {
  //     // console.log(name);
  //     const contacts = getState();
  //     // console.log(contacts.contacts.items);

  //     const contactsItems = contacts.contacts.items;
  //     // console.log(contactsItems);
  //     const searchName = name.toLowerCase();
  //     const result = contactsItems.find(item => {
  //       return searchName === item.name.toLowerCase();
  //     });
  //     if (result) {
  //       alert(`${contacts.name} is already in your contacts!`);
  //       return false;
  //     }
  //   },
  // }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDelete',
  async (id, thunkAPI) => {
    try {
      await deleteContact(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
