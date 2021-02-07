import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addNewContact = createAction('@contact/addNewContact', contact => ({
    payload: {
        ...contact,
        id: uuidv4(),
    },
}));
const deleteContact = createAction('@contact/deleteContact');
const setFilter = createAction('@contact/setFilter');
const setAlert = createAction('@contact/setAlert,');
const getAllContacts = createAction('@contact/getAllContacts');

export { addNewContact, deleteContact, setFilter, setAlert, getAllContacts };
