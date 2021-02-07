import { createAction } from '@reduxjs/toolkit';

const addNewContact = createAction('@contact/addNewContact');
const getAllContacts = createAction('@contact/getAllContacts');
const deleteContact = createAction('@contact/deleteContact');
const editContact = createAction('@contact/editContact');
const setFilter = createAction('@contact/setFilter');
const setAlert = createAction('@contact/setAlert,');
const setLoading = createAction('@contact/setLoading');
const setError = createAction('@contact/setLError');

export {
    addNewContact,
    deleteContact,
    editContact,
    setFilter,
    setAlert,
    getAllContacts,
    setLoading,
    setError,
};
