import axios from 'axios';
import {
    addNewContact,
    setError,
    setLoading,
    getAllContacts,
    deleteContact,
    editContact,
} from '../actions/contactsActions';

const addNewContactOperations = contacts => async (dispatch, getState) => {
    dispatch(setLoading());
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BASE_URL}/contacts.json`,
            contacts,
        );
        dispatch(addNewContact({ ...contacts, id: response.data.name }));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};

const getContactOperations = () => async dispatch => {
    dispatch(setLoading());
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/contacts.json`,
        );
        const contacts = Object.keys(response.data).map(key => ({
            ...response.data[key],
            id: key,
        }));
        dispatch(getAllContacts(contacts));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};
const deleteContactOperations = id => async dispatch => {
    dispatch(setLoading());
    try {
        await axios.delete(
            `${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`,
        );
        dispatch(deleteContact(id));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};
const editContactOperations = editedContact => async dispatch => {
    dispatch(setLoading());
    try {
        await axios.put(
            `${process.env.REACT_APP_BASE_URL}/contacts/${editedContact.id}.json`,
            editedContact,
        );
        dispatch(editContact(editedContact));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading());
    }
};
export {
    addNewContactOperations,
    getContactOperations,
    deleteContactOperations,
    editContactOperations,
};
