import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const removeContactsRequest = createAction('contacts/removeRequest');
const removeContactsSuccess = createAction('contacts/removeSuccess');
const removeContactsError = createAction('contacts/removeError');

const deleteContact = createAction('@contact/deleteContact');
const setFilter = createAction('@contact/setFilter');
const setAlert = createAction('@contact/setAlert,');

export {
    addContactRequest,
    addContactSuccess,
    addContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    removeContactsRequest,
    removeContactsSuccess,
    removeContactsError,
    deleteContact,
    setFilter,
    setAlert,
};
