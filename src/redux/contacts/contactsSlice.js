import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContacts } from './contactsOperation';



const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const actions = [addContact, deleteContact, editContact, fetchContacts];

const handleFetchContacts = (state, action) => {
  state.contacts = action.payload
};

const handleAddContacts = (state, action) => {
  state.contacts.push(action.payload)
};

const handleDeleteContact = (state, action) => {
  const idx = state.contacts.findIndex(item => item.id === action.payload.id);
  state.contacts.splice(idx, 1);
};

const handleEditContact = (state, action) => {
  const index = state.contacts
        .findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(index, 1, action.payload);
};


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => 
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(editContact.fulfilled, handleEditContact)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        handleRejected
     ),
});

export const contactsReducer = contactsSlice.reducer;
